import React, { Component } from 'react'
import { Table, Button, Spin } from 'antd';
import { GetHeader } from './GetHeader';
import CommonModal from '../../../Common/CommonModal/CommonModal';
import EditMultipleSteps from './EditMultipleSteps';
import { connect } from 'react-redux';

class InventoryList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedRowKeys: [], 
            selectedRows: [],
            loading: false,
            showModal: false
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

    showModal = e => {

        this.setState({ showModal: true })
    };

    hideModal = () => {
        this.setState({ showModal: false })
    }

    onSelectChange = (selectedRowKeys, selectedRows) => {


        this.setState({ selectedRowKeys, selectedRows });
    };

    onSelect = (record, selected, selectedRows, nativeEvent) => {

    }

    getFooter = () => {
        return ([<Button onClick={this.hideModal}  >Cancel</Button>])
    }

    render() {
        const { loading, selectedRowKeys, showModal, selectedRows } = this.state;
        const { isLoading, inventoryList } = this.props

        const hasSelected = selectedRowKeys.length > 0;

        const columns = GetHeader();

        return (
            <div>
                <div style={{ marginBottom: 16 }}>
                    <Button type="primary" onClick={this.showModal} disabled={!hasSelected} loading={loading}>
                        Edit Multiple
          </Button>

                    <CommonModal
                        visible={this.state.showModal}
                        hideModal={this.hideModal}
                        content={<EditMultipleSteps inventoryList={inventoryList} content={selectedRows} />}
                        footer={this.getFooter()}
                        isLoading={isLoading}
                        loadingTip="Saving Your Changes"
                    />

                    <span style={{ marginLeft: 8 }}>
                        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                    </span>
                </div>
                <Spin spinning={isLoading} >
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
const mapStateToProps = (state) => {


    return {
        isLoading: state.InventoryReducer.loading,
        showModal: state.InventoryReducer.showModal,
        inventoryList:state.InventoryReducer.inventoryList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(InventoryList)
