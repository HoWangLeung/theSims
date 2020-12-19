import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import AuthenticationService from '../SignUp/AuthenticationService'
import { connect } from 'react-redux'
import { getUserProfile, loginAction } from '../actions/AuthenticationActions'
import { withRouter } from 'react-router-dom';
import classes from '../Authentication.less'
import intl from 'react-intl-universal';
import 'antd/dist/antd.less';
import CommonModal from '../../../Common/ConfirmModal/CommonModal';
import jwt_decode from "jwt-decode";
class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false,
            disableLogin: true
        }
    }

    componentDidUpdate(prevProps){
        console.log(prevProps.isLoggedIn);
        console.log(this.props.isLoggedIn);
        if(prevProps.isLoggedIn!==this.props.isLoggedIn){
            console.log('did up date');
        }

    }


    onFinish = async (values) => {
        const { getUserProfile } = this.props
        const { username, password, remember } = values

        let res1 = await AuthenticationService
            .executeJwtAuthenticationService(username, password)
        console.log(res1);
        let token = res1.data.token
       
        AuthenticationService.registerSuccessfulLoginForJwt(username, token)
        let isLoggedIn = AuthenticationService.isUserLoggedIn()
        console.log('isLoggedIn ' , isLoggedIn);
      
        this.props.loginAction(isLoggedIn)


        // let payload = { username, password }
        // let res2 = await getUserProfile(payload)

        // console.log(res2);
        // sessionStorage.setItem('userId', parseInt(res2.data.detail.id))

        // if (res2.data.detail.role === 'CUSTOMER') {

        //     this.props.history.push('/')
        // }


        // if (res2.data.detail.role === 'ADMIN')
             this.props.history.push('/')





    };

    onFinishFailed = errorInfo => {

    };

    onFieldsChange = (changedFields, allFields) => {

        let bothFieldsFilled = allFields.every(f => f.value !== undefined && f.value !== "");

        if (bothFieldsFilled)
            this.setState({ disableLogin: false })
        else
            this.setState({ disableLogin: true })
    }

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
        const { disableLogin } = this.state
        return (
            <>
                <h1>{intl.get('signin')}</h1>
                <Form
                    {...layout}
                    name="basic"
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                    onFieldsChange={this.onFieldsChange}
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
                        <Button disabled={disableLogin} type="primary" htmlType="submit">
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
        isLoggedIn:state.AuthenticationReducer.isLoggedIn
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        loginAction: (isLoggedIn) =>  dispatch(loginAction(isLoggedIn)) ,
        getUserProfile: (payload) => dispatch(getUserProfile(payload))
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
