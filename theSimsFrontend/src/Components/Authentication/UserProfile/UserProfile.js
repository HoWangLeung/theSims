import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrderHistory, getUserProfile } from '../actions/AuthenticationActions';
import { Col, Collapse, Row, Tabs, Typography, Divider } from 'antd';
import classes from './UserProfile.less'
import Userinfo from './UserInfo/UserInfo';
import Orderhistory from './OrderHistory/OrderHistory';
import Changepasswordform from './UserInfo/ChangePasswordForm';
import { motion } from 'framer-motion';


const { Title, Paragraph, Text, Link } = Typography;

const { TabPane } = Tabs;



const { Panel } = Collapse;


export default function Userprofile(props) {

    const { match: { params: { id } } } = props
    const userProfile = useSelector(state => state.AuthenticationReducer.userProfile);
    const orderHistory = useSelector(state => state.AuthenticationReducer.orderHistory);


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserProfile({ username: sessionStorage.getItem("authenticatedUser") }))
        //dispatch(getUserOrderHistory({ userId: sessionStorage.getItem("userId") }))
        // return () => {

        // }
    }, [])


    const handleCollapseChange = () => {

    }

    const handleTabChange = () => {

    }
    const variants = {
        hidden: {
            opacity:0
  
          },
          visible: {
              opacity:1,
              transition:{
                  duration:1
              }
          },
          exit: {
              opacity:0,
              transition:{
                  duration:1
              }
          }

    }
    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={classes.userProfilecontainer}
        >
            <Row style={{width:"80%"}} >
                <Row><h3>Your Profile</h3></Row>

                <Collapse defaultActiveKey={['1']} className={classes.collapseContainer} onChange={handleCollapseChange} >
                    <Panel header="User Information" key="1">

                        <Tabs onChange={handleTabChange} type="card">
                            <TabPane tab="Basic Info" key="1">
                                <Userinfo userProfile={userProfile} />
                            </TabPane>
                            <TabPane tab="Password" key="2">
                                <Changepasswordform />
                            </TabPane>

                        </Tabs>
                    </Panel>
                </Collapse>
                <Collapse defaultActiveKey={['1']} className={classes.collapseContainer} onChange={handleCollapseChange} >
                    <Panel header="Order History" key="1">
                        <Orderhistory />
                    </Panel>
                </Collapse>

            </Row>
        </motion.div>
    )
}
