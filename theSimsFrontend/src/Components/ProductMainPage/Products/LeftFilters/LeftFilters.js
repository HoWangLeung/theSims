import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Divider, Row, Slider } from 'antd';
import classes from '../../ProductMainPage.less';
import ProductsSearch from '../../ProductsSearch/ProductsSearch';
import { UndoOutlined } from '@ant-design/icons';
import intl from 'react-intl-universal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts, filterProductByCategory, filterProductByPrice } from '../../actions/productActions';
import Text from 'antd/lib/typography/Text';








const LeftFilters = (props) => {



    const [filterValue, setFilterValue] = useState([1, 50])
    const productInfo = useSelector(state => state.ProductReducer.productInfo);
    
 
   
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
        return (<>
        <Divider/>
        <h4>FILTER BY PRICE</h4>
            <Slider
                className={classes.priceSlider}
                range
                step={5}
                defaultValue={filterValue}
                max={50}
                min={0}
                onChange={onChange}
                // trackStyle={{
                //     backgroundColor: 'red',
                //     height: '5px',
                //   }}
                //   railStyle={{
                //     backgroundColor: 'red',
                //     height: '5px',
                //   }}
                //   handleStyle={{
                //     borderColor: 'blue',
                //     height: '14px',
                //     width: '14px',
                //     marginLeft: '-7px',
                //     marginTop: '-4.5px',
                //     backgroundColor: 'blue',
                //   }}
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
  
    const getCategories = () => {
        const {categories} = productInfo

        const displayList = categories && categories.map((option, index) => {
            
            return (

                <li
                    key={option}
                    onClick={handleCategoryClick}
                >
                    <span key={option}>{option}</span>
                </li>

            )
        })


        return (<>
            <Divider />
            <h4>CATEGORIES</h4>
            <ul >
                {displayList}
            </ul>

            <Divider />
        </>)


    }
    
    const {categories,productList, numberOfProducts} = productInfo
    return (
        <div className={classes.LeftFiltersContainer}>

        
            {/* <Text strong>{`SHOWING ${productList  && productList.length} OF ${numberOfProducts} RESULTS`}</Text>  */}
            <ProductsSearch />

            {useSlider()}
            {getCategories()}
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
