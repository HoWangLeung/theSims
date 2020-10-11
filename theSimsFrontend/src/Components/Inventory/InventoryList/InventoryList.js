import React, { Component } from 'react'
import { Table, Button, Spin } from 'antd';
import { GetHeader } from './GetHeader';
import CommonModal from '../../../Common/CommonModal/CommonModal';
import EditMultipleSteps from './StepsContent/StepTwo/EditMultipleSteps';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
class InventoryList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedRowKeys: [],
            selectedRows: [],
            loading: false,
            showModal: false,
            disableEdit: true
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

    showModal = () => this.setState({ showModal: true });

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

    render() {
        const { selectedRowKeys, showModal, selectedRows, disableEdit } = this.state;
        const { inventoryList, isFetching } = this.props

        const hasSelected = selectedRowKeys.length > 0;

        const columns = GetHeader();

        return (
            <div>
                <div style={{ marginBottom: 16 }}>
                    <Button type="primary" disabled={disableEdit} onClick={this.showModal} >
                        Edit Multiple
                     </Button>
                    <CommonModal
                        visible={showModal}
                        hideModal={this.hideModal}
                        content={<EditMultipleSteps inventoryList={inventoryList} content={selectedRows} />}
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

    console.log(state);
    return {
        isLoading: state.InventoryReducer.loading,
        showModal: state.InventoryReducer.showModal,
        inventoryList: state.InventoryReducer.inventoryList,
        isFetching: state.LoadingReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(InventoryList)
