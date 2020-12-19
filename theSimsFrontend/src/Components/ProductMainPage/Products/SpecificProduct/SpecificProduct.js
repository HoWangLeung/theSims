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

            x: 1000,


        },
        visible: {

            x: 0,
         


        },
        exit: {
            x: '100vw',
            transition: {

                ease: "easeInOut",
                duration: 1

            }
        }

    }
    const childVariants = {
        hidden: {
            opacity:0
           
     

        },
        visible: {
       
            opacity:1,
            x: '0',
            
            transition: {  
                delay:.5,
                duration:1,
               // when:"beforeChildren"
            },


        },
        exit: {
            x: '100vw',
            
            transition: {

                ease: "easeInOut",
                duration: .4

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
                        style={{ cursor: "pointer", borderRadius: "15px" }}
                        height="100%"
                        width="100%"
                        src={product.productUrl}
                    />

                </Col>

        
                <Col xs={24} sm={24} md={24} lg={12} className={classes.productdetailContainer}  >
                    <motion.div
                        variants={childVariants}
                    //  initial="hidden"
                     // animate="visible"
                    // exit="exit"
                    >
                        <Productdetail
                            product={product}
                        />
                        {/* <h1>Hello</h1> */}
                    </motion.div>
                </Col>

            </Row>
        </motion.div>
    )
}

Specificproduct.propTypes = {

}

export default Specificproduct
{/* <Spin spinning={isFetching['FETCH_ONE_PRODUCT']}> */ }