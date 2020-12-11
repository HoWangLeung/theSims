import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrderHistory, getUserProfile } from '../actions/AuthenticationActions';
import { Col, Collapse, Row } from 'antd';
import classes from './UserProfile.less'
import Userinfo from './UserInfo/UserInfo';
import Orderhistory from './OrderHistory/OrderHistory';




const { Panel } = Collapse;


export default function Userprofile(props) {

    const { match: { params: { id } } } = props
    const userProfile = useSelector(state => state.AuthenticationReducer.userProfile);
    const orderHistory = useSelector(state => state.AuthenticationReducer.orderHistory);
    console.log(orderHistory);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserProfile({ username: sessionStorage.getItem("authenticatedUser") }))
        dispatch(getUserOrderHistory({ userId: sessionStorage.getItem("userId") }))
        return () => {
            console.log('clean up');
        }
    }, [])


    const handleCollapseChange = () => {

    }

    return (
        <Row className={classes.userProfilecontainer}>

            <Collapse defaultActiveKey={['1']} className={classes.collapseContainer} onChange={handleCollapseChange} >
                <Panel header="User Information" key="1">
                    <Userinfo
                        userProfile={userProfile} />
                </Panel>
            </Collapse>
            <Collapse defaultActiveKey={['1']} className={classes.collapseContainer} onChange={handleCollapseChange} >
                <Panel header="Order History" key="1">
                    <Orderhistory />
                </Panel>
            </Collapse>

        </Row>
    )
}
