import React, { Component } from 'react'
import classes from './NavigationMenu.less'
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, ApartmentOutlined, BarcodeOutlined, CreditCardOutlined } from '@ant-design/icons';
import intl from 'react-intl-universal';
import { Link, withRouter } from 'react-router-dom';
import { getUserProfile } from '../../Components/Authentication/actions/AuthenticationActions';
import { connect } from 'react-redux';
const { SubMenu } = Menu;
class NavigationMenu extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    handleClick = e => {

    };

    componentDidMount=()=>{
        let isLoggedIn = sessionStorage.getItem("userId")!==null
       if(isLoggedIn){
        console.log('fired nav');
        
        //this.props.getUserProfile({ username: sessionStorage.getItem("authenticatedUser") })
    }

    }


    renderMenu = () => {
        const { current } = this.state;
        const { 
            location: { pathname },
            userProfile:{username}
        
        
        } = this.props
        let id=pathname.substring(pathname.lastIndexOf('/') + 1)
        if (['/','/signup-customer','/signup','/login','/signup-success',
        `/product/${id}`,'/checkout',
         '/checkout-success',
         `/userProfile/${username}`,
        ].includes(pathname))  return null


      
        return (<Menu onClick={this.handleClick} mode="horizontal" triggerSubMenuAction="click">
            <Menu.Item key="dashboard" icon={<ApartmentOutlined />}>
                <Link to="/dashboard">{intl.get('statistic')}</Link>
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
                    {intl.get('inventory.inventory')}
                </Link>
            </Menu.Item>
            <Menu.Item key="mail" icon={<MailOutlined />}>
                <a href="" target="_blank" rel="noopener noreferrer">
                    {intl.get('email')}
                </a>
            </Menu.Item>
        </Menu>)
    }


    render() {


        return (
            <div className={classes.NavigationMenuContainer}>
                <div className={classes.menuCotainer}>
                    {this.renderMenu()}
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    

    return {
        userProfile:state.AuthenticationReducer.userProfile

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    
    return {
        getUserProfile:(payload)=>dispatch(getUserProfile(payload))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavigationMenu))
