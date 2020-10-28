import React from 'react'
import PropTypes from 'prop-types'
import { Button, Slider } from 'antd';
import classes from '../../ProductMainPage.less';



const onChange = () => {
    
}

const onAfterChange = () => {
    
}
const useSlider = () => {
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

const useCategories = () => {
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
            {useSlider()}
            {useCategories()}
        </>
    )

}

LeftFilters.propTypes = {

}

export default LeftFilters
