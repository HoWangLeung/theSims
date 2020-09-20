import React, { Component } from 'react'
import 'antd/dist/antd.css';
import classes from './App.less';
import { Layout, Menu, Breadcrumb, Dropdown,Typography } from 'antd';
 
import { emit } from './emit.js'
import intl from 'react-intl-universal';
import zh_TW from 'antd/es/locale/zh_TW';
import zh_CN from 'antd/es/locale/zh_CN';
import en_US from 'antd/es/locale/en_US';

import RouterIndex from './RouterIndex'
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
    const{antdLang} = this.state
    return (
      
       <RouterIndex
       antdLang={antdLang}
       handleChangeLocale={this.handleChangeLocale}
       />

    );
  }
}

export default App;


 
