import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyCKQnD-_WYt7Zpwgf-xw9xfguOClgWg-6Q',
    authDomain: 'manager-c09f5.firebaseapp.com',
    databaseURL: 'https://manager-c09f5.firebaseio.com',
    projectId: 'manager-c09f5',
    storageBucket: 'manager-c09f5.appspot.com',
    messagingSenderId: '1096390103989'
  };

  firebase.initializeApp(config);
  }


  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
