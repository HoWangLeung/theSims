import React, { Component } from 'react'
import intl from 'react-intl-universal';
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { Switch, Tabs, Table } from 'antd';
import classes from '../../Employee.less'

import { UserOutlined } from '@ant-design/icons';
import { commonHeader } from './CommonHeader';

const { TabPane } = Tabs;

class ManagementTabTable extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {
        console.log(intl.get('internalUsers'));
    }

    generateManagementTabs = () => {
        return (
            <Tabs
                className={classes.dynamicTabs}
                defaultActiveKey="management">
                <TabPane
                    tab={
                        <span>
                            <UserOutlined />
                            {intl.get('management')}
                        </span>
                    }
                    key="management"
                >
                    {this.generateInternalLowerTable()}
                </TabPane>


            </Tabs>)
    }


    generateInternalLowerTable = () => {
        console.log(this.props);
        const { managementList } = this.props
        const columns = commonHeader()
        return (
            <Table
                className={classes.employeeTable}
                columns={columns} dataSource={managementList || []}
                pagination={{ pageSize: 3, showSizeChanger: false, pageSizeOptions: [3, 5, 10] }}
            />)

    }

    render() {
        let lowerTable = this.generateManagementTabs()
        return (
            <div>
                {lowerTable}
            </div>
        )
    }
}



export default ManagementTabTable