import React from 'react'
import { Form, Input, InputNumber, Button, Col, Row } from 'antd';
import classes from '../UserProfile.less'

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
export default function Userinfo(props) {

    const onFinish = (values) => {
        console.log(values);
    };
    return (
        <Row className={classes.userInfoContainer}>
            <Form {...layout}

                name="nest-messages"
                onFinish={onFinish}
                validateMessages={validateMessages}>


                <Row  className={classes.userInfoRowContainer}   >
                    <Col xs={24} lg={12} className={classes.userInfoCol}   >
                        <Form.Item
                            name={['user', 'name']}
                            label="Username"
                          
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name={['user', 'email']}
                            label="First Name"
                       
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name={['user', 'name']}
                            label="Last Name"
                       
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} lg={12} className={classes.userInfoCol}   >
                        <Form.Item
                            name={['user', 'name']}
                            label="Address"
                           
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name={['user', 'email']}
                            label="Contact"
                      
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name={['user', 'name']}
                            label="Birthday"
                    
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>

                {/* <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
        </Button>
                </Form.Item> */}
            </Form>
        </Row>
    )
}
