import React from 'react'
import PropTypes from 'prop-types'
import Displayproducts from './DisplayProducts/DisplayProducts'
import Productsorter from './ProductSorter/ProductSorter'
import LeftFilters from './LeftFilters/LeftFilters'
import { Col, Row } from 'antd'
import classes from '../ProductMainPage.less'
import Cart from '../Cart/Cart'
import { motion } from 'framer-motion'
import ProductsSearch from '../ProductsSearch/ProductsSearch'
const Allproducts = (props) => {


    const variants = {
        hidden: {
            opacity: 0,

        },
        visible: {
            opacity: 1,
            transition: {
                duration: .5
            }
        },
        exit: {
            opacity: 0,
            transition:{
                duration: .5
            }
        }

    }
    return (
      
            <div className={classes.allProductContainer_outer}>


                <Row className={classes.allProductContainer}>
                    <Col sm={24} xl={8} className={classes.allProductCol1}   >
                        <LeftFilters />
                    </Col>
                    <Col sm={24} xl={16} className={classes.allProductCol2} >
                        <Row className={classes.cartAndProductSorterContainer} >
                            <h3>All Products</h3>
                            {/* <Productsorter /> */}
                            <ProductsSearch />
                        </Row>
                   
                            <Displayproducts />
                  
                    </Col>
                </Row>

            </div>
  
    )
}

Allproducts.propTypes = {

}

export default Allproducts
