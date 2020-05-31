import React from 'react'
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const iconMenu = () => {
    return (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                    Login
        </a>
            </Menu.Item>
            <Menu.Item>
                <Link to='/signup'>
                    SignUp
                </Link>
            </Menu.Item>

        </Menu>
    )
}

export default iconMenu;
