import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
    componentDidMount() {
        // create action that initiate the props.name, phone, shift
        this.props.employeeUpdate({ prop: 'name', value: '' });
        this.props.employeeUpdate({ prop: 'phone', value: '' });
        this.props.employeeUpdate({ prop: 'shift', value: '' });
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;
        //console.log('onButtonpress this.props ', this.props);
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    render() {
        console.log('employee create this.props', this.props);
    
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create 
                    </Button>
                </CardSection>
            </Card>    
        );
    }
}

const mapStateToProps = (state) => {
    //console.log('mapStateToprops in EmployeeCreate state', state);
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift }; 
};

export default connect(mapStateToProps, 
    { employeeUpdate, employeeCreate })(EmployeeCreate);
