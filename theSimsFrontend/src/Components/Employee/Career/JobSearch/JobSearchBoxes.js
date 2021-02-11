import React from 'react'
import { Input, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';
 

export default function JobSearchBoxes(props) {

 
    return (
        <>
             <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
        </>
    )
}
