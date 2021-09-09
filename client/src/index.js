import '@babel/polyfill';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'
import store from '../store'
import img from '../assets/console.png'
import styles from '../styles.css'

ReactDOM.render(
  <Provider store={store}>
  <App/>
  <img src='../assets/console.png'></img>
  </Provider>,
  document.getElementById('root')
);
