import React from 'react'
import PropTypes from 'prop-types'
import SelectDropdown from '../../../Common/SelectDropdown/SelectDropdown'
import Commondropdown from '../../../Common/CommonDropdown/CommonDropdown'

function Quantselecter(props) {

    return (
        <Commondropdown
            options={['1','2','3']}
            value={1}
            allowSearch={false}
        />
    )
}

Quantselecter.propTypes = {

}

export default Quantselecter
