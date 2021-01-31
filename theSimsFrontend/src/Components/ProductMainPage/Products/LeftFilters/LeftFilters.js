import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Collapse, Divider, Row, Slider } from 'antd';
import classes from '../../ProductMainPage.less';
import ProductsSearch from '../../ProductsSearch/ProductsSearch';
import { MinusSquareOutlined, PlusSquareOutlined, UndoOutlined } from '@ant-design/icons';
import intl from 'react-intl-universal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts, filterProduct, filterProductByPrice, fetchProductsOverView } from '../../actions/productActions';
import Text from 'antd/lib/typography/Text';
import { motion } from 'framer-motion';
import Filtercountry from './FilterCountry';


const { Panel } = Collapse;







const LeftFilters = (props) => {



    const [filterValue, setFilterValue] = useState([1, 50])
    const productInfo = useSelector(state => state.ProductReducer.productInfo);
    const productOverview = useSelector(state => state.ProductReducer.productOverview);
    const filterPayload = useSelector(state => state.ProductReducer.filterPayload);
    console.log(filterPayload);





    const dispatch = useDispatch();

    useEffect(() => {
        //   dispatch(fetchCategoryInfo())
        dispatch(fetchProductsOverView())


    }, [])

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


            <Slider
                className={classes.priceSlider}
                range
                step={5}
                defaultValue={filterValue}
                max={50}
                min={0}
                onChange={onChange}


                railStyle={{
                    backgroundColor: 'grey',

                }}
                handleStyle={[
                    {
                        backgroundColor: 'black',
                        borderColor: 'black',

                    },
                    {
                        backgroundColor: 'black',
                        borderColor: 'black'
                    },

                ]}

                trackStyle={[{ backgroundColor: 'black' }]}



            // onAfterChange={onAfterChange}
            />
            <Row className={classes.filterResult}>
                <p>{`Price : $${filterValue[0]} - $${filterValue[1]}`}</p>
                <h4 onClick={handleFilter}   >
                    FILTER
                </h4>

            </Row>
        </>)


    }

    const handleCategoryClick = e => {

        let payload = filterPayload
         payload.category = e.currentTarget.innerText
         payload.currentFilter["category"] = true
         payload.activeFilter.category=e.currentTarget.innerText
         

         
        // dispatch(fetchAllProducts())
        //     .then(() => {
        dispatch(filterProduct(payload))

        // })
    }

    const getCategories = () => {
        const { productList } = productInfo
        const { categories } = productOverview
        const { activeFilter } = filterPayload
        console.log(categories);
        const displayList = categories && categories.map(category => {

                console.log(activeFilter.category === category);
                console.log(category);
            return (
                <li
                    key={category}
                    onClick={handleCategoryClick}
                >
                    <span className={category === activeFilter.category ?
                        classes.categoryFilterText_ACTIVE :
                        classes.categoryFilterText_NOT_ACTIVE}
                        key={category}>
                        {category}
                    </span>
                </li>
            )

        });

        // categoryList && categoryList.map((option, index) => {

        //     return (

        //         <li
        //             key={option.category.name}
        //             onClick={handleCategoryClick}
        //         >
        //             <span key={option.category.name}>{option.category.name}</span>
        //         </li>

        //     )
        // })


        return (<>


            <ul >
                {displayList}
            </ul>


        </>)


    }
    const variants = {
        hidden: {

        },
        visible: {

        },
        exit: {
            opacity: 0,
            transition: {
                duration: .5,


            }

        }

    }


    const { categories, productList, numberOfProducts } = productInfo
    return (


        <motion.div
            className={classes.LeftFiltersContainer}
        // variants={variants}
        >
            {/* <Text strong>{`SHOWING ${productList  && productList.length} OF ${numberOfProducts} RESULTS`}</Text>  */}
            {/* <ProductsSearch /> */}




            <Collapse defaultActiveKey={['1', '2', '3']} ghost >
                <Panel header={<h4>CATEGORY</h4>} key="1">
                    {getCategories()}
                </Panel>
                {/* <Panel header={<h4>PRICE</h4>} key="2">
                    {useSlider()}
                </Panel> */}
                <Panel header={<h4>COUNTRY</h4>} key="3">
                    <Filtercountry productOverview={productOverview} />
                </Panel>
            </Collapse>





            <Button
                type="primary"
                onClick={handleReset}
                className={classes.LeftFiltersResetBtn}
            >
                <UndoOutlined />  {intl.get('reSet')}
            </Button>
        </motion.div>


    )

}

LeftFilters.propTypes = {

}

export default LeftFilters
