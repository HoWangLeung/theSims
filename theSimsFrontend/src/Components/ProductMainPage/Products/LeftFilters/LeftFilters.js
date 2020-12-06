import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Divider, Row, Slider } from 'antd';
import classes from '../../ProductMainPage.less';
import ProductsSearch from '../../ProductsSearch/ProductsSearch';
import { UndoOutlined } from '@ant-design/icons';
import intl from 'react-intl-universal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts, filterProductByCategory, filterProductByPrice } from '../../actions/productActions';








const LeftFilters = (props) => {



    const [filterValue, setFilterValue] = useState([1, 50])
    const productList = useSelector(state => state.ProductReducer.productList);

    const dispatch = useDispatch();
    const handleReset = () => {

        dispatch(fetchAllProducts())
    }


    const onChange = (value) => {
        setFilterValue(value)
    }

    // const onAfterChange = (value) => {
    //     setFilterValue(value)
    // }

    const handleFilter = (e) => {

        let payload = {
            value: filterValue
        }

        dispatch(fetchAllProducts())
            .then(() => {
                dispatch(filterProductByPrice(payload))

            })

    }
    const useSlider = () => {
        return (<><h4>FILTER BY PRICE</h4>
            <Slider
                className={classes.priceSlider}
                range
                step={5}
                defaultValue={filterValue}
                max={50}
                min={0}
                onChange={onChange}
            // onAfterChange={onAfterChange}
            />
            <Row   className={classes.filterResult}>
                <p>{`Price : $${filterValue[0]} - $${filterValue[1]}`}</p>
                <h4 onClick={handleFilter}   >    
                    FILTER  
                </h4>

            </Row>
        </>)


    }

    const handleCategoryClick = e => {

        let payload = { value: e.currentTarget.innerText }
        dispatch(fetchAllProducts())
            .then(() => {
                dispatch(filterProductByCategory(payload))

            })
    }

    const useCategories = () => {
        const options =
            ['Apple',
                'Bananna',
                'Orange',
                'Lemon',
                'PineApple',
                'Grapes',
                'Berries',
                'Melons',
                'Kiwi']

        const productList = options.map((option, index) => {
            return (

                <li

                    onClick={handleCategoryClick}
                >
                    <span>{option}</span>
                </li>

            )
        })


        return (<>
            <Divider />
            <h4>Product Categories</h4>
            <ul >
                {productList}
            </ul>

            <Divider />
        </>)


    }
    return (
        <div className={classes.LeftFiltersContainer}>
            <p>{`SHOWING ${productList.length} OF 20 RESULTS`}</p>
            <ProductsSearch />

            {useSlider()}
            {useCategories()}
            <Button 
            type="primary" 
            onClick={handleReset}
            className={classes.LeftFiltersResetBtn}
                >
                <UndoOutlined />  {intl.get('reSet')}
            </Button>
        </div>
    )

}

LeftFilters.propTypes = {

}

export default LeftFilters
