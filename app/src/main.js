import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';
import '../../node_modules/css3-mediaqueries-js/css3-mediaqueries';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css';
import '../../node_modules/font-awesome/css/font-awesome.css';
import './assets/css/index.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import ImmPage from './components/page2/App';

render(
  <Provider store={store}>
     <App /> 
    {/* <ImmPage /> */}
  </Provider>,
  document.getElementById('root')
);
