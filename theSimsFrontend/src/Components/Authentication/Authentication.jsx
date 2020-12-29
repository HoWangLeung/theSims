import React, { Component } from 'react'
import AuthenticationService from './SignUp/AuthenticationService'
import { Route, Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import { Button, Result } from 'antd'
import { motion } from 'framer-motion'
import { baseVariants } from '../../Animation'


class Authentication extends Component {

    constructor(props) {
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

    setupAxiosInterceptors() {


        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {

                    config.headers.authorization = sessionStorage.getItem("USER_TOKEN")
                }
                return config
            },
            error => {

            }
        )
    }

    componentWillMount() {

        // if(this.isUserLoggedIn()){
        //     this.setupAxiosInterceptors()
        // }

    }

    render() {
        console.log(this.props);
        if (AuthenticationService.isUserLoggedIn()) {
            return <Route {...this.props} />
        } else {
            return <Result
                status="success"
                title="Successfully LoggedOut"
                extra={
                    <motion.div variants={baseVariants}      initial="hidden"
                    animate="visible"
                    exit="exit" >  
                        <Link to="/">
                            <Button type="primary" key="console">
                                Home
                       </Button>
                        </Link>
                    </motion.div>
                }
            />
        }

    }


}

export default Authentication
