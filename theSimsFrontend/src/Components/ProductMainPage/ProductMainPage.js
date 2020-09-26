import classes from './ProductMainPage.less'
import React from 'react'
import ProductsSearch from './ProductsSearch/ProductsSearch'
import Pageinformationheader from './PageInformationHeader/PageInformationHeader'
import { Col, Row } from 'antd'
import Allproducts from './Products/AllProducts'

function ProductMainpage() {
    return (
        <div className={classes.productMainpageContainer} >
            <Row >
                <Col span={24} className={classes.ProductssearchContainer}  >
                    <ProductsSearch />
                </Col>
                <Col span={24}>
                    <Pageinformationheader />
                </Col>
                <Col span={24} className={classes.Allproducts}>
                     <Allproducts  />
                </Col>
            </Row>

        </div>
    )
}

export default ProductMainpage