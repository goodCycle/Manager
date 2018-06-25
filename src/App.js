import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import thunk from 'redux-thunk';
import reducers from './reducers';
//import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCzo36RTib5SnETUfWH5UkJZd1U65zOdiA',
      authDomain: 'manager-47012.firebaseapp.com',
      databaseURL: 'https://manager-47012.firebaseio.com',
      projectId: 'manager-47012',
      storageBucket: '',
      messagingSenderId: '310796433102'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(thunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
