import React, { Component } from 'react'
import { Form, Input, Button, Select } from 'antd';
import classes from './Jotto.less'
const { Option } = Select;

class SelectDifficulty extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    hanldeOnTopicChange = e => {

    }

    render() {

        return (
            <>
            <Form name="control-hooks" onFinish={this.onFinish}>
                <Form.Item  className={classes.antt}  name="gender" label="Gender" rules={[{ required: true }]}>
                    <Select
                       
                        placeholder="Select a option and change input text above"
                        onChange={this.hanldeOnTopicChange}
                        allowClear
                    >
                        <Option value="male">Food</Option>
                        <Option value="female">Animal</Option>
                        <Option value="other">other</Option>
                    </Select>
                </Form.Item>
            </Form>

            <Form name="control-hooks" onFinish={this.onFinish}>
                <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
                    <Select
                        placeholder="Select a option and change input text above"
                        onChange={this.hanldeOnTopicChange}
                        allowClear
                    >
                        <Option value="male">Food</Option>
                        <Option value="female">Animal</Option>
                        <Option value="other">other</Option>
                    </Select>
                </Form.Item>
            </Form>

            </>
        )
    }
}

export default SelectDifficulty
