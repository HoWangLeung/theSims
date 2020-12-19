import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsInCart } from '../ProductMainPage/actions/productActions';
import { Button, Col, Row } from 'antd';
import Deliverydetail from './DeliveryDetail';
import Ordersummary from './OrderSummary';
import classes from './Checkout.less'
import { Link } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { motion } from 'framer-motion';

const stripePromise = loadStripe('pk_test_oHDsyL0Wxhko6HIFRMrm7QXS00h1og1ziG');
function Checkout(props) {
    const orderInfo = useSelector(state => state.ProductReducer.cartList);
    const cartListItem = orderInfo.orderProductList

    const dispatch = useDispatch();
    useEffect(() => {


        let isLoggedIn = sessionStorage.getItem("userId") !== null
        if (isLoggedIn) {

            dispatch(fetchProductsInCart())
        }


    }, []);




    const variants = {
        hidden: {


        },
        visible: {

        },
        exit: {

        }

    }


    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={classes.checkoutOuterContainer}
        >

          
                {/* <Row className={classes.backButtonContainer}>
                <Link to="/" >
                    <Button className={classes.backButton} >Back</Button>
                </Link>
            </Row> */}
                <Row className={classes.backButtonContainer}>
                    <h3 className={classes.backButton} >Checkout</h3>
                    <Link to="/" >
                        <Button className={classes.backButton} >Back</Button>
                    </Link>
                </Row>
                <Row className={classes.checkoutContainer}>
                    <Col xs={24} lg={12} span={12}>
                        <Ordersummary orderInfo={orderInfo} />
                    </Col>
                    <Col xs={24} lg={12} span={12}>
                        <Elements stripe={stripePromise}>
                            <Deliverydetail />
                        </Elements>
                    </Col>
                </Row>
    
        </motion.div>
    )


}

Checkout.propTypes = {

}

export default Checkout
