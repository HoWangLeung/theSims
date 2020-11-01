import React from 'react'
import PropTypes from 'prop-types'
import { List } from 'antd'

function Selectedlist(props) {

    const { content } = props
    return content.map((e, i) => {
        return (

            <div key={i}>
                <List
                    bordered={true}
                    size="small"
                >

                    <List.Item  >
                        {e.productName}
                    </List.Item>

                </List>
            </div >

        )

    })
}

Selectedlist.propTypes = {

}

export default Selectedlist
