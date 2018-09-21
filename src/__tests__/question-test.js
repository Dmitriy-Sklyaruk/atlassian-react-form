import React from 'react';
import QuestionForm from '../components/question';


import renderer from 'react-test-renderer';

import { configure } from 'enzyme';

import {shallow, mount} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


test('renders correctly', () => {
  const tree = renderer.create(<QuestionForm />).toJSON();
  expect(tree).toMatchSnapshot();
});


test('<QuestionForm/>', () => {
  it('renders 3 Fields', () => {
    const wrapper = mount(<QuestionForm/>);
    expect(wrapper.find('Field').length).toBe(3);
  });
});
