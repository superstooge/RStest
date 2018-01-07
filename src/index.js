import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Layout from './components/Layout';
import ReactDOM from 'react-dom'
import React from 'react'


import store from './store'
store.subscribe(
    () => {

    }
)

ReactDOM.render(
    <Provider store={store}>
        <Layout />
    </Provider>,
    document.getElementById('app')
);