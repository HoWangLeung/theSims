import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'antd'

function Productpicture(props) {
    return (
        <>
            <Image
                style={{cursor:"pointer"}}
                width={600}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
        </>
    )
}

Productpicture.propTypes = {

}

export default Productpicture
