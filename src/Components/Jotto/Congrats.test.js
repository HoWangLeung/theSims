import React from 'react'
import {shallow} from 'enzyme'
import Congrats from './Congrats'
import { findByTestAttr, checkProps} from '../../../test/testUtils'

const defaultProps= {success:false}
const setup = (props={})=>{
    const setupProps = {...defaultProps,...props}
    return shallow(<Congrats {...setupProps}/>)
}

xtest('render without error', ()=>{
    const wrapper = setup({success:false})
    const component = findByTestAttr(wrapper, 'component-congrats')
    expect(component.length).toBe(1);
})

xtest ('render no text when  success prop is false',()=>{
    const wrapper = setup({success:false})
    const component = findByTestAttr(wrapper, 'component-congrats')
    expect(component.text()).toBe('');
} )

xtest ('render non empty text message when  success prop is true',()=>{
    const wrapper = setup({success:true})
    const message = findByTestAttr(wrapper, 'congrats-message')
    expect(message.text()).not.toBe(0);
} )

xtest("does not throw warning with expected props",()=>{
    const expectedProps = {success:false};

    checkProps(Congrats, expectedProps)
})

