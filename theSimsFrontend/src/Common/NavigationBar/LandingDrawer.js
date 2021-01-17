import { Drawer, Menu } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { useState } from 'react';
import classes from './Nav.less';
import enjoySVG from '../../Common/assests/Image/enjoySVG.svg'
const { SubMenu } = Menu;

export default function Landingdrawer(props) {
    const { closeDrawer, visible, logout, isLoggedIn } = props
    const [current, setCurrent] = useState("login")

    const handleClick = e => {

        setCurrent(e.key)
    };

    return (
        <>
            <Drawer
                width="30%"
                title="Welcome !"
                placement="right"
                closable={true}
                onClose={closeDrawer}
                visible={visible}
                className={classes.drawer}

            >
                {/* <div>{isLoggedIn ?
                    <Link to="/" onClick={logout}>Logout</Link> :
                    <Link to="/login" onClick={closeDrawer} >Login</Link>}</div> */}

                <Menu style={{ width: "100%" }} onClick={handleClick} selectedKeys={[current]} mode="vertical">
                    <Menu.Item key="login"  >
                        {isLoggedIn ?
                            <Link to="/" onClick={logout}><h2>Logout</h2></Link> :
                            <Link to="/login" onClick={closeDrawer} ><h2>Login</h2></Link>}
                    </Menu.Item>


                </Menu>

                <div className={classes.drawerImgContainer}>
                    <img src={enjoySVG} alt="enjoySVG" className={classes.enjoySVG} />
                </div>
            </Drawer>
        </>
    )
}
