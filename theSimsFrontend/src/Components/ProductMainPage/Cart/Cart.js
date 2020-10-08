import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { ShoppingCartOutlined } from '@ant-design/icons'
import classes from '../ProductMainPage.less'
import { Badge, Button, Drawer } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsInCart } from '../actions/productActions'
import Cartitemlist from './CartItemList'
 




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
                width={window.innerWidth <= 760? "100%":"35%"}
                 
                onClose={closeDrawer}
                visible={drawerVisible}
            >
               <Cartitemlist/>
               <Button>Proceed</Button>
          </Drawer>
        

        </>
    )
}

Cart.propTypes = {

}

export default Cart
