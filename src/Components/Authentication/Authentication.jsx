import React, { Component } from 'react'
import AuthenticationService from './SignUp/AuthenticationService'
import { Route,Redirect } from 'react-router-dom'

class Authentication extends Component {
  

    render() {
        if(AuthenticationService.isUserLoggedIn()){
            return <Route {...this.props}/>
        }else{
            return <Redirect to="/login"/>
        }
       
    }
}

export default Authentication
