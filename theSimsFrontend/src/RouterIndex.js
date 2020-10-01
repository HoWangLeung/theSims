import React, { Component } from 'react'
import classes from './App.less'
import Dashboard from './Components/Dashboard';
import AuthenticatedRoute from './Components/Authentication/Authentication'
import WebFooter from './Components/WebFooter/WebFooter'
import CreateTemplate from './Components/DigitalQrCodeMenu/GettingStrated/GettingStarted';
import Inventory from './Components/Inventory/';
import Counter from './Components/Jotto/Counter/Counter';
import SignUpMainPage from './Components/Authentication/SignUp/MainPage/SignUpMainPage';
import { BackTop, ConfigProvider } from 'antd';
import Employee from './Components/Employee/Employee';
import Login from './Components/Authentication/Login/Login';
import HomePage from './Components/HomePage/HomePage';
import { Avatar } from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import Home from './Components/Home'
import Nav from './Common/NavigationBar';
import SignUp from './Components/Authentication/SignUp/SignUp';
import { Layout, Menu, Breadcrumb, Dropdown, Typography } from 'antd';
import Banner from './Common/Banner';
import NavigationMenu from './Common/NavigationMenu';

import ProductMainpage from './Components/ProductMainPage/ProductMainPage';
const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;

const BannerWithRouter = withRouter(props => <Banner {...props} />)

export default class RouterIndex extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

    }



    render() {
        return (
            <ConfigProvider locale={this.props.antdLang}>
                <Router>
                    <Layout hasSider={false} className={classes.layout}>
                        <Nav
                            className={classes.nav}
                            handleChangeLocale={this.props.handleChangeLocale}
                            currentLocale={this.props.antdLang}
                        />
                        <BannerWithRouter />
                        <NavigationMenu />
                        <Content className={classes.content}>

                            <Switch>
                                <Route exact path='/' component={ProductMainpage} />
                                {/* <Route exact path='/' component={Login} /> */}
                                <Route path='/login' component={Login} />
                                <Route path='/signup' component={SignUpMainPage} />
                                <Route path='/signup-customer' component={SignUp} />
                                <AuthenticatedRoute path='/dashboard' component={Dashboard} />
                                <AuthenticatedRoute path='/employee' component={Employee} />
                                <AuthenticatedRoute path='/inventory' component={Inventory} />
                                <Route path='/jotto' component={Home} />
                                <Route path='/createMenu' component={CreateTemplate} />
                                <Route path='/counter' component={Counter} />
                            </Switch>
                        </Content>

                        <Footer>
                            <WebFooter />
                        </Footer>
                    </Layout>
                </Router >
            </ConfigProvider>
        )
    }
}
