import classes from './ProductMainPage.less'
import React from 'react'
import ProductsSearch from './ProductsSearch/ProductsSearch'
import {   BackTop, Col, Row } from 'antd'
import Allproducts from './Products/AllProducts'
import Cart from './Cart/Cart'

function ProductMainpage() {
    return (
      
            <Row className={classes.productMainpageContainer}>
                    
                <Col span={24} className={classes.ProductssearchContainer}  >
                    <ProductsSearch />
                    <Cart />
                </Col>
        
                <Col span={24} className={classes.Allproducts}>
                    <Allproducts />
                </Col>
            </Row>
         
     
     
    )
}

export default ProductMainpage