import React, { Component } from 'react'
import SignUpForm from '../../forms/SignUpForm'
import styles from '../Authentication.less'
import { connect } from 'react-redux'
import {signUpRequest} from '../actions/AuthenticationActions'
import { withRouter } from 'react-router-dom';
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

            <div className={styles.container}>
                <SignUpForm 
                handleFocus={this.handleFocus}
                handleSubmit={this.handleSubmit}
                
                />
            </div>

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
