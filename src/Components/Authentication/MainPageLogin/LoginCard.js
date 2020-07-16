import React, { Component } from 'react'
import { Card } from 'antd';
import Login from '../Login/Login';
import classes from '../Authentication.less'
import { withRouter, Link } from 'react-router-dom';
import { Collapse } from 'antd';
import LoginCollapsePanelHeader from './LoginCollapseHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faQrcode, faMarker } from '@fortawesome/free-solid-svg-icons'
import intl from 'react-intl-universal';
import qrCodeImg from '../../assests/Image/qrCode.png'
const { Panel } = Collapse;
class LoginCard extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
        console.log(classes);
    }

    generateLoginCard = () => {
        const text = `
        A QR code is a type of matrix barcode (or two-dimensional barcode) first designed in 1994 for the 
        automotive industry in Japan.
      `
        return (<Collapse
            accordion
            defaultActiveKey="1"
            className={classes.loginCollapse}
        >
            <Panel
                showArrow={false}
                className={classes.panel}
                header={
                    <LoginCollapsePanelHeader
                        title={intl.get('signInWithUserName')}
                        icon={faKey}
                    />} key="1">

                <Login />
            </Panel>
            <Panel
                showArrow={false}
                className={classes.panel}
                header={
                    <LoginCollapsePanelHeader
                        title={intl.get('signInWithQrCode')}
                        icon={faQrcode}
                    />}


                key="2">
                <img src={qrCodeImg} alt="qrCode" />
                <p>{text}qr code here</p>

            </Panel>
          
            <Panel
                showArrow={false}
                header={
                    <Link to="/signup"> <LoginCollapsePanelHeader
                        title={intl.get('signup')}
                        icon={faMarker}
                    />    </Link>} key="3">


            </Panel>
         
        </Collapse>)
    }

    render() {
        const loginCard = this.generateLoginCard()
        return (

            <div className={classes.loginCardContainer} >
                {loginCard}
            </div>

        )
    }
}

export default withRouter(LoginCard)
