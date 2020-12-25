import React from 'react'
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, ApartmentOutlined, BarcodeOutlined, CreditCardOutlined } from '@ant-design/icons';
import intl from 'react-intl-universal';
import { Link, withRouter } from 'react-router-dom';
import { getUserProfile } from '../../Components/Authentication/actions/AuthenticationActions';
import { connect } from 'react-redux';
const { SubMenu } = Menu;
 function Navigationmenu(props) {

    const handleClick = ({ item, key, keyPath, domEvent })=> {
        console.log(key);

    };

    const renderMenu = () => {


        const {
            pathname,
            username,


        } = props
        // let id = pathname.substring(pathname.lastIndexOf('/') + 1)
        // if (['/', '/signup-customer', '/signup', '/login', '/signup-success',
        //     `/product/${id}`, '/checkout',
        //     '/checkout-success',
        //     `/userProfile/${username}`,
        // ].includes(pathname)) { return null }
 

        return (<Menu 
            // onClick={handleClick} 
        // defaultSelectedKeys={['statistic']} 
        mode="horizontal" 
        triggerSubMenuAction="click">
            <Menu.Item key="statistic"     icon={<ApartmentOutlined /> } >
                <Link to="/statistic">{intl.get('statistic')}</Link>
            </Menu.Item>
            <Menu.Item key="employee" icon={<AppstoreOutlined />}>
                <Link to="/employee">{intl.get('management')}</Link>
            </Menu.Item>

            <Menu.Item key="paymentMangement" icon={<BarcodeOutlined />}>
                <Link to="/paymentMangement">
                    {intl.get('payment')}
                </Link>
            </Menu.Item>
            <Menu.Item key="inventory" icon={<BarcodeOutlined />}>
                <Link to="/inventory">
                    {intl.get('inventory.inventory')}
                </Link>
            </Menu.Item>
            <Menu.Item disabled key="mail" icon={<MailOutlined />}>
                <a href="" target="_blank" rel="noopener noreferrer">
                    {intl.get('email')}
                </a>
            </Menu.Item>
        </Menu>)
    }

    return (
        <div>
            <div >
                {renderMenu()}
            </div>

        </div>
    )


}
export default withRouter(Navigationmenu)