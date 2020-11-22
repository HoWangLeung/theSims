import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom';

function Pagenotfound({match:{params:{id}}}) {
    const validId = parseInt(id);
    if(validId== 0){
        return <Redirect to={{pathname:"/404"}} ></Redirect>
    }

    return(
        <p>NOT FOUND</p>
    )
}

Pagenotfound.propTypes = {
    
}

export default Pagenotfound
