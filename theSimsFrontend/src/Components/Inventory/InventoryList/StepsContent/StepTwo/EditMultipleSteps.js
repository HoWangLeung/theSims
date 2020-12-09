import React, { Component, useRef } from 'react'
import { connect } from 'react-redux';
import { Steps, Button, message, Spin } from 'antd';
import EditStepOne from '../StepOne/EditStepOne';
import classes from '../../../Inventory.less'
import EditStepTwo from './EditStepTwo';
import { nextPage, prevPage, saveUpdatedList, createProduct } from '../../../action/InventoryAction';
import CommonModal from '../../../../../Common/ConfirmModal/CommonModal';
import intl from 'react-intl-universal';
import { FormInstance } from 'antd/lib/form';
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

            this.setState({
                current: this.props.propStep
            })
        }

    }
    componentWillUnmount() {

    }



    handleUpdate = async () => {


        try {
            const { previewList, saveUpdatedList, channel, createProduct, createProductList } = this.props
            if (channel === "createProduct") {

                CommonModal.confirm({

                    content: "Are you sure",
                    okText: intl.get('confirm'),
                    centered: true,
                    maskClosable: false,
                    // okButtonProps: { loading: this.props.isLoading },
                    keyboard: false,
                    margin: 0,
                    onOk: async () => {

                        await createProduct(createProductList)
                        CommonModal.success({
                            content: "Successfully Created"
                        })
                        this.setState({ current: 0 })
                        this.props.hideModal();


                    }
                })

            } else {

                
                this.child.formRef.current.validateFields()
                    .then(() => {

                        if (this.child.state.isValueChanged) {
                            CommonModal.confirm({
                                content: "Are you sure",
                                okText: intl.get('confirm'),
                                centered: true,
                                maskClosable: false,
                                // okButtonProps: { loading: this.props.isLoading },
                                keyboard: false,
                                margin: 0,
                                onOk: async () => {
                                    let payload = []
                                    previewList.forEach(e => {
                                        let content = {
                                            id: e.id,
                                            remaining: e.remaining
                                        }

                                        payload.push(content)
                                    })
                                  await saveUpdatedList(payload)
                                    this.props.hideModal();
                                    this.props.disableEdit();
                                    CommonModal.success({
                                        content: "Successfully Updated"
                                    })
                                }
                            })

                        }else{

                            CommonModal.error({
                                content: "You didn't change any of the values, make change to at least one of the products to proceed.",
                                okText: "Got it",
                                centered: true,
                                maskClosable: false,
                                keyboard: false,
     
                                 
                            })
                        }

                    })


            }

        } catch (err) {

        }


    }


    render() {
        const { nextPage, prevPage, previewList, inventoryList, selectedRows, channel, selectedRowKeys } = this.props

        let editBtnProps = {
            type: "primary",
            onClick: () => nextPage(previewList, channel),

        }
        let createBtnProps = {
            form: "createproductForm",
            key: "submit",
            htmlType: "submit",
            type: "primary",
        }
        const { current } = this.state


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
                    selectedRows={selectedRows}
                    handleQuantityUpdate={this.handleQuantityUpdate}
                    stepTwoContent={this.props.stepTwoContent}
                    selectedRowKeys={selectedRowKeys}
                    onRef={ref => (this.child = ref)}

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
                        <Button type="primary" onClick={this.handleUpdate}>
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
        propStep: state.InventoryReducer.currentStep,
        createProductList: state.InventoryReducer.createProductList

    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        saveUpdatedList: previewList => dispatch(saveUpdatedList(previewList)),
        createProduct: createProductList => dispatch(createProduct(createProductList)),
        nextPage: (previewList, channel) => dispatch(nextPage(previewList, channel)),
        prevPage: () => dispatch(prevPage())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditMultipleSteps)
