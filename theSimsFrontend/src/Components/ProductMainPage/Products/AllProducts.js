import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Displayproducts from './DisplayProducts/DisplayProducts'
import Productsorter from './ProductSorter/ProductSorter'
import LeftFilters from './LeftFilters/LeftFilters'
import { Col, Row, Tag } from 'antd'
import classes from '../ProductMainPage.less'
import Cart from '../Cart/Cart'
import { motion } from 'framer-motion'
import ProductsSearch from '../ProductsSearch/ProductsSearch'
import { useDispatch, useSelector } from 'react-redux'
import { filterProduct } from '../actions/productActions'
const Allproducts = (props) => {


    const currentFilter = useSelector(state => state.ProductReducer.currentFilter);
    const filterPayload = useSelector(state => state.ProductReducer.filterPayload);
    const productOverview = useSelector(state => state.ProductReducer.productOverview);
    
    const dispatch = useDispatch();
    

    const [filter, setFilter] = useState({
        category: "All",
        country: new Set(["All"]),
        currentFilter:
        {
            category: false,
            country: false,
        },
        activeFilter: {
            category: "All",
            country: "All",

        },
        countryDefaultCheckedList: []

    })

    

    useEffect(() => {

        dispatch(filterProduct(filter))
        
        setFilter(state => {
            return {
                ...state,
                countryDefaultCheckedList: productOverview
            }
        })
        return () => {
            
        }
        //productOverview.countries
    }, [productOverview])

    const variants = {
        hidden: {
            opacity: 0,

        },
        visible: {
            opacity: 1,
            transition: {
                duration: .5
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: .5
            }
        }

    }

    const handleTagClose = (e, tagName) => {

        if (tagName === "category") {
            filterPayload.currentFilter.category = false
            filterPayload.activeFilter.category = "All"
            dispatch(filterProduct(filterPayload))
        }
        if (tagName === "country") {

            filterPayload.country = new Set(["All"])
            filterPayload.activeFilter.country = "All"
            filterPayload.currentFilter.country=false
            dispatch(filterProduct(filterPayload))
        }




    }

    const productSectionHeader = () => {
        const { activeFilter } = filterPayload

        return (

            <div className={classes.filterTagContainer}>
                <h3>Filters</h3>
                <div className={classes.filterTag} >
                    {currentFilter.category &&
                        activeFilter.category !== "All" &&
                        <Tag value="category" color="#f50" closable onClose={(e) => handleTagClose(e, "category")} >Category</Tag>}
                    {!filterPayload.country.has("All") && <Tag value="country" color="#108ee9" closable onClose={(e) => handleTagClose(e, "country")} >Country</Tag>}

                </div>
            </div>
        )




        //return <h3>All Products</h3>
    }
    return (

        <div className={classes.allProductContainer_outer}>


            <Row className={classes.allProductContainer}>
                <Col sm={24} xl={8} className={classes.allProductCol1}   >
                    <LeftFilters filter={filter} />
                </Col>
                <Col sm={24} xl={16} className={classes.allProductCol2} >
                    <Row className={classes.cartAndProductSorterContainer} >
                        <h3>{productSectionHeader()}</h3>
                        {/* <Productsorter /> */}
                        <ProductsSearch />
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
