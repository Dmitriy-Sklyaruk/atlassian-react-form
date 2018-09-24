import React from 'react';
import ReactDOM from 'react-dom';
import '@atlaskit/css-reset';

import { Router, browserHistory } from 'react-router';
import routes from './routes';


ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
);
