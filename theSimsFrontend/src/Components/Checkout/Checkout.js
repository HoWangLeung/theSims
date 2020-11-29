import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsInCart } from '../ProductMainPage/actions/productActions';
import { Row } from 'antd';
import Deliverydetail from './DeliveryDetail';
import Ordersummary from './OrderSummary';

function Checkout(props) {
    const orderInfo = useSelector(state => state.ProductReducer.cartList);
    const cartListItem = orderInfo.orderProductList
    console.log(orderInfo);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductsInCart())

    }, []);







    return (
        <Row>
            <Ordersummary orderInfo={orderInfo} />
            <Deliverydetail />
        </Row>
    )


}

Checkout.propTypes = {

}

export default Checkout
