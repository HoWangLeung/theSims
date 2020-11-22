import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux';
import { fetchOneProduct } from '../../actions/productActions';
import { Col, Row } from 'antd';
import ProductPicture from './pictureArea/ProductPicture';
import Productdetail from './purchaseArea/ProductDetail';

function Specificproduct(props) {
    console.log(props);
    const { match: { params: { id } } } = props

    const product = useSelector(state => {
        console.log(state.ProductReducer.specificProduct);
        return state.ProductReducer.specificProduct
    });
    console.log(product);
    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(fetchOneProduct(parseInt(id)))

    }, []);



    return (
        <>
            <Row style={{width:"100%"}}>
                <Col span={12} >
                   <ProductPicture/>
                </Col>

                <Col span={12}>
                    <Productdetail
                    product={product}
                    />
                </Col>
            </Row>
        </>
    )
}

Specificproduct.propTypes = {

}

export default Specificproduct
