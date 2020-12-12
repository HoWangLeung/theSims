import React, { useEffect, useState } from 'react'
import { Form, Input, Col, Row, Button } from 'antd';
import classes from '../UserProfile.less'
import { Typography, Space } from 'antd';
import intl from 'react-intl-universal';
import { values } from 'lodash';
const { Text, Link } = Typography;

export default function Editbasicinfoform(props) {
    const { userProfile, initialValues } = props
    const layout = {
        labelCol: { span: 9 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 20, span: 4 },
    };

    const sleep = m => new Promise(r => setTimeout(r, m))
    const onFinish = async (values) => {
        console.log("userProfileForm =>", values);
        
    }

    return (
        <Form
            initialValues={initialValues}
            name="userProfileForm"
            onFinish={onFinish}
        >


            <Row className={classes.userInfoRowContainer}   >

                {Object.keys(userProfile)
                    .filter(field => field !== "id" && field !== "role")
                    .map((field, i) => {
                        console.log(field);
                        return (<Col xs={24} lg={12} className={classes.userInfoCol}   >
                            <Form.Item
                                labelAlign="left"
                                {...layout}
                                name={field}
                                label={<Text strong >{intl.get(`userProfilePage.${field}`)}</Text>}
                                className={classes.userInfoDisplayField}
                            >

                                <Input
                                    className={classes.userInfoInputField}
                                     
                                />

                            </Form.Item>
                        </Col>)

                    })}

            </Row>




           

        </Form>
    )
}
