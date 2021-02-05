import React, { useEffect, useState } from 'react'
import { Form, Input, Col, Row, Button } from 'antd';
import classes from '../UserProfile.less'
import { Typography, Space } from 'antd';
import intl from 'react-intl-universal';
import { values } from 'lodash';
const { Text, Link } = Typography;

export default function BasicInfoDisplay(props) {
    const { userProfile, initialValues,toggleEditMode,editMode } = props
    const layout = {
        labelCol: { span: 9 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 20, span: 4 },
    };

    const onFinish = (values) => {
        
    }

    return (
        <Form
            initialValues={initialValues}
            name="userProfileDisplay"
            onFinish={onFinish}
        >


            <Row className={classes.userInfoRowContainer}   >

                {Object.keys(userProfile)
                    .filter(field => field !== "id" && field !== "role")
                    .map((field, i) => {
                        
                        return (<Col xs={24} lg={12} className={classes.userInfoCol}   >
                            <Form.Item
                                labelAlign="left"
                                {...layout}
                                name={field}
                                label={<Text strong >{intl.get(`userProfilePage.${field}`)}</Text>}
                                className={classes.userInfoDisplayField}
                            >


                                <Text>{userProfile[`${field}`]}</Text>

                            </Form.Item>
                        </Col>)

                    })}

            </Row>


            

            {/* <Form.Item
                {...tailLayout}
            >
                <Button
                    style={{ marginLeft: "8px" }}
                    htmlType="submit"
                >Confirm</Button>
            </Form.Item> */}


        </Form>
    )
}
