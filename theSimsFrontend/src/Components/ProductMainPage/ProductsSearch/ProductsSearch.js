import React from 'react'
import PropTypes from 'prop-types'
import classes from '../ProductMainPage.less'
import { Input } from 'antd';
const Search = Input.Search;

function ProductsSearch(props) {
    return (

            <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                enterButton
                size="large"
                style={{width:"80%"}}
            />
    
    )
}

ProductsSearch.propTypes = {

}

export default ProductsSearch
