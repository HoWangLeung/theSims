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
   
            console.log('intercepting');
        axios.interceptors.request.use(
            (config)=>{
                if(this.isUserLoggedIn()){
            
                    config.headers.authorization = sessionStorage.getItem("USER_TOKEN")
                }
                return config
            },
            error=>{
                
            }
        )
    }

    componentWillMount(){
        console.log('will mount');
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
