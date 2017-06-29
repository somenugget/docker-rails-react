import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.css';

import store from './stores/store';
import MyContainer from './containers/MyContainer';
import './stylesheets/main.scss';

ReactDOM.render(
  <Container>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={MyContainer}/>
      </Router>
    </Provider>
  </Container>,
  document.getElementById('app')
);
