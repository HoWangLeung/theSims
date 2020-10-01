import React from 'react'
import PropTypes from 'prop-types'
import { Button, Slider } from 'antd';
import classes from '../../ProductMainPage.less';



const onChange = () => {
    console.log('changing');
}

const onAfterChange = () => {
    console.log('sdf');
}
const renderSlider = () => {
    return (<><p>Filter By Price</p>
        <Slider
            className={classes.priceSlider}
            range
            step={10}
            defaultValue={[0, 1000]}
            max={1000}
            min={0}
            onChange={onChange}
            onAfterChange={onAfterChange}
        />
        <Button>Filter</Button></>)
}

const renderCategories = () => {
    const options = ['Apple', 'Orange', 'Pears', 'Grapes']
    const productList = options.map((option, index) => (<li>{option}</li>))


    return (<>
        <p>Product Categories</p>
        {productList}
    </>)


}



const LeftFilters = (props) => {
    return (
        <>
            {renderSlider()}
            {renderCategories()}
        </>
    )

}

LeftFilters.propTypes = {

}

export default LeftFilters
