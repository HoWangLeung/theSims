import React from 'react'
import PropTypes from 'prop-types'
import classes from '../ProductMainPage.less'
import { Divider, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { searchProduct } from '../actions/productActions';
const Search = Input.Search;

function ProductsSearch(props) {


    const dispatch = useDispatch();
    const handleSearch = values => {

        let payload = { values }
        dispatch(searchProduct(payload))
    }


    return (
        <>
          
          
            <Search
                placeholder="input search text"
                onSearch={(values) => handleSearch(values)}
                enterButton
                // size="large"
                style={{ width: "30%" }}
            />
        </>

    )
}

ProductsSearch.propTypes = {

}

export default ProductsSearch
