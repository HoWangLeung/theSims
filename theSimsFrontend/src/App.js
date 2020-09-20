import React, { Component } from 'react'
import 'antd/dist/antd.css';
import classes from './App.less';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Components/Home'
import Nav from './Common/NavigationBar';
import SignUp from './Components/Authentication/SignUp/SignUp';
import { Layout, Menu, Breadcrumb, Dropdown } from 'antd';
import { Typography } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';
import Employee from './Components/Employee/Employee';
import Login from './Components/Authentication/Login/Login';
import HomePage from './Components/HomePage/HomePage';
import { emit } from './emit.js'
import intl from 'react-intl-universal';
import { ConfigProvider } from 'antd';
import zh_TW from 'antd/es/locale/zh_TW';
import zh_CN from 'antd/es/locale/zh_CN';
import en_US from 'antd/es/locale/en_US';
import Dashboard from './Components/Dashboard';
import AuthenticatedRoute from './Components/Authentication/Authentication'
import WebFooter from './Components/WebFooter/WebFooter'
import CreateTemplate from './Components/DigitalQrCodeMenu/GettingStrated/GettingStarted';
import Inventory from './Components/Inventory/';
import Counter from './Components/Jotto/Counter/Counter';
import SignUpMainPage from './Components/Authentication/SignUp/MainPage/SignUpMainPage';

const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;

const locales = {
  'en-US': require('./Common/locales/en_US/translations.json'),
  'zh-CN': require('./Common/locales/zh_CN/translations.json'),
};

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      antdLang: en_US,  
    }
  }

  componentDidMount() {
    emit.on('change_language', lang => this.loadLocales(lang)); 
    this.loadLocales(); 
  }

  loadLocales =  (lang = 'en-US') => {
    
    intl.init({
      currentLocale: lang, 
      locales,
    }).then(() => {
      this.setState({
        antdLang: lang === 'en-US' ? en_US : zh_TW
      });
    });
  }

  handleChangeLocale =  (e) => {
    e.preventDefault()
    
    let val = e.currentTarget.getAttribute('value')
    emit.emit('change_language', val);

  }


  render() {
    console.log(classes);
    return (
      <ConfigProvider locale={this.state.antdLang}>
        <Router>
          <Layout hasSider={false} className={classes.layout}>
            <Nav
             className={classes.nav}
              handleChangeLocale={this.handleChangeLocale}
              currentLocale={this.state.antdLang}
            />
            
            <Content className={classes.content}>
              <Switch>
                <Route exact path='/' component={HomePage} />
                <AuthenticatedRoute path='/dashboard' component={Dashboard} />
                <Route path='/login' component={Login} />
                <Route path='/signup' component={SignUpMainPage} />
                <Route path='/signup-customer' component={SignUp} />
                <AuthenticatedRoute path='/employee' component={Employee} />
                <AuthenticatedRoute path='/inventory' component={Inventory} />
                <Route path='/jotto' component={Home} />
                <Route path='/createMenu' component={CreateTemplate} />
                <Route path='/counter' component={Counter} />
              </Switch>
            </Content>
            <Footer>
               <WebFooter/>
            </Footer>
          </Layout>
        </Router >
      </ConfigProvider>
    );
  }
}

export default App;


// import React, { Component } from 'react'

// class App extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {

//     }
//   }

//   render() {
//     return (
//       <div>

//       </div>
//     )
//   }
// }

// export default App
