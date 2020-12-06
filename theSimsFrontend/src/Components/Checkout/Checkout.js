import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsInCart } from '../ProductMainPage/actions/productActions';
import { Button, Col, Row } from 'antd';
import Deliverydetail from './DeliveryDetail';
import Ordersummary from './OrderSummary';
import classes from './Checkout.less'
import { Link } from 'react-router-dom';

function Checkout(props) {
    const orderInfo = useSelector(state => state.ProductReducer.cartList);
    const cartListItem = orderInfo.orderProductList
 
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductsInCart())

    }, []);







    return (
        <div className={classes.checkoutOuterContainer}>
            <Row className={classes.backButtonContainer}>
                <Link to="/" >
                    <Button className={classes.backButton} >Back</Button>
                </Link>
            </Row>
            <Row className={classes.backButtonContainer}>
                <h1 className={classes.backButton} >Checkout</h1>
            </Row>
            <Row className={classes.checkoutContainer}>
                <Col xs={24} lg={12} span={12}>
                    <Ordersummary orderInfo={orderInfo} />
                </Col>
                <Col xs={24} lg={12} span={12}>
                    <Deliverydetail />
                </Col>
            </Row>
        </div>
    )


}

Checkout.propTypes = {

}

export default Checkout
