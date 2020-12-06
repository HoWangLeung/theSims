import React from 'react'
import PropTypes from 'prop-types'
import { List, Avatar, Button, Table } from 'antd';
import Quantselecter from './QuantSelecter';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductInCart } from '../actions/productActions';
import { GetCartHeader } from './CartHeader';
import classes from './Cart.less'

const Cartitemlist = (props) => {

    const cartList = useSelector(state => state.ProductReducer.cartList);

    const cartListItem = cartList.orderProductList

    const userProfile = useSelector(state => state.AuthenticationReducer.userProfile);

    const dispatch = useDispatch()
    const handleDelete = (item, e) => {

        let payload = {
            userId: parseInt(sessionStorage.getItem("userId")),
            productId: parseInt(item.product.id),
            status: "pending",

        }
        dispatch(deleteProductInCart(payload))

    }
    const callbacks =  {
        handleDelete
    }

    return (

        <Table
        className={classes.cartTable}
         columns={GetCartHeader(callbacks)} 
         dataSource={cartListItem} />

    )
}

Cartitemlist.propTypes = {

}

export default Cartitemlist
