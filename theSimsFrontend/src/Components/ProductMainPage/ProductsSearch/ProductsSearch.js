import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import classes from '../ProductMainPage.less'
import { Divider, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { searchProduct } from '../actions/productActions';
const Search = Input.Search;

function ProductsSearch(props) {

    // useEffect(()=>{

    //     window.addEventListener("resize");
    // },[])
    const dispatch = useDispatch();
    const handleSearch = values => {

        let payload = { values }
        dispatch(searchProduct(payload))
    }


    return (
        <>
          
          
            <Search
                placeholder="e.g. Cameo Apple"
                onSearch={(values) => handleSearch(values)}
                enterButton
                // size="large"
                 style={{ width: window.innerWidth > 1000? "30%":"100%" }}
            />
        </>

    )
}

ProductsSearch.propTypes = {

}

export default ProductsSearch
