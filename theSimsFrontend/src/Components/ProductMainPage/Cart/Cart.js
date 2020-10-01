import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ShoppingCartOutlined } from '@ant-design/icons'
import classes from '../ProductMainPage.less'
import { Badge, Drawer } from 'antd'




function Cart(props) {

    const [drawerVisible, setDrawerVisible] = useState(false)

    const openDrawer=()=>(
        setDrawerVisible(true)
    )

    const closeDrawer=()=>(
        setDrawerVisible(false)
    )

    return (
        <>
            <Badge count={5}>
                <ShoppingCartOutlined
                    className={classes.ShoppingCartOutlined}
                    onClick={openDrawer}

                />
            </Badge>
            <Drawer
                title="Cart"
                width={window.innerWidth <= 760? "80%":"25%"}
                 
                onClose={closeDrawer}
                visible={drawerVisible}
            >
                This is two-level drawer
          </Drawer>
        

        </>
    )
}

Cart.propTypes = {

}

export default Cart
