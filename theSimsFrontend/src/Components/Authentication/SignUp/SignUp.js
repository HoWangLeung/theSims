import React, { Component } from 'react'
import SignUpForm from '../../forms/SignUpForm'
import styles from '../Authentication.less'
import { connect } from 'react-redux'
import {signUpRequest} from '../actions/AuthenticationActions'
import { withRouter } from 'react-router-dom';
import { motion } from 'framer-motion'
import { baseVariants } from '../../../Animation'
class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showUsernameValidation: false
        }
    }

    handleFocus = e => {

        return this.state.showUsernameValidation
    }

    handleSubmit=(values)=>{
        
        const {signUpRequest} = this.props
        const payload =
        {
            "username":values.email,
            "password":values.password
        }
        payload.enabled=true;
        payload.roles=[{id:2}]

        signUpRequest(payload)
    }

    render() {
        return (

            <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={baseVariants}
            className={styles.container}>
                <SignUpForm 
                handleFocus={this.handleFocus}
                handleSubmit={this.handleSubmit}
                
                />
            </motion.div>

        )
    }
}

const mapStateToProps = (state) => {
    

    return {
        

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    
    return {
        signUpRequest: (values) => {
            dispatch(signUpRequest(values,ownProps))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp))
