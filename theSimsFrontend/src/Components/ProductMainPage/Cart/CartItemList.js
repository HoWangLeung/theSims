import React from 'react'
import PropTypes from 'prop-types'
import { List, Avatar } from 'antd';
import Quantselecter from './QuantSelecter';
import { useSelector } from 'react-redux';


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
    console.log(cartList);
    const cartListItem = cartList.productDetail
    console.log(cartListItem);
    const userProfile = useSelector(state => state.AuthenticationReducer.userProfile);
    console.log(userProfile);
    return (

        <List
            itemLayout="horizontal"
            dataSource={cartListItem}
            renderItem={item => {
                    console.log(item);
                return (
                    <List.Item title={<a href="https://ant.design">{item.productName}</a>}
                        actions={
                            [
                                <Quantselecter />,
                                <a key="list-loadmore-more">delete</a>
                            ]}>
                        <List.Item.Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}

                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
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
