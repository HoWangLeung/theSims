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
      render: (text, row, index) => {

         return <span>{row.countryOrigin}</span>
    }
    },
    {
      title: 'Cost',
      dataIndex: 'Cost',
      render: (text, row, index) => {

        return <span>{row.cost}</span>
   }
    },
    {
        title: 'Price',
        dataIndex: 'Price',
        render: (text, row, index) => {

          return <span>{row.basePrice}</span>
     }
      },
      {
        title: 'Remaining',
        dataIndex: 'remaining',
      },
  ];

function CreateProductPreview(props) {
    const createProductList = useSelector(state => state.InventoryReducer.createProductList);
    
    return (<Table
        columns={columns}
        dataSource={createProductList}
        bordered
        title={() => 'Preview Table'}
        footer={() => `${createProductList.length} product(s) will be created`}
    />)
}

CreateProductPreview.propTypes = {

}

export default CreateProductPreview
