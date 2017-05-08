import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router.js';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
