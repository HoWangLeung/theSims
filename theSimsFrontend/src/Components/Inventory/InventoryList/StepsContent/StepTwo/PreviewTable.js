import React, { Component } from 'react'
import { Table } from 'antd';
import { GetPreviewTableHeader } from '../../GetHeader';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
];
class PreviewTable extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        const { inventoryList,addToAllValue } = this.props
        const columns = GetPreviewTableHeader(addToAllValue)
        console.log(inventoryList);
        return (
            <div>
                <Table 
                columns={columns} 
                dataSource={inventoryList} 
                size="small"
                scroll={{y:150}}
                
                />
            </div>
        )
    }
}

export default PreviewTable
