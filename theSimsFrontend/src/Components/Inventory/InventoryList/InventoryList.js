import React, { Component } from 'react'
import { Table, Button, Spin } from 'antd';
import { GetHeader } from './GetHeader';
import CommonModal from '../../../Common/CommonModal/CommonModal';
import EditMultiple from './EditMultiple';
import EditMultipleSteps from './EditMultipleSteps';


const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        id: i,
        productName: `London, Park Lane no. ${i}`

    });
}
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
        console.log('show modal');
     this.setState({showModal:true})
    };

    hideModal =()=>{
        this.setState({showModal:false})
    }

    onSelectChange = (selectedRowKeys,selectedRows) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        console.log(selectedRows);
        this.setState({ selectedRowKeys,selectedRows });
    };

    onSelect=(record, selected, selectedRows, nativeEvent)=>{
        console.log(record,selected, selectedRows);
    }

    render() {
        const { loading, selectedRowKeys,showModal,selectedRows } = this.state;
        const{isLoading,inventoryList} = this.props
      
        const hasSelected = selectedRowKeys.length > 0;

        const columns = GetHeader();
        console.log(inventoryList);
        return (
            <div>
                <div style={{ marginBottom: 16 }}>
                    <Button type="primary" onClick={this.showModal} disabled={!hasSelected} loading={loading}>
                        Edit Multiple
          </Button>

          <CommonModal 
          visible={this.state.showModal}
          hideModal={this.hideModal}
          content={<EditMultipleSteps content={selectedRows} />}
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
