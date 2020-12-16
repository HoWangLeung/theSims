import React, { Component } from 'react'
import intl from 'react-intl-universal';

import { Input } from 'antd';
import { DownloadOutlined, LoadingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


const headerId = () => (
    {
        title: intl.get('id'),
        dataIndex: 'id',
        key: 'id',
        align: 'center',
    }
)



const headerInvoice = (handlePdfExport, isFecting,onClickId) => (
    {
        title: "Invoice",
        dataIndex: 'Invoice',
        align: 'center',
        key: 'invoice',
        render: (text, row, index) => {

            
            
            
            return (
                isFecting["GET_USER_ORDER_HISTORY_INVOICE"] && row.id ===parseInt(onClickId)? <LoadingOutlined /> :
                    <DownloadOutlined
                        id={row.id}
                        key={row.id}

                        onClick={handlePdfExport}
                        style={{ fontSize: "18px", cursor: "pointer" }} />

            )


        }
    }
)




const headerTotal = () => {
    return ({
        title: "Total (HKD)",
        dataIndex: 'total',
        align: 'center',
        key: 'total',
        render: (text, row, index) => {


            
            return (

                <>{`${row.total}`}</>
            )
        }
    })
}

const headerCreatedDate = (handleInputChange) => {
    // const{handleInputChange} = callbacks
    return ({
        title: intl.get("createdDate"),
        dataIndex: 'createdDate',
        align: 'center',
        key: 'createdDate',
        render: (text, row, index) => {



            return (

                <>{row.createdDate}</>
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





export const getPreviewTableHeader = ({ handlePdfExport, isFecting ,onClickId}) => {

    return (
        [
            headerId(),
            headerOrderStatus(),
            headerTotal(),
            headerCreatedDate(),
            headerInvoice(handlePdfExport, isFecting,onClickId),

        ])

}
