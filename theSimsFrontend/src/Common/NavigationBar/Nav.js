import React, { Component } from 'react'
import { Menu, Dropdown, Typography, Avatar, Popover } from 'antd';
import { UserOutlined, DownOutlined, LoginOutlined, HomeOutlined } from '@ant-design/icons';
import classes from './Nav.less'
import AppNav from './AppNav'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import AuthenticationService from '../../Components/Authentication/SignUp/AuthenticationService';
import { withRouter } from 'react-router-dom';
import { logoutAction } from '../../Components/Authentication/actions/AuthenticationActions'
import LoginCard from '../../Components/Authentication/MainPageLogin/LoginCard'
import intl from 'react-intl-universal';
import Banner from '../Banner';
import NavigationMenu from '../NavigationMenu';
import Cart from '../../Components/ProductMainPage/Cart/Cart';


const { Title } = Typography;
const { SubMenu } = Menu;

class Nav extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            current: 'mail',
            hideNav: false,
            visible: false
        };


    }
   
    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize = () => {
        this.setState({ hideNav: window.innerWidth <= 760 });
    }

    handleClick = e => {

        this.setState({
            current: e.key,
        });
    };

    logout = async () => {
        const { isLoggedIn } = this.props
        await AuthenticationService.logout()


        this.props.logoutAction(isLoggedIn)
        this.props.history.push('/')
    }

    handleUserMenuClick = ({ item, key, keyPath, domEvent }) => {




        item.onClick = this.testing()

        switch (key) {
            case '5':
                this.logout()

                break
            default:
                return
        }
    }
    testing = () => {


    }

    handleSignupClick = () => {
        this.setState({ visible: false })
    }

    handleVisibleChange = (visible) => {
        this.setState({ visible });
    }
    render() {

        const { hideNav } = this.state
        const { currentLocale, handleChangeLocale } = this.props
        const isLoggedIn = AuthenticationService.isUserLoggedIn()
        let {userProfile:{username}}= this.props
        let homeIcon
        let localeChanger
        let loginOrUserIcon
        
        const menu = (
            <Menu>
                <Menu.Item key="0">
                    <Link to="/createMenu">QR Code Generator</Link>
                </Menu.Item>
                <Menu.Item key="1">
                    Placeholder
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3">3rd menu item</Menu.Item>
            </Menu>
        )

        const userMenuIcon = (<Avatar className={classes.avatar} size={30} icon={<UserOutlined />} />)
        const loginIcon = (<LoginOutlined className={classes.loginIcon} />)

        const userMenu = (
            <Menu className={classes.userMenuDropDown} onClick={this.handleUserMenuClick} >
                <Menu.Item key="0">
                    <Link to="/inventory"> <p>{intl.get('dashboard')}</p></Link>
                </Menu.Item>
                <Menu.Item key="1">
                <Link to={`/userProfile/${username}`}>   <p>{intl.get('userProfile')}</p></Link>
                </Menu.Item>
                <Menu.Divider />
                {!isLoggedIn && <Menu.Item key="3"> <Link to="/signup">Sign Up</Link></Menu.Item>}
                {!isLoggedIn && <Menu.Item key="4"> <Link to="/login">Login</Link></Menu.Item>}
                {isLoggedIn && <Menu.Item key="5"> Logout</Menu.Item>}
            </Menu>
        );

        if (currentLocale.locale === 'en') {
            localeChanger = <div className={classes.pointer} value="zh-CN" onClick={handleChangeLocale}>中文</div>
        } else {
            localeChanger = <div className={classes.pointer} value="en-US" onClick={handleChangeLocale}>English</div>
        }

        if (isLoggedIn) {
            loginOrUserIcon = <Dropdown overlay={userMenu} trigger={['click']}>
                {userMenuIcon}
            </Dropdown>
        } else {
            loginOrUserIcon = <Popover
                visible={this.state.visible}
                content={<LoginCard hanldeSignupClick={this.handleSignupClick}
                />}
                placement="bottomLeft"
                trigger="click"
                onVisibleChange={this.handleVisibleChange}
            >
                {loginIcon}
            </Popover>
        }

        homeIcon = <Link to="/"><HomeOutlined className={classes.pointer} /></Link>


        const topNavigationMenu = (<div className={classes.appHeaderContainer}>
            <Title style={{ padding: 10 }} level={3}><Link to="/" >{intl.get('webTitle')}</Link></Title>

            <Dropdown overlay={menu} trigger={['hover']}>
                <h4>{intl.get('news')}</h4>
            </Dropdown>

            <Dropdown overlay={menu} trigger={['hover']}>
                <h4>{intl.get('forms')}</h4>
            </Dropdown>
            <Dropdown overlay={menu} trigger={['hover']}>
                <h4>{intl.get('entertainment')}<DownOutlined /></h4>
            </Dropdown>
            <Dropdown overlay={menu} trigger={['hover']}>
                <h4>{intl.get('contact')}</h4>
            </Dropdown>
            <Dropdown overlay={menu} trigger={['hover']}>
                <h4>{intl.get('others')}<DownOutlined /></h4>
            </Dropdown>

            <div className={classes.functionGroups}>
                <Cart/>
                {localeChanger}
                {homeIcon}
                {loginOrUserIcon}
            </div>
        </div>)


        return (
            <>
                {hideNav === false && topNavigationMenu}

                {hideNav === true && <div className={classes.appNavContainer}><AppNav /></div>}
            </>
        );
    }




}

const mapStateToProps = (state) => {

    return {
        userProfile:state.AuthenticationReducer.userProfile
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        logoutAction: (isLoggedIn) => { dispatch(logoutAction(isLoggedIn)) }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav))
