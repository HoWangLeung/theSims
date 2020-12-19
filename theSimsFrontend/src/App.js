import React, { Component, useEffect, useState } from 'react'
import 'antd/dist/antd.css';
import classes from './App.less';
import { Layout, Menu, Breadcrumb, Dropdown, Typography, BackTop, ConfigProvider } from 'antd';

import { emit } from './emit.js'
import intl from 'react-intl-universal';
import zh_TW from 'antd/es/locale/zh_TW';
import zh_CN from 'antd/es/locale/zh_CN';
import en_US from 'antd/es/locale/en_US';

import RouterIndex from './RouterIndex'
import axios from 'axios'
import NavigationMenu from './Common/NavigationMenu';
import Dashboard from './Components/Dashboard';
import AuthenticatedRoute from './Components/Authentication/Authentication'
import WebFooter from './Components/WebFooter/WebFooter'
import CreateTemplate from './Components/DigitalQrCodeMenu/GettingStrated/GettingStarted';
import Inventory from './Components/Inventory/';
import Counter from './Components/Jotto/Counter/Counter';
import SignUpMainPage from './Components/Authentication/SignUp/MainPage/SignUpMainPage';
import Employee from './Components/Employee/Employee';
import Login from './Components/Authentication/Login/Login';
import HomePage from './Components/HomePage/HomePage';
import Home from './Components/Home'
import Nav from './Common/NavigationBar';
import SignUp from './Components/Authentication/SignUp/SignUp';
import AuthenticationService from './Components/Authentication/SignUp/AuthenticationService';
import ProductMainpage from './Components/ProductMainPage/ProductMainPage';
import Signupsuccess from './Components/Authentication/SignUp/SignUpSuccess/SignUpSuccess';
import Specificproduct from './Components/ProductMainPage/Products/SpecificProduct/SpecificProduct';
import Pagenotfound from './Components/ProductMainPage/Products/SpecificProduct/PageNotFound';

import Checkout from './Components/Checkout/Checkout';
import Checkoutsuccess from './Components/Checkout/CheckoutSuccess';
import Userprofile from './Components/Authentication/UserProfile/UserProfile';
import { AnimatePresence } from 'framer-motion';







import { BrowserRouter as Router, Switch, Route, Link, withRouter, useLocation } from 'react-router-dom';
import Banner from './Common/Banner';
import { set } from 'lodash';
import Navigationmenu from './Common/NavigationMenu/NavigationMenu';
const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;

const locales = {
  'en-US': require('./Common/locales/en_US/translations.json'),
  'zh-CN': require('./Common/locales/zh_CN/translations.json'),
};

function App() {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     antdLang: en_US,
  //   }
  // }
  const location = useLocation()
  const [antdLang, setAntdLang] = useState(en_US)
  const isUserLoggedIn = AuthenticationService.isUserLoggedIn()
  console.log(isUserLoggedIn);

  console.log('need to fire again axios interceptor ! ');
  axios.interceptors.request.use(
    (config) => {
      console.log('line 72 axios ');
      console.log(config);
      if (isUserLoggedIn) {
        console.log('user is fucking logged in ');
        config.headers.authorization = sessionStorage.getItem("USER_TOKEN")
      }
      console.log(config, 'sfd');
      return config
    },
    error => {

    }
  )






  useEffect(() => {

    emit.on('change_language', lang => loadLocales(lang));
    loadLocales();

    return () => {

    }

  }, [])

  const loadLocales = (lang = 'en-US') => {


    intl.init({
      currentLocale: lang,
      locales,
    }).then(() => {
      // this.setState({

      // });

      setAntdLang(lang === 'en-US' ? en_US : zh_TW)
    });
  }

  const handleChangeLocale = (e) => {
    e.preventDefault()

    let val = e.currentTarget.getAttribute('value')
    emit.emit('change_language', val);

  }



  console.log(location);
  return (


    <ConfigProvider locale={antdLang}>
      <Layout hasSider={false} className={classes.layout}>
        <Nav
          className={classes.nav}
          handleChangeLocale={handleChangeLocale}
          currentLocale={antdLang}
        />



        <Content className={classes.content}>

          <AnimatePresence exitBeforeEnter  >
            <Switch location={location} key={location.key}  >
      
              <Route exact path='/' component={ProductMainpage} />
              <Route path='/product/:id' component={Specificproduct} />
              <Route path='/404' component={Pagenotfound} />
              <Route path='/login' component={Login} />
              <Route path='/signup' component={SignUpMainPage} />
              <Route path='/signup-customer' component={SignUp} />
              <Route path='/signup-success' component={Signupsuccess} />
              <AuthenticatedRoute path='/dashboard' component={Dashboard} />
              <AuthenticatedRoute path='/employee' component={Employee} />
              <AuthenticatedRoute path='/inventory' component={Inventory} />
              <AuthenticatedRoute path='/checkout' component={Checkout} />
              <AuthenticatedRoute path='/userProfile/:id' component={Userprofile} />
              <AuthenticatedRoute path='/checkout-success' component={Checkoutsuccess} />
              <Route path='/createMenu' component={CreateTemplate} />
              <Route path='/counter' component={Counter} />
            </Switch>
          </AnimatePresence>
          <BackTop target={() => document.body} />
        </Content>

        <Footer>
          <WebFooter />
        </Footer>
      </Layout>
    </ConfigProvider>


  );
}


export default App;



