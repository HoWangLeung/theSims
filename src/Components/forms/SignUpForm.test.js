import React from 'react'
import {shallow} from 'enzyme'
import { findByTestAttr, checkProps} from '../../../test/testUtils'
import SignUpForm from './SignUpForm'

const setup = (props={})=>{
    const setupProps = {...props}
    return shallow(<SignUpForm {...setupProps}/>)
}

xtest ("render without error", ()=>{
    const wrapper = setup();
    const component = findByTestAttr(wrapper,'component-SignUpForm')
    expect(component.length).toBe(1)
})

// test ("not rendering validator when showPwValidator is false ", ()=>{
//     const wrapper = setup({showPwValidator:true});
//     const validatorHint = findByTestAttr(wrapper, 'component-validatorHint')
//     expect(validatorHint.length).not.toBe(0);
// })