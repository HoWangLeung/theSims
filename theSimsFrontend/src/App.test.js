import React from 'react';
import SignUpForm from './Components/forms/SignUpForm';
import Enzyme, {shallow} from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'


Enzyme.configure({adapter: new EnzymeAdapter()});

xtest('renders learn react link', () => {
  const wrapper = shallow(<SignUpForm/>)
  expect(wrapper).toBeTruthy();
  
});
