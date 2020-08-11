import React, { Component } from 'react'
import intl from 'react-intl-universal';


const headerId=()=>(
    {
        title: () => (intl.get('id')),
        dataIndex: 'id',
        key: 'id',
        
    }
)

const headerProductCategory=()=>(
    {
        title: () => (intl.get('productCategory')),
        dataIndex: 'productCategory',
        key: 'productCategory',
        
    }
)

const headerProductName=()=>(
    {
        title: () => (intl.get('productName')),
        dataIndex: 'productName',
        key: 'productName',
        
    }
)


const headerProductCost=()=>(
    {
        title: () => (intl.get('productCost')),
        dataIndex: 'productCost',
        key: 'productCost',
        
    }
)

const headerProductRemaining=()=>(
    {
        title: () => (intl.get('productRemaining')),
        dataIndex: 'productRemaining',
        key: 'productRemaining',
        
    }
)

const headerProductStatus=()=>(
    {
        title: () => (intl.get('productStatus')),
        dataIndex: 'productStatus',
        key: 'productStatus',
        
    }
)

const lastModifiedBy=()=>(
    {
        title: () => (intl.get('lastModifiedBy')),
        dataIndex: 'lastModifiedBy',
        key: 'lastModifiedBy',
        
    }
)

const lastModifiedDate=()=>(
    {
        title: () => (intl.get('lastModifiedDate')),
        dataIndex: 'lastModifiedDate',
        key: 'lastModifiedDate',
        
    }
)



export const GetHeader = (config) => {
   
    
    return (
        [
            headerId(),
            headerProductCategory(),
            headerProductName(),
            headerProductCost(),
            headerProductRemaining(),
            headerProductStatus(),
            lastModifiedBy(),
            lastModifiedDate(),
        ])


}
