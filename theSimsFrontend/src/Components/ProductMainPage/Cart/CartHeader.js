import React, { Component } from 'react'
import intl from 'react-intl-universal';
import { Button } from 'antd';
const headerId = () => (
    {
        title: intl.get('id'),
        dataIndex: 'productId',
        key: 'productId',
        align: 'productId',
        render: (text, row, index) => {
            
              return (
                  <p>
                      {row.product.id}
                  </p>
              )
          }
    }
)


const headerProductName = () => (
    {
        title: () => (intl.get('productName')),
        dataIndex: 'productName',
        align: 'center',
        key: 'productName',
        render: (text, row, index) => {
            
              return (
                  <p>
                      {row.product.productName}
                  </p>
              )
          }
    }
)



const headerQuantity = () => (
    {
        title: "Quantity",
        dataIndex: 'quantity',
        align: 'center',
        key: 'quantity',
        render: (text, row, index) => {
            
              return (
                  <p>
                      {row.quantity}
                  </p>
              )
          }
    }
)


const headerAction = (handleDelete) => (
    {
        title: "Action",
        dataIndex: 'actions',
        align: 'center',
        key: 'actions',
        render: (text, row, index) => {
            
              return (
           
                      <Button onClick={e=>handleDelete(row,e)}>
                      delete</Button>
            
              )
          }
        



    }
)



export const GetCartHeader = ({ handleDelete }) => {

    return (
        [
            headerId(),
            headerProductName(),
            headerQuantity(),
            headerAction(handleDelete)
        ])

}