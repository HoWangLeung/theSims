import React, { Component } from 'react'
import axios from 'axios'
import { GET_ALL_EMPLOYEE } from './constant'
import { connect } from 'react-redux'
import { fetchEmployee } from './actions/EmployeeAction';
import classes from './Employee.less'
import { Tabs, Table, Spin } from 'antd';
import { UserOutlined, UsergroupDeleteOutlined, SendOutlined, SettingOutlined, FieldTimeOutlined } from '@ant-design/icons';
import intl from 'react-intl-universal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { Switch } from 'antd';
import PermanentUserList from './DynamicTabs/InternalUsers/PermanentUserList'
import ManagementTabTable from './DynamicTabs/InternalUsers/ManagementTabTable'
import SelectDropdown from '../../Common/SelectDropdown';
import SearchCollapse from '../../Common/SearchCollapse/SearchCollapse';

const { TabPane } = Tabs;

class Employee extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentTab: "permanentUsers"
        }
    }

    componentDidMount() {
        const { fetchEmployee } = this.props


        fetchEmployee()

    }

    componentDidUpdate() {


    }
    handleTabChange = (activeKey) => {

        this.setState({
            currentTab: activeKey
        })
    }

    generateTabs = () => {

        return (
            <>
                <Tabs
                    onChange={this.handleTabChange}
                    className={classes.dynamicTabs}
                    defaultActiveKey="permanentUsers"

                >
                    <TabPane
                        tab={
                            <span>
                                <UserOutlined />
                                {intl.get('permanentUsers')}
                            </span>
                        }
                        key="permanentUsers"
                    >
                        <SearchCollapse />
                        <Spin spinning={this.props.isLoading} >

                            <PermanentUserList />
                        </Spin>
                    </TabPane>
                    <TabPane
                        tab={
                            <span>
                                <UsergroupDeleteOutlined />
                                {intl.get('externalUsers')}
                            </span>
                        }
                        key="2"
                    >
                        Tab 2
        </TabPane>
                    <TabPane
                        tab={
                            <span>
                                <SettingOutlined />
                                {intl.get('userPermission')}
                            </span>
                        }
                        key="3"
                    >
                        Tab 3
        </TabPane>
                    <TabPane
                        tab={
                            <span>
                                <SendOutlined />
                                {intl.get('sendInvitation')}
                            </span>
                        }
                        key="4"
                    >
                        Tab 4
        </TabPane>
                    <TabPane
                        tab={
                            <span>
                                <FieldTimeOutlined />
                                {intl.get('administrationLog')}
                            </span>
                        }
                        key="5"
                    >
                        Tab 5
        </TabPane>

                </Tabs>

            </>
        )
    }

    getSelectDropdown = () => {
        let departmentOptions =
            ['marketing', "informationTechnology", "humanResource", "operation", "finance"]
        return (<SelectDropdown
            placeHolder={intl.get('selectDepartment')}
            icon={faBuilding}
            options={departmentOptions}
            departmentOptions={departmentOptions}
        />)
    }

    render() {
        const { currentTab } = this.state
        const { employeeList, managementList, isLoading } = this.props
        const dynamicTabs = this.generateTabs()

        let SelectDropdown = this.getSelectDropdown()
        return (
            <div className={classes.employeeContainer}>
                {SelectDropdown}
                {dynamicTabs}
                {currentTab === 'permanentUsers' &&
                    <ManagementTabTable
                        managementList={managementList}
                        isLoading={isLoading}
                    />}
            </div>
        )
    }
}

const mapStateToProps = (state) => {


    return {
        employeeList: state.EmployeeReducer.employeeList,
        managementList: state.EmployeeReducer.managementList,
        isLoading: state.EmployeeReducer.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchEmployee: () => { dispatch(fetchEmployee()) }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Employee)
