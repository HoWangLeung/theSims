import React from 'react'
import PropTypes from 'prop-types'
import Displayproducts from './DisplayProducts/DisplayProducts'
import Productsorter from './ProductSorter/ProductSorter'
import LeftFilters from './LeftFilters/LeftFilters'
import { Col, Row } from 'antd'
import classes from '../ProductMainPage.less'
const Allproducts = (props) => {
    return (
     

            <Row className={classes.allProductContainer}>
                <Col span={24}>
                    <Productsorter />
                </Col>
                <Col sm={24} xl={8}>
                    <LeftFilters />
                </Col>
                <Col sm={24} xl={16}>
                    <Displayproducts />
                </Col>
            </Row>
    


    )
}

Allproducts.propTypes = {

}

export default Allproducts
