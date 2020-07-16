import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import styles from './form.less'
import ValidationHint from './ValidationHint';




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
        console.log('Success:', values);
    };

    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    render() {
        const {
            pwValidateChar,
            showPwValidator,
            pwValidateLength,
            pwValidateSpecialChar
        } = this.state

        return (
            <Form
                data-test="component-SignUpForm"
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
                className={styles.signUpForm}
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
                                console.log(getFieldValue('email'));

                                if (value) {
                                    if (value.indexOf('@') == -1 || value.indexOf('.com') == -1) {
                                        console.log('not found');

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

                                console.log(getFieldValue('password'));
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
                                        console.log('really true');

                                        pwValidateSpecialChar = true
                                    } else {
                                        console.log('really false true');
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

                            />}


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

                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Submit
        </Button>
                </Form.Item>
            </Form>
        )
    }
}

export default SignUpForm
