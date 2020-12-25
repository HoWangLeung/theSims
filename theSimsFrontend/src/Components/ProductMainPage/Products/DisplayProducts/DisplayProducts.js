import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Card, Row, Col, Spin, List, Avatar, Button, Skeleton, Input, Image } from 'antd';
import { useDispatch, useSelector } from "react-redux"
import { fetchAllProducts, addToCart, fetchProductsInCart } from '../../actions/productActions';
import { Link } from 'react-router-dom';
import classes from '../../ProductMainPage.less'
import { getUserProfile } from '../../../Authentication/actions/AuthenticationActions';
import { motion } from 'framer-motion';
import Text from 'antd/lib/typography/Text';
const { Meta } = Card;

const Displayproducts = (props) => {

    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [imgLoaded, setImgLoaded] = useState(false);
    const isLoading = useSelector(state => {
        return state.ProductReducer.isLoading
    });
    const productInfo = useSelector(state => state.ProductReducer.productInfo);
    const userProfile = useSelector(state => state.AuthenticationReducer.userProfile);

    const { categories, productList } = productInfo
    let isLoggedIn = useSelector(state => state.AuthenticationReducer.isLoggedIn);
    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(fetchAllProducts())
        console.log(isLoggedIn);
        if (isLoggedIn) {
            console.log('dispatching fetchProductsInCart displayproduct.js');
            let payload = { username: sessionStorage.getItem("authenticatedUser") }
            dispatch(getUserProfile(payload))

            dispatch(fetchProductsInCart())
        }





        return () => {

        }


    }, [isLoggedIn]);


    const variants = {
        hidden: {

        },
        visible: {

        },
        exit: {
       

        }

    }

    const renderProductScreen = () => {
        console.log(imgLoaded);
        if (isLoading  )
            return Array.from(Array(20).keys()).map(e => {
                return (
                    <Col xs={24} sm={24} sm={12} md={12} xl={8} className={classes.productNamePriceContainerImgCol}   >
                        <Skeleton key={e} active />
                    </Col>

                )
            })
        else
        return productList && productList.map((item, i) => {
            
                return <Col xs={24} sm={24} sm={12} md={12} lg={8} xl={8} className={classes.productNamePriceContainerImgCol} >
                    <motion.div
                       variants={variants}
                    >
                        <Link to={`/product/${item.id}`}>
                            <Card
                             className={classes.productNamePriceContainer}
                                cover={
                                   <Image
                                         className={classes.productNamePriceContainerImg}
                                        alt="product"
                                        preview={false}
                                        src={item.productUrl}
                                        placeholder 
                                     

                                        onLoad={() => setImgLoaded(true)}
                                    />}
                             
                            >

                                <Meta
                                    title={<Text strong >{item.productName}</Text>}
                                    description={`$${item.basePrice}`} />

                            </Card>
                        </Link>
                    </motion.div>
                </Col>
        })

    }




    return (
        <div className={classes.displayProductOuterContainer}>

            <Row   className={classes.displayProductOuterContainerRow}>

                {renderProductScreen()}

            </Row>


        </div>
    )
}

Displayproducts.propTypes = {

}

export default Displayproducts
