import classes from './Payment.less'
import { Spin, Table, Tag } from 'antd'
import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { baseVariants } from '../../Animation'
import { getAllConfirmedOrders } from './action/PaymentAction'
import { GetPaymentHeaders } from './getPaymentManagmentHeader'

export default function PaymentManagement(props) {

    const isFetching = useSelector(state => state.LoadingReducer);
    const confirmedOrders = useSelector(state => state.PaymentReducer.confirmedOrders);
    confirmedOrders.forEach(e => e.key = e.id)


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllConfirmedOrders())
    }, [])


    const getOrderProducts = (record) => {

        if (record) {
            return record.orderProductList.map(e => {
                console.log(e);
                return (
                    <div key={e.id} className={classes.orderProductDetailContainer} >
                        <Tag style={{margin:"5px"}}>{`${e.product.productName} x ${e.quantity}`}</Tag>
                    </div>
                )
            })

        }
    }

    return (
        <motion.div
            variants={baseVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Spin spinning={isFetching['GET_ALL_CONFIRMED_ORDERS']}>
                <Table
                  
                    title={() => <h3 > Confirmed Orders</h3>}
                    dataSource={confirmedOrders}
                    columns={GetPaymentHeaders()}
                    expandable={
                        {
                            expandedRowRender: record => getOrderProducts(record)

                        }

                    }
                />
            </Spin>
        </motion.div>
    )
}
