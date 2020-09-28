import React from 'react'
import PropTypes from 'prop-types'
import Displayproducts from './DisplayProducts/DisplayProducts'
import Productsorter from './ProductSorter/ProductSorter'
import LeftFilters from './LeftFilters/LeftFilters'
import { Col, Row } from 'antd'
import classes from '../ProductMainPage.less'
const Allproducts = (props) => {
    return (

        <Row>
            <Productsorter />
            <Col span={8}>
                <LeftFilters />
            </Col>
            <Col>
                <Displayproducts />
            </Col>
        </Row>



    )
}

Allproducts.propTypes = {

}

export default Allproducts
