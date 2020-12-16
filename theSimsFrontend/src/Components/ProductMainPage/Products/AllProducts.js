import React from 'react'
import PropTypes from 'prop-types'
import Displayproducts from './DisplayProducts/DisplayProducts'
import Productsorter from './ProductSorter/ProductSorter'
import LeftFilters from './LeftFilters/LeftFilters'
import { Col, Row } from 'antd'
import classes from '../ProductMainPage.less'
import Cart from '../Cart/Cart'
const Allproducts = (props) => {
    return (

        <div className={classes.allProductContainer_outer}>


            <Row className={classes.allProductContainer}>
                <Col sm={24} xl={8} className={classes.allProductCol1}   >
                    <LeftFilters />
                </Col>
                <Col sm={24} xl={16} className={classes.allProductCol2} >
                    <Row className={classes.cartAndProductSorterContainer} >
                        <span>All Products</span>
                        <Productsorter />
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
