import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';

import configureStore from './store';
import Router from './router';

const store = configureStore({});

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyBRVvKC-ik4RqohW8HKv2tk-zzQMrNX-iY',
            authDomain: 'ebook-ace65.firebaseapp.com',
            databaseURL: 'https://ebook-ace65.firebaseio.com',
            projectId: 'ebook-ace65',
            storageBucket: 'ebook-ace65.appspot.com',
            messagingSenderId: '523511961273'
        });
    }

    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
