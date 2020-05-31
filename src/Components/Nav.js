import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Dropdown, Row, Col, Divider } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import styles from './Home.less'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import iconMenu from './Menu';
import {Link} from 'react-router-dom';

const { Title } = Typography;
class Nav extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    handleClick = e => {


    }


    render() {


        const menu = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                        1st menu item
                </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                        2nd menu item
                </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                        3rd menu item
                </a>
                </Menu.Item>
            </Menu>
        )

        return (
            <div className={styles.NavRow}>
            <Row >
                <Link to="/" >
                    <Title level={4}>Derek</Title>
                </Link>
                <ul className={styles.ul}>
                    <li>
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                Hover me <DownOutlined />
                            </a>
                        </Dropdown>
                    </li>

                    <li>
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                Hover me <DownOutlined />
                            </a>
                        </Dropdown>
                    </li>

                    <li>
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                Hover me <DownOutlined />
                            </a>
                        </Dropdown>
                    </li>
                    <li>
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                Hover me <DownOutlined />
                            </a>
                        </Dropdown>
                    </li>
                    <li>
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                Hover me <DownOutlined />
                            </a>
                        </Dropdown>
                    </li>
                </ul>
                <Dropdown overlay={iconMenu} trigger={['click']}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        <Avatar onClick={this.handleClick} size="large" icon={<UserOutlined />} />
                    </a>
                </Dropdown>
            </Row>
            </div>
        )
    }
}

export default Nav
