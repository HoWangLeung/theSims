import React, { Component } from 'react'
import AuthenticationService from './SignUp/AuthenticationService'
import { Route,Redirect } from 'react-router-dom'
import axios from 'axios'


class Authentication extends Component {

    constructor(props){
        super(props)

    }
  
    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
        if (user === null) {
            return false
        } else {
            return true;
        }
    }

    setupAxiosInterceptors(){
        let token = sessionStorage.getItem('USER_TOKEN')
        
     

        axios.interceptors.request.use(
            (config)=>{
                if(this.isUserLoggedIn()){
                    console.log('set up interceptor');
                    config.headers.authorization = sessionStorage.getItem("USER_TOKEN")
                }
                return config
            }
        )
    }

    componentWillMount(){
        if(this.isUserLoggedIn()){
            this.setupAxiosInterceptors()
        }
      
    }

    render() {
        if(AuthenticationService.isUserLoggedIn()){
            return <Route {...this.props}/>
        }else{
            return <Redirect to="/login"/>
        }
       
    }


}

export default Authentication
