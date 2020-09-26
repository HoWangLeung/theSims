import React from 'react'
import PropTypes from 'prop-types'
import Displayproducts from './DisplayProducts/DisplayProducts'
import Productsorter from './ProductSorter/ProductSorter'
import LeftFilters from './LeftFilters/LeftFilters'

const Allproducts = (props) => {
    return (
     
          <div>
              <Productsorter/>
              <LeftFilters/>
              <Displayproducts/>
          </div>
        
    )
}

Allproducts.propTypes = {
    
}

export default Allproducts
