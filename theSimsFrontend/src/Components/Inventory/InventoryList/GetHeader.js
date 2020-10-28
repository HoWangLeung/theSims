import React, { Component } from 'react'
import intl from 'react-intl-universal';
import classes from '../Inventory.less'
import { Input } from 'antd';
import TweenOne from 'rc-tween-one';

const headerId = () => (
    {
        title: intl.get('id'),
        dataIndex: 'id',
        key: 'id',
        align: 'center',
    }
)

const headerProductCategory = () => (
    {
        title: intl.get('productCategory'),
        dataIndex: 'category',
        key: 'category',
        align: 'center',
        render: (text, row, index) => {

            return (
                <p>
                    {text.name}
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

    }
)


const headerProductCost = () => (
    {
        title: () => (intl.get('productCost')),
        dataIndex: 'cost',
        align: 'center',
        key: 'cost',

    }
)

const headerProductRemaining = () => {
    return ({
        title: () => (intl.get('productRemaining')),
        dataIndex: 'remaining',
        align: 'center',
        key: 'remaining',

    })
}

const headerProductRemainingWithInput = (handleInputChange) => {
    // const{handleInputChange} = callbacks
    return ({
        title: () => (intl.get('productRemaining')),
        dataIndex: 'remaining',
        align: 'center',
        key: 'remaining',
        render: (text, row, index) => {



            return (

                <Input       
                    id={row.id}   
                    onChange={handleInputChange}
                    key={row.id} defaultValue={row.remaining}
                    type="number"
                    value={row.remaining}
                />
            )
        }

    })
}

const headerProductStatus = () => (
    {
        title: () => (intl.get('productStatus')),
        dataIndex: 'productStatus',
        key: 'productStatus',
        align: 'center',
        render: (text, row, index) => {

            return (
                <div className={classes.circleContainer} >
                    <div className={classes.circle} />
                </div>
            )
        }

    }
)

const lastModifiedBy = () => (
    {
        title: () => (intl.get('lastModifiedBy')),
        dataIndex: 'lastModifiedBy',
        align: 'center',
        key: 'lastModifiedBy',

    }
)

const lastModifiedDate = () => (
    {
        title: () => (intl.get('lastModifiedDate')),
        dataIndex: 'lastModifiedDate',
        align: 'center',
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

export const GetPreviewTableHeader = ({ handleInputChange }) => {

    return (
        [
            headerId(),
            headerProductCategory(),
            headerProductName(),
            headerProductRemainingWithInput(handleInputChange),
            headerProductStatus(),
        ])

}
