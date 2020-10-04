import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Card, Row, Col, Spin, List, Avatar, Button, Skeleton } from 'antd';
import { useDispatch, useSelector } from "react-redux"
import { fetchAllProducts } from '../../actions/productActions';
const { Meta } = Card;






const Displayproducts = (props) => {
    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllProducts())

    }, []);

    const onLoadMore = () => {
        console.log('try to load more');
    };

    const isLoading = useSelector(state => state.ProductReducer.isLoading);
    const productList = useSelector(state => state.ProductReducer.productList);

 

    const cardList = (<List
        grid={{
            gutter: 16,
            xs: 1,
            sm: 1,
            md: 2,
            lg: 2,
            xl: 3,
            xxl: 3,
        }}
        dataSource={productList}
        renderItem={item => (
            <List.Item>
                <Skeleton avatar title={false} loading={item.loading} active>
                    <List.Item>
                        <Card
                            title={item.productName}
                            actions={[
                                <p>add</p>,
                            ]}
                        >

                            Card content</Card>
                    </List.Item>
                </Skeleton>
            </List.Item>
        )}
    />)



    return (
        <>
            <Spin spinning={isLoading}>
                <Row>

                    {cardList}

                </Row>
            </Spin>

        </>
    )
}

Displayproducts.propTypes = {

}

export default Displayproducts
