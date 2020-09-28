import React, { Component } from 'react'
import { Drawer, Button } from 'antd';
import {
    UnorderedListOutlined
} from '@ant-design/icons';
import classes from './Nav.less'
import intl from 'react-intl-universal';
import AuthenticationService from '../../Components/Authentication/SignUp/AuthenticationService';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { logoutAction } from '../../Components/Authentication/SignUp/actions/AuthenticationActions';
import { withRouter } from 'react-router-dom';

class AppNav extends Component {
    constructor(props) {
        super(props)

        this.state = {
            visible: false
        }


    }

    showDrawer = () => {
        this.setState({ visible: true })
    };

    onClose = () => {
        this.setState({ visible: false })
    };


    logout = async () => {
        const { isLoggedIn } = this.props
        await AuthenticationService.logout()


        this.props.logoutAction(isLoggedIn)
        this.closeDrawer()
        this.props.history.push('/')
    }
    closeDrawer=()=>{
        this.setState({ visible: false })
    }

    render() {
        const  isLoggedIn  = AuthenticationService.isUserLoggedIn()


        return (
            <>
                <div className={classes.listIconContainer}>
                    <UnorderedListOutlined
                        onClick={this.showDrawer}
                        className={classes.listIcon}
                    />
                </div>
                <Drawer
                    title={intl.get('webTitle')}
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                   
                    <p>{isLoggedIn ?
                        <Link to="/login" onClick={this.logout}>Logout</Link> :
                        <Link to="/login" >Login</Link>}</p>
                    <p>{isLoggedIn ?
                        null :
                        <Link to="/signup-customer"onClick={this.closeDrawer} >SignUp</Link>

                    }
                    </p>
                </Drawer>
            </>
        )
    }
}
const mapStateToProps = (state) => {


    return {
  
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logoutAction: (isLoggedIn) => dispatch(logoutAction(isLoggedIn))

    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppNav))
