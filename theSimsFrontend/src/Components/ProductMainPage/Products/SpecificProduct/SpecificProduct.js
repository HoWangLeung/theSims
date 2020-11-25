import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux';
import { fetchOneProduct } from '../../actions/productActions';
import { Col, Row, Spin } from 'antd';
import ProductPicture from './pictureArea/ProductPicture';
import Productdetail from './purchaseArea/ProductDetail';

function Specificproduct(props) {
    
    const { match: { params: { id } } } = props

    const product = useSelector(state => {
        
        return state.ProductReducer.specificProduct
    });
    const isFetching = useSelector(state => {
        
        return state.LoadingReducer
    });
    console.log(isFetching);
    
    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(fetchOneProduct(parseInt(id)))

    }, []);



    return (
        <Spin spinning={isFetching['FETCH_ONE_PRODUCT']}>
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
        </Spin>
    )
}

Specificproduct.propTypes = {

}

export default Specificproduct
