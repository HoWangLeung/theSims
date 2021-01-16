import { MenuOutlined } from '@ant-design/icons'
import { Col, Drawer, Row } from 'antd'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { baseVariants, fadeOutVariants, fadeOutVariantsLandingNav } from '../../Animation'
import { logoutAction } from '../../Components/Authentication/actions/AuthenticationActions'
import AuthenticationService from '../../Components/Authentication/SignUp/AuthenticationService'

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
    const  logout = async () => {
    
        await AuthenticationService.logout()

        dispatch( logoutAction(isLoggedIn))
       
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

            <Drawer
                width="30%"
                title="Hello !"
                placement="right"
                closable={false}
                onClose={closeDrawer}
                visible={visible}
                className={classes.landingNavDrawer}



            >
                <div>{isLoggedIn ?
                    <Link to="/" onClick={logout}>Logout</Link> :
                    <Link to="/login" onClick={closeDrawer} >Login</Link>}</div>
                <div>Some contents2...</div>
                <div>Some contents...</div>
            </Drawer>

            <Row className={classes.landingNavLinks} >

                <Col span={19}  className={classes.landingNavHeader} >  <div >DEREK</div> </Col>

                <Col span={5} className={classes.landingNavLinksRight}>
                    {props.width> 425 &&  <p>HOME</p>  }
                    {props.width> 425 &&    <p>ABOUT</p>  }
                     {props.width> 425 && <p>SHOP</p> }
                    <div> <MenuOutlined onClick={showDrawer} className={classes.MenuOutlined} /> </div>
                </Col>

            </Row>
        </motion.nav>


    )
}
