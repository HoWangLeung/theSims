import React, { Component } from 'react'
import { Table, Button, Spin } from 'antd';
import { GetHeader } from './GetHeader';
import CommonModal from '../../../Common/CommonModal/CommonModal';
import EditMultiple from './EditMultiple';
import EditMultipleSteps from './EditMultipleSteps';

class InventoryList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedRowKeys: [], // Check here to configure the default column
            selectedRows:[],
            loading: false,
            showModal:false
        }
    }

    showModal = e => {
        
     this.setState({showModal:true})
    };

    hideModal =()=>{
        this.setState({showModal:false})
    }

    onSelectChange = (selectedRowKeys,selectedRows) => {
        
        
        this.setState({ selectedRowKeys,selectedRows });
    };

    onSelect=(record, selected, selectedRows, nativeEvent)=>{
        
    }

    render() {
        const { loading, selectedRowKeys,showModal,selectedRows } = this.state;
        const{isLoading,inventoryList} = this.props
      
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
          />
                    <span style={{ marginLeft: 8 }}>
                        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                    </span>
                </div>
                <Spin spinning={isLoading} >
                    <Table
                    rowKey={record => record.id}
                     rowSelection={{
                         type:"checkbox",
                         onChange:this.onSelectChange
                     }} 
                     
                     
                     columns={columns} dataSource={inventoryList} />
                </Spin>
            </div>
        )
    }
}

export default InventoryList
