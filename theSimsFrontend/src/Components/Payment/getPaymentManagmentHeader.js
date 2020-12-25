import React, { Component } from 'react'
import intl from 'react-intl-universal';
import { Input, Row, Tag, Tooltip, Typography } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
const { Text, Link } = Typography;


const headerId = () => (
    {
        title: intl.get('id'),
        dataIndex: 'id',
        key: 'id',
        align: 'center',
    }
)

const headerStatus = () => (
    {
        title: "status",
        dataIndex: 'status',
        align: 'center',
        key: 'status',
        render: (text, row, index) => {

            return (
                <Tag icon={<CheckCircleOutlined />} color="success">
                    {text}
                </Tag>

            )
        }
    }
)

const headerOrderBy = () => (

    {
        title: "orderBy",
        dataIndex: 'orderBy',
        align: 'center',
        key: 'orderBy',
        render: (text, row, index) => {
            let users = row.users
            console.log(row);

            return (
                <Row gutter={8}>
                    <span style={{ padding: "0px 5px" }} >{users.firstname}</span>
                    <span>{users.lastname}</span>
                </Row>

            )
        }

    }


)

const headerTotal = () => (

    {
        title: "Total (HKD)",
        dataIndex: 'total',
        align: 'center',
        key: 'total',
        render: (text, row, index) => {

            return (
                <span>$ {`${text}`} </span>

            )
        }

    }


)



const createdDate = () => (
    {
        title: () => intl.get("createdDate"),
        dataIndex: 'createdDate',
        align: 'center',
        key: 'createdDate',

    }
)






export const GetPaymentHeaders = (config) => {

    return (
        [
            headerId(),
            headerStatus(),
            headerOrderBy(),
            headerTotal(),
            createdDate(),

        ])

}


