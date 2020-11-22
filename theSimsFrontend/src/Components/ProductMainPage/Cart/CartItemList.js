import React from 'react'
import PropTypes from 'prop-types'
import { List, Avatar, Button } from 'antd';
import Quantselecter from './QuantSelecter';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductInCart } from '../actions/productActions';
 
const Cartitemlist = (props) => {


    const data = [
        {
            title: 'Ant Design Title 1',
        },
        {
            title: 'Ant Design Title 2',
        },
        {
            title: 'Ant Design Title 3',
        },
        {
            title: 'Ant Design Title 4',
        },
    ];
    const cartList = useSelector(state => state.ProductReducer.cartList);

    const cartListItem = cartList.orderProductList
    console.log(cartList);
    const userProfile = useSelector(state => state.AuthenticationReducer.userProfile);

    const dispatch = useDispatch()
    const handleDelete=(item,e)=>{
        console.log(item);
        let payload={
            userId:parseInt(sessionStorage.getItem("userId")),
            productId:item.id,
            status:"status",
         
        }
        dispatch(deleteProductInCart(payload))
      
    }

    return (

        <List
            itemLayout="horizontal"
            dataSource={cartListItem}
            renderItem={item => {
                console.log(item);
                return (
                    <List.Item title={<a href="https://ant.design">{item.product.productName} </a>}
                        actions={
                            [
                                <Quantselecter />,
                                <Button onClick={e=>handleDelete(item,e)}>delete</Button>
                            ]}>
                        <List.Item.Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}

                            description={`${item.product.productName} ${item.quantity} `}
                        />
                    </List.Item>
                )


            }}
        />

    )
}

Cartitemlist.propTypes = {

}

export default Cartitemlist
