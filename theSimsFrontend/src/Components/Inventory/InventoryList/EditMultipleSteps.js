import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Steps, Button, message, Spin } from 'antd';
import EditMultiple from './EditMultiple';
import classes from '../Inventory.less'
import EditStepTwo from './StepsContent/StepTwo/EditStepTwo';
import { saveUpdatedList } from '../action/InventoryAction';
import CommonModal from '../../../Common/ConfirmModal/CommonModal';
import intl from 'react-intl-universal';
const { Step } = Steps;


class EditMultipleSteps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        };
    }

    next = () => {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }


    handleQuantityUpdate = () => {
        const { previewList, saveUpdatedList } = this.props
        console.log('line 30', previewList);
        saveUpdatedList(previewList)

    }

   
    render() {
        const { current } = this.state
        const { inventoryList } = this.props
        const steps = [
            {
                title: 'Selected',
                content: <EditMultiple content={this.props.content} />,
            },
            {
                title: 'Edit & Preview',
                content: <EditStepTwo
                    inventoryList={inventoryList}
                    handleQuantityUpdate={this.handleQuantityUpdate}
                />,
            },

        ];

        return (
            <>
                <Steps current={current}>
                    {steps.map(item => (
                        <Step key={item.title} title={item.title} />
                    ))}
                </Steps>
                <div className={classes.stepsContent}>{steps[current].content}</div>
                <div className="steps-action">


                    {current > 0 && (
                        <Button style={{ margin: '0 8px' }} onClick={() => this.prev()}>
                            Previous
                        </Button>
                    )}
                    {current < steps.length - 1 && (
                        <Button type="primary" onClick={this.next}>
                            Next
                        </Button>
                    )}
                    {current === steps.length - 1 && (
                        <Button type="primary" onClick={this.handleQuantityUpdate}>
                            Confirm
                        </Button>
                    )}
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        previewList: state.InventoryReducer.previewList,
        inventoryList: state.InventoryReducer.inventoryList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveUpdatedList: (previewList) => { dispatch(saveUpdatedList(previewList)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditMultipleSteps)
