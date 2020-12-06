import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux';
import { Col, Divider, Row } from 'antd';
import classes from './Checkout.less'
function Ordersummary(props) {





    const listOrderedProduct = () => {

        return props.orderInfo.orderProductList && props.orderInfo.orderProductList.map(items => {
            return (

                <p>{items.product.productName} {" x "}{items.quantity}</p>


            )
        })
    }
    return (
        <div className={classes.orderSummaryContainer}>
            <h3>Order Summary</h3>
            <Divider > Product Names </Divider>
            <Row className={classes.productNamesContainer}>
                <Col>

                </Col>
                <Col>
                    {listOrderedProduct()}
                </Col>
            </Row>
            <Divider > Price</Divider>
            <p>SubTotal : $HKD  {props.orderInfo.total} </p>
            <p>Discount : $HKD 0</p>
            <p>Total : $HKD  {props.orderInfo.total}</p>

        </div >
    )
}

Ordersummary.propTypes = {

}

export default Ordersummary
