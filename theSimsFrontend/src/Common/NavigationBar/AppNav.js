import React, { Component } from 'react'
import { Drawer, Button } from 'antd';
import {
     UnorderedListOutlined
} from '@ant-design/icons';
import classes from './Nav.less'
import intl from 'react-intl-universal';
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

    render() {
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
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Drawer>
            </>
        )
    }
}

export default AppNav
