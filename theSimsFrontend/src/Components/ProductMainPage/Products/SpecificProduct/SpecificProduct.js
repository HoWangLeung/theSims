import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux';
import { fetchOneProduct, fetchPhotoUnsplash } from '../../actions/productActions';
import { Col, Image, Row, Spin } from 'antd';
import ProductPicture from './pictureArea/ProductPicture';
import Productdetail from './purchaseArea/ProductDetail';
import classes from './SpecificProduct.less'
import { motion } from 'framer-motion';

function Specificproduct(props) {

    const [photo, setPhoto] = useState("")

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

    const variants = {
        hidden: {
         
            x:'100vw',
            
  
          },
          visible: {
         
            x:'0',
            transition: {
                duration: 1,
                ease: "easeInOut"
            },
          
          },
          exit: {
            x:'100vw',
            transition:{
         
                ease:"easeInOut",
                duration:1
      
            }
          }

    }

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={classes.SpecificProductContainer}
        >
            <Row >

                <Col xs={24} sm={24} md={24} lg={12} className={classes.imageContainer} >

                    <Image
                        style={{ cursor: "pointer", borderRadius:"15px" }}
                        height="100%"
                        width="100%"
                        src={product.productUrl}
                    />

                </Col>


                <Col xs={24} sm={24} md={24} lg={12} className={classes.productdetailContainer}  >

                    <Productdetail
                        product={product}
                    />

                </Col>

            </Row>
        </motion.div>
    )
}

Specificproduct.propTypes = {

}

export default Specificproduct
{/* <Spin spinning={isFetching['FETCH_ONE_PRODUCT']}> */ }