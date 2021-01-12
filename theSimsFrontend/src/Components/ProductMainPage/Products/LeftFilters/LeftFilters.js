import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Collapse, Divider, Row, Slider } from 'antd';
import classes from '../../ProductMainPage.less';
import ProductsSearch from '../../ProductsSearch/ProductsSearch';
import { MinusSquareOutlined, PlusSquareOutlined, UndoOutlined } from '@ant-design/icons';
import intl from 'react-intl-universal';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts, filterProductByCategory, filterProductByPrice } from '../../actions/productActions';
import Text from 'antd/lib/typography/Text';
import { motion } from 'framer-motion';
const { Panel } = Collapse;







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

            <h2>Price</h2>
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

        let payload = { value: e.currentTarget.innerText }
        dispatch(fetchAllProducts())
            .then(() => {
                dispatch(filterProductByCategory(payload))

            })
    }

    const getCategories = () => {
        const { categories } = productInfo

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

            <h2>Category</h2>
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

        <Collapse
            bordered={false}
            defaultActiveKey="1"
            expandIcon={({ isActive }) => isActive ? <MinusSquareOutlined /> : <PlusSquareOutlined />}
            className={classes.leftFilterCollapse}
        >
            <Panel header={<p>Options</p>} key="1"  >
                <motion.div
                    className={classes.LeftFiltersContainer}
                // variants={variants}
                >
                    {/* <Text strong>{`SHOWING ${productList  && productList.length} OF ${numberOfProducts} RESULTS`}</Text>  */}
                    {/* <ProductsSearch /> */}


                    {getCategories()}
                    {useSlider()}
                    <Button
                        type="primary"
                        onClick={handleReset}
                        className={classes.LeftFiltersResetBtn}
                    >
                        <UndoOutlined />  {intl.get('reSet')}
                    </Button>
                </motion.div>
            </Panel>
        </Collapse>

    )

}

LeftFilters.propTypes = {

}

export default LeftFilters
