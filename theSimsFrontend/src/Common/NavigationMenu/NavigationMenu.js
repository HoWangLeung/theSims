import React, { Component } from 'react'
import classes from './NavigationMenu.less'
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, ApartmentOutlined, BarcodeOutlined, CreditCardOutlined } from '@ant-design/icons';
import intl from 'react-intl-universal';
import { Link } from 'react-router-dom';
const { SubMenu } = Menu;
class NavigationMenu extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    handleClick = e => {

    };


    generateMenu = () => {
        const { current } = this.state;
        return (<Menu onClick={this.handleClick} mode="horizontal" triggerSubMenuAction="click">
            <Menu.Item key="dashboard" icon={<ApartmentOutlined />}>
                <Link to="/dashboard">{intl.get('dashboard')}</Link>
            </Menu.Item>
            <Menu.Item key="app" icon={<AppstoreOutlined />}>
                <Link to="/employee">{intl.get('management')}</Link>
            </Menu.Item>
            <SubMenu icon={<CreditCardOutlined />} title={intl.get('payment')}>
                <Menu.ItemGroup title={intl.get('payment')}>
                    <Menu.Item key="setting:1">{intl.get('outstandingPayment')}</Menu.Item>
                    <Menu.Item key="setting:2">{intl.get('paymentRecord')}</Menu.Item>
                </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item key="alipay" icon={<BarcodeOutlined />}>
                <Link to="/inventory">
                    {intl.get('inventory')}
                </Link>
            </Menu.Item>
            <Menu.Item key="mail" icon={<MailOutlined />}>
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                    {intl.get('email')}
                </a>
            </Menu.Item>
        </Menu>)
    }


    render() {
        const navigationMenu = this.generateMenu()
        return (
            <div className={classes.NavigationMenuContainer}>
                <div className={classes.menuCotainer}>
                    {navigationMenu}
                </div>

            </div>
        )
    }
}

export default NavigationMenu
