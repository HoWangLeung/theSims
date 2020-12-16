import React, { Component } from 'react'
import { Table, Button, Spin } from 'antd';
import { GetHeader } from './GetHeader';
import CommonModal from '../../../Common/CommonModal/CommonModal';
import EditMultipleSteps from './StepsContent/StepTwo/EditMultipleSteps';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import Createproduct from './StepsContent/StepOne/CreateProduct/Createproduct';
import Selectedlist from './StepsContent/StepOne/SelectedList/SelectedList';
import { resetCurrentStep } from '../action/InventoryAction';
import intl from 'react-intl-universal';
import { withRouter } from 'react-router-dom';
class InventoryList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedRowKeys: [],
            selectedRows: [],
            loading: false,
            showModal: false,
            disableEdit: true,
            stepOneContent: {},
            stepTwoContent: {},
            channel: '',
            resetCurrentStep: false,

        }
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.inventoryList !== this.props.inventoryList) {

            this.setState({
                showModal: false,
                selectedRowKeys: []
            })
        }


    }

    showModal = (e, channel) => {

        const contentType = e.currentTarget.id
        this.setState({
            showModal: true,
            stepOneContent: contentType,
            stepTwoContent: contentType,
            channel: channel
        });
    }

    disableEdit = () => (this.setState({ disableEdit: true }))

    hideModal = () => this.setState({ showModal: false })

    onSelectChange = (selectedRowKeys, selectedRows) => {
        let state = { selectedRowKeys, selectedRows }
        state.disableEdit = isEmpty(selectedRowKeys) ? true : false
        this.setState(state);
    };

    onSelect = (record, selected, selectedRows, nativeEvent) => {

    }

    getFooter = () => {
        const { isFetching } = this.props
        return ([<Button onClick={this.hideModal} disabled={isFetching['SAVE_UPDATEDLIST']} >Cancel</Button>])
    }

    resetCurrentStep = () => {
        const { resetCurrentStep } = this.props
        resetCurrentStep()

    }

    render() {
        const { selectedRowKeys, showModal, selectedRows, disableEdit, stepOneContent, stepTwoContent } = this.state;
        const { inventoryList, isFetching } = this.props

        const hasSelected = selectedRowKeys.length > 0;

        const columns = GetHeader();

        return (
            <div>
                <div style={{ marginBottom: 16 }}>
                    <Button type="primary" id="createProduct" onClick={(e) => this.showModal(e, "createProduct")} >
                        {intl.get('inventory.create')}
                    </Button>
                    <Button type="primary" id="editMultiple" disabled={disableEdit}
                        onClick={(e) => this.showModal(e, "editMultiple")} >
                        {intl.get("inventory.editMultiple")}
                    </Button>
                    <CommonModal

                        visible={showModal}
                        hideModal={this.hideModal}
                        afterClose={this.resetCurrentStep}
                        content=
                        {
                            <EditMultipleSteps

                                inventoryList={inventoryList}
                                content={stepOneContent}
                                stepTwoContent={stepTwoContent}
                                selectedRows={selectedRows}
                                channel={this.state.channel}
                                hideModal={this.hideModal}
                                disableEdit={this.disableEdit}
                                selectedRowKeys={selectedRowKeys}


                            />
                        }

                        footer={this.getFooter()}
                        isLoading={isFetching['SAVE_UPDATEDLIST']}
                        loadingTip="Saving Your Changes"
                        closable={!isFetching['SAVE_UPDATEDLIST']}
                        maskClosable={!isFetching['SAVE_UPDATEDLIST']}
                    />

                    <span style={{ marginLeft: 8 }}>
                        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                    </span>
                </div>
                <Spin spinning={isFetching['FETCH_INVENTORY']} >
                    <Table
                        rowKey={record => record.id}
                        rowSelection={{
                            type: "checkbox",
                            selectedRowKeys,
                            onChange: this.onSelectChange
                        }}
                        scroll={{ x: true }}
                        columns={columns} dataSource={inventoryList} />
                </Spin>
            </div>
        )
    }
}
// const loadingSelector = createLoadingSelector(['FETCH_INVENTORY','SAVE_UPDATEDLIST']);
const mapStateToProps = (state) => {


    return {
        isLoading: state.InventoryReducer.loading,
        showModal: state.InventoryReducer.showModal,
        inventoryList: state.InventoryReducer.inventoryList,
        isFetching: state.LoadingReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        resetCurrentStep: () => dispatch(resetCurrentStep())
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(InventoryList))
