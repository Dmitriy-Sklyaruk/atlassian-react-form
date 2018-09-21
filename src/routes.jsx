import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Application from './app'
import RegistrationForm from './components/registration';
import QuestionForm from './components/question'

export default (
  <Route path='/' component={Application}>
    <IndexRoute component={QuestionForm} />
    <Route path='/question' component={QuestionForm} />
    <Route path='/registration' component={RegistrationForm} />
  </Route>
);
