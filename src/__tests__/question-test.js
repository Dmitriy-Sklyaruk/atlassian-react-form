import React from 'react';
import QuestionForm from '../components/question';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<QuestionForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
