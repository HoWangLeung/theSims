import React from 'react'
import PropTypes from 'prop-types'
import { Slider } from 'antd';



const onChange=()=>{
    console.log('changing');
}

const onAfterChange=()=>{
    console.log('sdf');
}

const LeftFilters = (props) => {
    return (
        <>
            <p>Filter By Price</p>
            <Slider
                range
                step={10}
                defaultValue={[0, 100]}
                onChange={onChange}
                onAfterChange={onAfterChange}
            />
        </>
    )
}

LeftFilters.propTypes = {

}

export default LeftFilters
