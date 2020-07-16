import React from 'react'
import PropTypes from 'prop-types'


const defaultProps={success:false, hello:false, hi:false}
const Congrats = (props={}) => {
    const testProps = {...defaultProps, ...props}
    console.log(testProps);


    if(props.success){
        return(
            <div data-test="component-congrats">
                <span data-test="congrats-message">Congratulations ! you geussesed the word!</span>
            </div>
        )
    }else{
        return(
            <div data-test="component-congrats"/>
        )
    }
}

Congrats.propTypes={
    success:PropTypes.bool,
}

export default Congrats;
