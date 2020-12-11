import React, { Component } from 'react'
import intl from 'react-intl-universal';

import { Input } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


const headerId = () => (
    {
        title: intl.get('id'),
        dataIndex: 'id',
        key: 'id',
        align: 'center',
    }
)



const headerInvoice = (handlePdfExport, invoicePdfUrl) => (
    {
        title: "Invoice",
        dataIndex: 'Invoice',
        align: 'center',
        key: 'invoice',
        render: (text, row, index) => {
            console.log(invoicePdfUrl)
            return (
               
                <a href={invoicePdfUrl && invoicePdfUrl}>   <DownloadOutlined
                    onClick={handlePdfExport}
                    style={{ fontSize: "18px", cursor: "pointer" }} /></a>

            )


        }
    }
)




const headerTotal = () => {
    return ({
        title: "Total",
        dataIndex: 'total',
        align: 'center',
        key: 'total',
        render: (text, row, index) => {



            return (

                <>sdf</>
            )
        }
    })
}

const headerCreatedDate = (handleInputChange) => {
    // const{handleInputChange} = callbacks
    return ({
        title: "Created Date",
        dataIndex: 'createdDate',
        align: 'center',
        key: 'createdDate',
        render: (text, row, index) => {



            return (

                <>sdf</>
            )
        }

    })
}

const headerOrderStatus = () => (
    {
        title: "Order Status",
        dataIndex: 'status',
        key: 'status',
        align: 'center',


    }
)





export const getPreviewTableHeader = ({ handlePdfExport, invoicePdfUrl }) => {
    console.log(invoicePdfUrl);
    return (
        [
            headerId(),
            headerOrderStatus(),
            headerTotal(),
            headerCreatedDate(),
            headerInvoice(handlePdfExport,invoicePdfUrl),

        ])

}
