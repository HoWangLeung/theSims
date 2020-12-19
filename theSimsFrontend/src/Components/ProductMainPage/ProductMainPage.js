import classes from './ProductMainPage.less'
import React from 'react'
import ProductsSearch from './ProductsSearch/ProductsSearch'
import { BackTop, Col, Row } from 'antd'
import Allproducts from './Products/AllProducts'
import Cart from './Cart/Cart'
import { motion } from 'framer-motion'

function ProductMainpage() {
    const variants = {
        hidden: {
            // opacity:0
            // // x: '-100vw',
          
         
        },
        visible: {
            // opacity:1,
            // transition: {
            //     duration: .5,
            //     ease: "easeInOut"
            // }
        },
        exit: {
            x: '-100vw',
            transition: {
                duration: 1,
                ease: "easeInOut"
            }
        }

    }

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={classes.productMainpageContainer}
        >
            <Row>


                <Col span={24} className={classes.Allproducts}>
                    <Allproducts />
                </Col>

            </Row>
        </motion.div>


    )
}

export default ProductMainpage