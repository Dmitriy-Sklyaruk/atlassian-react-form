import React from 'react';
import RegistrationForm from '../components/registration';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<RegistrationForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
