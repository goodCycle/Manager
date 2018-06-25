import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import ListItem from './ListItem';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
    componentWillMount() {
        this.props.employeesFetch(); //asynchronous

        this.createDataSource(this.props);
    }
    //새로운 prop을 받을 때 불리는 메소드, 새로운 prop으로 불림
    componentWillReceiveProps(nextProps) {
        // nextProps are the next set of props that this component
        // will be rendered with
        // this.props is still the old set of props

        this.createDataSource(nextProps);
    }

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }
    
    renderRow(employee) {
        return <ListItem employee={employee} />;
    }

    render() {
        return (
            <ListView
            enableEmptySections
            dataSource={this.dataSource}
            renderRow={this.renderRow}
            />              
        );
    }
}

const mapStateToProps = state => {
    // 모든 오브젝트를 받아 밑에 처럼 만들고 array 로 리턴
    //console.log('EmployeeList state.employees', state.employees);
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid }; // { shift: "mon", name: 'S', id: '1kdjfi' }
    });

    return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
