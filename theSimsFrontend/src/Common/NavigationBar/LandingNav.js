import { MenuOutlined } from '@ant-design/icons'
import { Col, Drawer, Row } from 'antd'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { baseVariants, fadeOutVariants, fadeOutVariantsLandingNav } from '../../Animation'
import { logoutAction } from '../../Components/Authentication/actions/AuthenticationActions'
import AuthenticationService from '../../Components/Authentication/SignUp/AuthenticationService'
import Landingdrawer from './LandingDrawer'

import classes from './Nav.less'


export default function LandingNav(props) {

    const [visible, setVisible] = useState(false);
    const isLoggedIn = useSelector(state => state.AuthenticationReducer.isLoggedIn)
    console.log(isLoggedIn);
    const showDrawer = () => {
        setVisible(true);
    };
    const closeDrawer = () => {
        setVisible(false);
    };

    const dispatch = useDispatch();
    const logout = async () => {

        await AuthenticationService.logout()

        dispatch(logoutAction(isLoggedIn))

        closeDrawer()
        // props.history.push('/')
    }


    return (

        <motion.nav
            variants={fadeOutVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={classes.landingNav}
        >


            <Row className={classes.landingNavLinks} >
                <Col>

                    <Landingdrawer 
                    visible={visible}
                    logout={logout}
                    closeDrawer={closeDrawer}
                    isLoggedIn={isLoggedIn}
                    />
                </Col>

                <Col xs={12} sm={12} lg={12} className={classes.landingNavHeader} >
                    <div >DEREK</div>

                </Col>

                <Col xs={12} sm={12} lg={12} className={classes.landingNavLinksRight}>
                    <div className={classes.navLinksRightContainer}>
                        {props.width > 425 && <Link to="/about" ><p className={classes.navText}>ABOUT</p>  </Link>}
                        {props.width > 425 && <Link to="/products" ><p className={classes.navText}>SHOP</p></Link>}
                        {props.width > 425 && <Link to="/conatct" ><p className={classes.navText}>CONTACT</p></Link>}
                        <div className={classes.menuIcon} > <MenuOutlined onClick={showDrawer} /> </div>
                    </div>
                </Col>

            </Row>
        </motion.nav>


    )
}
