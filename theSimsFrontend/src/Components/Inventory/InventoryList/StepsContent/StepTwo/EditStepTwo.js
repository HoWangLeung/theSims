import React, { Component } from 'react'
import TweenOne from 'rc-tween-one';
import classes from '../../../Inventory.less';
import { Form, Input, Button, Checkbox } from 'antd';
import PreviewTable from './PreviewTable';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 15,
    },
};
const tailLayout = {
    // wrapperCol: {
    //     offset: 4,
    //     span: 4,
    // },
};

class EditStepTwo extends Component {
    constructor(props) {
        super(props);

    }

    onFinish = values => {
        console.log('Success:', values);
    };

    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    getForm = () => {
        return (<Form
            {...layout}
            layout="inline"
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
        >
            <Form.Item
                label="Add to All"
                name="addToAll"
                rules={[
                    {
                        required: true,
                        message: 'Please input a number!',
                    },
                ]}
            >
                <Input />
            </Form.Item>


            <Form.Item >
                <Button type="primary" htmlType="submit">
                    ADD
                 </Button>
            </Form.Item>
        </Form>
        )
    }

    render() {
        const {inventoryList}=this.props
        const addToAllInput = this.getForm()
      
        return (
            <div className={classes.stepTwoContainer} >
                {addToAllInput}
                <PreviewTable inventoryList={inventoryList} />
            </div>
        );
    }
}

export default EditStepTwo
