import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux';
import { Descriptions, Table } from 'antd';

const columns = [
    {
      title: 'ProductName',
      dataIndex: 'productName',
 
    },
    {
      title: 'Cash Assetss',
      className: 'column-money',
      dataIndex: 'money',
      align: 'right',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
        title: 'Address',
        dataIndex: 'address',
      },
      {
        title: 'Address',
        dataIndex: 'address',
      },
  ];

function CreateProductPreview(props) {
    const createProductList = useSelector(state => state.InventoryReducer.createProductList);
    console.log(createProductList);
    return (<Table
        columns={columns}
        dataSource={createProductList}
        bordered
        title={() => 'Header'}
        footer={() => 'Footer'}
    />)
}

CreateProductPreview.propTypes = {

}

export default CreateProductPreview
