import React, { useEffect } from 'react'
import {
    Button,
    Form,
    Input,

} from 'antd';

import classes from '../UserProfile.less'


export default function Changepasswordform(props) {


    const onFinish = (values) => {

    }

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 6 },
    };

    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
      };

    return (
        <div>
            <Form
                {...layout}
                name="passwordModification"
                onFinish={onFinish}
            >

                <Form.Item
                    label="Current Password"
                    rules={[{ required: true }]}
                    name="currentPassword"

                >
                    <Input />
                </Form.Item>


                <Form.Item
                    label="New Password"
                    rules={[{ required: true }]}
                    name="password"

                >
                    <Input />
                </Form.Item>


                <Form.Item
                    label="Confirm New Password"
                    rules={[{ required: true }]}
                    name="rePassword"
                >
                    <Input />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Confirm
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
