import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import AuthenticationService from '../SignUp/AuthenticationService'
import { connect } from 'react-redux'
import { loginAction } from '../SignUp/actions/AuthenticationActions'
import { withRouter } from 'react-router-dom';
import classes from '../Authentication.less'
import intl from 'react-intl-universal';

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn:false
        }
    }

    onFinish = async (values) => {
        
        const { username, password, remember } = values
        // if (username === 'derek' && password === '123') {
        //     await AuthenticationService.registerSuccessfulLogin(username)
        //     let isLoggedIn = AuthenticationService.isUserLoggedIn()
        //     this.props.loginAction(isLoggedIn)

        //     this.props.history.push('/dashboard')
        // }
        AuthenticationService
        .executeJwtAuthenticationService(username,password)
        .then((res)=>{
            
            AuthenticationService.registerSuccessfulLoginForJwt(username,res.data.token)
            let isLoggedIn = AuthenticationService.isUserLoggedIn()
            // localStorage.setItem('jwtToken', res.data.token);

            this.setState({isLoggedIn:true})

            this.props.loginAction(this.state.isLoggedIn)
            this.props.history.push('/dashboard')
        }).catch((error)=>{
            
        })



    };

    onFinishFailed = errorInfo => {
        
    };

    generateLoginForm = () => {
        const layout = {
            labelCol: {
                span: 8,
            },
            wrapperCol: {
                span: 16,
            },
        };
        const tailLayout = {
            wrapperCol: {
                offset: 8,
                span: 16,
            },
        };
        return (
            <>
                <h1>{intl.get('signin')}</h1>
                <Form
                    {...layout}
                    name="basic"
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <Form.Item
                        label={intl.get('username')}
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label={intl.get('password')}
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>


                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                           {intl.get('login')}
          </Button>
                    </Form.Item>
                </Form>
            </>
        )
    }

    render() {



        const loginForm = this.generateLoginForm()
        return (
            <div className={classes.loginFormContainer}>
                {loginForm}
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    

    return {

    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        loginAction: (isLoggedIn) => { dispatch(loginAction(isLoggedIn)) }
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
