import React, { Component } from 'react'
import intl from 'react-intl-universal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { Switch, Tabs, Table ,Spin} from 'antd';
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
        
    }

    handleDelete = () => {
        
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
        
        const { managementList,isLoading } = this.props

        let config = {
            handleDelete: this.handleDelete
        }
        
        const columns =  commonHeader(config)
        
        if(columns!==undefined){
            
            
            
            return (
              <Spin spinning={isLoading}>
                <Table
                    className={classes.employeeTable}
                    columns={columns} dataSource={managementList || []}
                    pagination={{ pageSize: 3, showSizeChanger: false, pageSizeOptions: [3, 5, 10] }}
                    scroll={{ x: true }}
                />
                </Spin>
                )
        }else{
            return <h1>dsdf</h1>
        }
        
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