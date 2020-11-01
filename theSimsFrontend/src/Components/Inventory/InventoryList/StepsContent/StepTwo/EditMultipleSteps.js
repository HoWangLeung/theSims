import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Steps, Button, message, Spin } from 'antd';
import EditStepOne from '../StepOne/EditStepOne';
import classes from '../../../Inventory.less'
import EditStepTwo from './EditStepTwo';
import { nextPage, prevPage, saveUpdatedList } from '../../../action/InventoryAction';
import CommonModal from '../../../../../Common/ConfirmModal/CommonModal';
import intl from 'react-intl-universal';
const { Step } = Steps;


class EditMultipleSteps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.propStep !== this.props.propStep) {
            console.log('setState now');
            this.setState({
                current: this.props.propStep
            })
        }

    }


    handleQuantityUpdate = async () => {
        const { previewList, saveUpdatedList } = this.props
        try {
            await saveUpdatedList(previewList)
            CommonModal.success({ content: "Successfully Updated" })
        } catch (err) {
            console.log(err);
        }


    }


    render() {
        const { nextPage, prevPage } = this.props
        let editBtnProps = {
            type: "primary",
            onClick: () => nextPage()
        }
        let createBtnProps = {
            form: "createproductForm",
            key: "submit",
            htmlType: "submit",
            type: "primary",
        }
        const { current } = this.state
        console.log(current);
        const { inventoryList, selectedRows, channel } = this.props
        const steps = [
            {
                title: 'Selected',
                content: <EditStepOne
                    key="EditStepOne"
                    content={this.props.content}
                    selectedRows={selectedRows}
                />,
            },
            {
                title: 'Edit & Preview',
                content: <EditStepTwo
                    key="EditStepTwo"
                    inventoryList={inventoryList}
                    handleQuantityUpdate={this.handleQuantityUpdate}
                    stepTwoContent={this.props.stepTwoContent}
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
                        <Button
                            style={{ margin: '0 8px' }}
                            onClick={() => prevPage()}>
                            Previous
                        </Button>
                    )}
                    {current < steps.length - 1 && (
                        <Button
                            {...(channel === "createProduct" ?
                                createBtnProps :
                                editBtnProps)}
                        >
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

    return {
        previewList: state.InventoryReducer.previewList,
        inventoryList: state.InventoryReducer.inventoryList,
        propStep: state.InventoryReducer.currentStep

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveUpdatedList: previewList => dispatch(saveUpdatedList(previewList)),
        nextPage: () => dispatch(nextPage()),
        prevPage: () => dispatch(prevPage())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditMultipleSteps)
