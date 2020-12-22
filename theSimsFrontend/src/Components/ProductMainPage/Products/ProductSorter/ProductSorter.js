import React from 'react'
import PropTypes from 'prop-types'
import { Select } from 'antd';
import classes from '../../ProductMainPage.less';
 
const { Option } = Select;



const Productsorter = (props) => {
  function onChange(value) {
    
  }

  function onBlur() {
    
  }

  function onFocus() {
    
  }



  return (
    <div className={classes.productSorter}>
      

      {/* <Select
        size="small"
        style={{ width: 200 }}
        placeholder="Sort By"
        optionFilterProp="children"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value="HL">Price: Highest To Lowest</Option>
        <Option value="LH">Price: Lowest To Highest</Option>
        <Option value="Asc">Order: Ascending</Option>
        <Option value="Desc">Order: Descending</Option>
      </Select> */}
    </div>
  )
}

Productsorter.propTypes = {

}

export default Productsorter
