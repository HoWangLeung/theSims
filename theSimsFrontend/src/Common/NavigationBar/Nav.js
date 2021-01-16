import React, { Component } from 'react'
import { Menu, Dropdown, Typography, Avatar, Popover, Divider } from 'antd';
import { UserOutlined, DownOutlined, LoginOutlined, HomeOutlined, CaretUpFilled, UpOutlined } from '@ant-design/icons';
import classes from './Nav.less'
import AppNav from './AppNav'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import AuthenticationService from '../../Components/Authentication/SignUp/AuthenticationService';
import { withRouter } from 'react-router-dom';
import { getUserProfile, logoutAction } from '../../Components/Authentication/actions/AuthenticationActions'
import LoginCard from '../../Components/Authentication/MainPageLogin/LoginCard'
import intl from 'react-intl-universal';
import Banner from '../Banner';
import NavigationMenu from '../NavigationMenu';
import Cart from '../../Components/ProductMainPage/Cart/Cart';
import Navigationmenu from '../NavigationMenu/NavigationMenu';
import { AnimatePresence, motion } from 'framer-motion';
import Text from 'antd/lib/typography/Text';
import { fadeOutVariants , fadeOutVariantsLandingNav} from '../../Animation';


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
        const { getUserProfile } = this.props
        console.log(this.props);
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
        if (this.props.isLoggedIn) {
            console.log('did login, fetch ?');

            let payload = { username: sessionStorage.getItem("authenticatedUser") }
            console.log(payload);
            getUserProfile(payload)

        }

    }

    componentDidUpdate(prevProps) {
        console.log('old props', prevProps.isLoggedIn);
        console.log('new props', this.props.isLoggedIn);

        if (prevProps.isLoggedIn !== this.props.isLoggedIn) {
            console.log('status changed');
        }
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
            this.setState({visible:false})

    }

    handleSignupClick = () => {
        this.setState({ visible: false })
    }

    handleVisibleChange = (visible) => {
        this.setState({ visible });
    }
    render() {

        const { hideNav } = this.state
        const { currentLocale, handleChangeLocale, location: { pathname },
            userProfile: { username }, isLoggedIn } = this.props

        console.log(isLoggedIn);
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

        homeIcon = <Link to="/products"><HomeOutlined className={classes.pointer} /></Link>


        const topNavigationMenu = (<><div className={classes.appHeaderContainer}>
            <Title style={{ padding: 10 }} level={3}><Link to="/" >
                <Text level={1} strong >{intl.get('webTitle')}</Text>
            </Link></Title>

            {/* <motion.div>
                <Link to="/about">

                    <Text level={2} strong >About </Text>

                </Link>
            </motion.div> */}


            <div className={classes.functionGroups}>
                <Cart />
                {localeChanger}
                {homeIcon}
                {loginOrUserIcon}
            </div>

        </div>
            {/* <Divider style={{ margin: "0px", padding: "0px 0px 0px 0px", background: "white", }} /> */}

        </>)

        const variants = {
            hidden: {
                opacity: 0

            },
            visible: {
                opacity: 1,
                transition: {
                    duration: .5
                }
            },
            exit: {
                opacity: 0,
                transition: {
                    duration: .5
                }
            }

        }
        return (
            <AnimatePresence exitBeforeEnter>
            <motion.div
                variants={fadeOutVariantsLandingNav}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <motion.div
                variants={fadeOutVariantsLandingNav}
                
                >
                    {hideNav === false && topNavigationMenu}
                    {/* <Banner />
                    <Navigationmenu pathname={pathname} username={username} /> */}
                    {hideNav === true && <div className={classes.appNavContainer}><AppNav /></div>}
                </motion.div>
            </motion.div>

            </AnimatePresence>
        );
    }




}

const mapStateToProps = (state) => {

    return {
        userProfile: state.AuthenticationReducer.userProfile,
        isLoggedIn: state.AuthenticationReducer.isLoggedIn

    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        logoutAction: (isLoggedIn) => dispatch(logoutAction(isLoggedIn)),
        getUserProfile: (payload) => dispatch(getUserProfile(payload))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav))
