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
      title: 'Country',
      className: 'Country',
      dataIndex: 'Country',
      align: 'right',
    },
    {
      title: 'Cost',
      dataIndex: 'Cost',
    },
    {
        title: 'Price',
        dataIndex: 'Price',
      },
      {
        title: 'Remaining',
        dataIndex: 'Remaining',
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
