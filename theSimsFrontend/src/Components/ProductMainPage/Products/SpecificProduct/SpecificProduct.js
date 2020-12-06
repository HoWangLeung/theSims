import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux';
import { fetchOneProduct, fetchPhotoUnsplash } from '../../actions/productActions';
import { Col, Image, Row, Spin } from 'antd';
import ProductPicture from './pictureArea/ProductPicture';
import Productdetail from './purchaseArea/ProductDetail';
import classes from './SpecificProduct.less'

function Specificproduct(props) {

    const [photo,setPhoto] = useState("")
 
    const { match: { params: { id } } } = props

    const product = useSelector(state => {

        return state.ProductReducer.specificProduct
    });
    const isFetching = useSelector(state => {

        return state.LoadingReducer
    });
    

    const dispatch = useDispatch();
    useEffect(() => {

        // let photoId = getPhotoIdByProductId(parseInt(id))


        // dispatch(fetchPhotoUnsplash())

        dispatch(fetchOneProduct(parseInt(id)))

    }, []);



    return (

        <Row className={classes.SpecificProductContainer}>

            <Col xs={24} sm={24} md={24} lg={12} className={classes.imageContainer} >

                <Image
                    style={{ cursor: "pointer" }}
                  height="100%"
                    width="100%"
                    src="https://source.unsplash.com/random/?apple"
                />

            </Col>


            <Col xs={24} sm={24} md={24} lg={12} className={classes.productdetailContainer}  >

                <Productdetail
                    product={product}
                />

            </Col>

        </Row>

    )
}

Specificproduct.propTypes = {

}

export default Specificproduct
{/* <Spin spinning={isFetching['FETCH_ONE_PRODUCT']}> */ }