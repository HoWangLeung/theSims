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
      <p>SHOWING 1–20 OF 44 RESULTS</p>

      <Select
        size="small"
        style={{ width: 200 }}
        placeholder="Select a person"
        optionFilterProp="children"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="tom">Tom</Option>
      </Select>
    </div>
  )
}

Productsorter.propTypes = {

}

export default Productsorter
