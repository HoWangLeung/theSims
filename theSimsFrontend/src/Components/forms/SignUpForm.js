import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import classes from './form.less'
import ValidationHint from './ValidationHint';
import Animate from 'rc-animate';




class SignUpForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showPwValidator: false,
            pwValidateChar: false,
            pwValidateLength: false,
            pwValidateSpecialChar: false,
        }
    }
    onFinish = values => {
        const { handleSubmit } = this.props
        
        handleSubmit(values)

    };

    onFinishFailed = errorInfo => {


    };
    render() {
        const {
            pwValidateChar,
            showPwValidator,
            pwValidateLength,
            pwValidateSpecialChar
        } = this.state

        const layout = {
            labelCol: { span: 8},
            wrapperCol: { span: 6 },
        };
        const tailLayout = {
            wrapperCol: { offset: 8, span: 16 },
        };

        return (
            <Form
               {...layout}
                data-test="component-SignUpForm"
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
                className={classes.signUpForm}
            >
                <Form.Item
                    label="Email"
                    name="email"
                    validateTrigger={['onChange', 'onBlur']}
                    rules={[
                        {
                            required: true,
                            message: '*This field is mandatory',
                        },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {


                                if (value) {
                                    if (value.indexOf('@') == -1 || value.indexOf('.com') == -1) {
                                        return Promise.reject('invalid email format')
                                    }
                                }

                                return Promise.resolve()

                            },
                        }),
                    ]}
                    onFocus={this.props.handleFocus}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    validateTrigger={['onChange', 'onFocus']}
                    rules={[
                        {
                            required: true,
                            message: '*This field is mandatory',
                        },
                        ({ getFieldValue }) => ({
                            validator: async (rule, value) => {
                                let {
                                    pwValidateChar,
                                    pwValidateLength,
                                    pwValidateSpecialChar
                                } = this.state


                                let pwCharRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*/;
                                let pwLengthRegex = /^[a-zA-Z0-9#?!@$%^&]{8,128}$/;
                                let pwSpecialCharRegex = /(?=.*?[#?!@$%^&])/;
                                if (value) {
                                    if (pwCharRegex.test(value)) {
                                        pwValidateChar = true;
                                    } else {
                                        pwValidateChar = false;
                                    }
                                    if (pwLengthRegex.test(value)) {
                                        pwValidateLength = true;

                                    } else {
                                        pwValidateLength = false;
                                    }

                                    if (pwSpecialCharRegex.test(value)) {


                                        pwValidateSpecialChar = true
                                    } else {

                                        pwValidateSpecialChar = false;
                                    }

                                }



                                this.setState({ pwValidateChar, pwValidateLength, pwValidateSpecialChar })
                                return Promise.resolve()
                            },
                        }),
                    ]}

                    // className={styles.passwordField}
                    onFocus={() => { this.setState({ showPwValidator: true }) }}
                    onBlur={() => { this.setState({ showPwValidator: false }) }}

                >
                    <div>
                        <Input.Password />
                        {showPwValidator &&
                           
                            <ValidationHint
                                pwValidateChar={this.state.pwValidateChar}
                                pwValidateLength={pwValidateLength}
                                pwValidateSpecialChar={pwValidateSpecialChar}

                            />
                        
                                 
                            }


                    </div>


                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }

                                return Promise.reject('The two passwords that you entered do not match!');
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>

 

                <Form.Item {...tailLayout} >
                    <Button type="primary" htmlType="submit">
                        Submit
        </Button>
                </Form.Item>
            </Form>
        )
    }
}

export default SignUpForm
