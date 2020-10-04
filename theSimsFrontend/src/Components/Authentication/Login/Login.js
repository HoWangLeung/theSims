import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import AuthenticationService from '../SignUp/AuthenticationService'
import { connect } from 'react-redux'
import { loginAction } from '../SignUp/actions/AuthenticationActions'
import { withRouter } from 'react-router-dom';
import classes from '../Authentication.less'
import intl from 'react-intl-universal';
import 'antd/dist/antd.less';
import CommonModal from '../../../Common/ConfirmModal/CommonModal';
class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn:false,
            disableLogin:true
        }
    }

    onFinish = async (values) => {
        
        const { username, password, remember } = values
      
        AuthenticationService
        .executeJwtAuthenticationService(username,password)
        .then((res)=>{
            console.log(res);
            AuthenticationService.registerSuccessfulLoginForJwt(username,res.data.token)
            let isLoggedIn = AuthenticationService.isUserLoggedIn()
           
            console.log(isLoggedIn);
            this.props.loginAction(isLoggedIn)
            this.props.history.push('/dashboard')
        }).catch((error)=>{
            console.log(error);
            CommonModal.error({content:"Invalid username/password"})
        })



    };

    onFinishFailed = errorInfo => {
        
    };

    onFieldsChange=(changedFields, allFields)=>{
        
        let bothFieldsFilled = allFields.every(f => f.value !== undefined && f.value!=="");
        console.log(bothFieldsFilled);
        if(bothFieldsFilled)
        this.setState({disableLogin:false})
        else
        this.setState({disableLogin:true})
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
        const {disableLogin} = this.state
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
    
    console.log(state);
    return {

    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        loginAction: (isLoggedIn) => { dispatch(loginAction(isLoggedIn)) }
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
