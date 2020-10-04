import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { ShoppingCartOutlined } from '@ant-design/icons'
import classes from '../ProductMainPage.less'
import { Badge, Drawer } from 'antd'
import { useDispatch } from 'react-redux'
import { fetchProductsInCart } from '../actions/productActions'
 




const Cart=(props)=> {
  
    const [drawerVisible, setDrawerVisible] = useState(false)

    const openDrawer=()=>(
        setDrawerVisible(true)
    )

    const closeDrawer=()=>(
        setDrawerVisible(false)
    )
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductsInCart())

    }, []);

    return (
        <>
            <Badge  className={classes.ShoppingCartOutlined}
                    onClick={openDrawer} count={5}>
                <ShoppingCartOutlined
                   

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
