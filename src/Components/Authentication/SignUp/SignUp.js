import React, { Component } from 'react'
import SignUpForm from '../../forms/SignUpForm'
import styles from '../Authentication.less'
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

    render() {
        return (

            <div className={styles.container}>
                <SignUpForm handleFocus={this.handleFocus} />
            </div>

        )
    }
}

export default SignUp
