import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux';
import { fetchOneProduct, fetchPhotoUnsplash } from '../../actions/productActions';
import { Button, Col, Image, Row, Spin } from 'antd';
import ProductPicture from './pictureArea/ProductPicture';
import Productdetail from './purchaseArea/ProductDetail';
import classes from './SpecificProduct.less'
import { motion } from 'framer-motion';
import { Link, withRouter } from 'react-router-dom';
import CommonBreadcrumb from '../../../BreadCrumb/CommonBreadCrumb';

function Specificproduct(props) {
    const { location: { pathname } } = props
    const [photo, setPhoto] = useState("")
    const [imgLoaded, setImgLoaded] = useState(false);
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
            opacity: 0,




        },
        visible: {

            opacity: 1,
            transition: { duration: .5, ease: "easeInOut" }



        },
        exit: {
            opacity: 1,
            transition: { duration: .5, ease: "easeInOut" }
        }

    }
    const childVariants = {
        hidden: {
            opacity: 0



        },
        visible: {

            opacity: 1,
            transition: {
                duration: .5,
                // when:"beforeChildren"
            },


        },
        exit: {
            opacity: 0,

            transition: { duration: .5, ease: "easeInOut" }
        }

    }




    const renderContent = () => {

        console.log(imgLoaded);



        return (


            <Row className={classes.specificProductContainer}>

                <Col xs={24} sm={24} md={24} lg={12} className={classes.imageContainer} >
                    <motion.div
                        variants={childVariants}
                    //  initial="hidden"
                    // animate="visible"
                    // exit="exit"
                    >
                        <Image

                            className={classes.specificImage}
                            src={product.productUrl}
                            onLoad={() => setImgLoaded(true)}
                            preview

                        />
                    </motion.div>
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

        )
    }






    console.log(pathname);
    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={classes.SpecificProductContainer}
        >
            {renderContent()}
        </motion.div>
    )
}

Specificproduct.propTypes = {

}

export default withRouter(Specificproduct)
{/* <Spin spinning={isFetching['FETCH_ONE_PRODUCT']}> */ }