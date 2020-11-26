import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { ShoppingCartOutlined } from '@ant-design/icons'
import classes from '../ProductMainPage.less'
import { Badge, Button, Drawer } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsInCart } from '../actions/productActions'
import Cartitemlist from './CartItemList'
import { withRouter } from 'react-router-dom'
 




const Cart=(props)=> {
  
    const [drawerVisible, setDrawerVisible] = useState(false)

    const orderInfo = useSelector(state => state.ProductReducer.cartList);
    const cartListItem = orderInfo.orderProductList

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
 
    const handleProceed=()=>{
         props.history.push("/checkout")
         console.log(orderInfo);
   


    }
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
               <Button onClick={handleProceed}>Proceed</Button>
          </Drawer>
        

        </>
    )
}

Cart.propTypes = {

}

export default withRouter(Cart)
