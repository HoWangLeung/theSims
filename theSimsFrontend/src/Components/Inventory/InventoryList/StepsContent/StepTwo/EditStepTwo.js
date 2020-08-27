import React, { Component } from 'react'
import TweenOne from 'rc-tween-one';
import classes from '../../../Inventory.less';
import { Form, Input, Button, Checkbox } from 'antd';
import PreviewTable from './PreviewTable';
import Animate from 'rc-animate';
import styles from './Animation.less'
import cloneDeep from 'lodash/cloneDeep';
import _ from 'lodash'


const layout = {
    labelCol: {
        span: 10,
    },
    wrapperCol: {
        span: 16,
    },
    layout: "inline"
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
        this.state = {
            showAnimation: true,
            addToAllValue: 0,
            previewList: []
        }
    }

    componentDidMount() {
        const { inventoryList } = this.props
        const previewList = cloneDeep(inventoryList);
        previewList.forEach((item) => {
            item.remaining += this.state.addToAllValue
        })

        this.setState(({
            previewList
        }))
    }

    onFinish = values => {
 
        if (!_.isUndefined(values.addToAll)) {

            const { inventoryList } = this.props
            const valueToAdd = parseInt(values.addToAll)
            const updatedPreviewList = cloneDeep(previewList);
            updatedPreviewList.forEach((item) => {
                item.remaining += valueToAdd
            })
            this.setState({ previewList: updatedPreviewList })
            const { previewList } = this.state

            
          
        }


    };
    onPreview = () => {
        this.setState({
            showAnimation: !this.state.showAnimation,
        });
    }

    onFinishFailed = errorInfo => {

    };

    getForm = () => {
        const { showAnimation } = this.state
        return (<Form
            {...layout}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            className={classes.formContainer}
        >
            <Form.Item
                label="Add to All"
                name="addToAll"

            >
                <Input
                    placeholder="number"
                    type="number" />
            </Form.Item>
            <Form.Item >
                <Button type="primary" htmlType="submit">
                    ADD
                 </Button>
            </Form.Item>
            <Form.Item >

                <Button type="primary" onClick={this.onPreview}>
                    {showAnimation ? ' Hide ' : 'Preview'}
                </Button>


            </Form.Item>
        </Form>
        )
    }

    render() {
        const { inventoryList } = this.props
        const { showAnimation, addToAllValue, previewList } = this.state
        const addToAllInput = this.getForm()


        return (
            <div className={classes.stepTwoContainer} >
                {addToAllInput}
                <Animate
                    transitionName={{
                        enter: styles['fade-enter'],
                        enterActive: styles['fade-enter-active'],
                        leave: styles['fade-leave'],
                        leaveActive: styles['fade-leave-active'],
                        appear: styles['fade-appear'],
                        appearActive: styles['fade-appear-active']
                    }}
                    transitionAppear
                >
                    {showAnimation && <PreviewTable
                        key="previewTable"
                        previewList={previewList}
                        addToAllValue={addToAllValue}
                    />}
                </Animate>
            </div>
        );
    }
}

export default EditStepTwo
