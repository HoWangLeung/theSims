import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { fetchEmployee, searchByDepartment } from './actions/EmployeeAction';
import classes from './Employee.less'
import { Tabs, Table, Spin, Button, Row } from 'antd';
import { UserOutlined, UsergroupDeleteOutlined, SendOutlined, SettingOutlined, FieldTimeOutlined, DownloadOutlined } from '@ant-design/icons';
import intl from 'react-intl-universal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { Switch } from 'antd';
import PermanentUserList from './DynamicTabs/InternalUsers/PermanentUserList'
import ManagementTabTable from './DynamicTabs/InternalUsers/ManagementTabTable'
import SelectDropdown from '../../Common/SelectDropdown';
import SearchCollapse from '../../Common/SearchCollapse/SearchCollapse';
import QueueAnim from 'rc-queue-anim';
import CommonDropDown from '../../Common/CommonDropdown/CommonDropdown'
import { API } from '../../ApiConfig';

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
    handleTabChange = (activeKey) => {
        this.setState({
            currentTab: activeKey
        })
    }
    handleSelect = (value) => {
        console.log(value);
        const payload = {}
        if (value) { payload.department = value }
        const { searchByDepartment } = this.props
        searchByDepartment(payload)
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
        const {currentDept}=this.props
        let departmentOptions =
            ['All', 'Marketing', "Information Technology", "Human Resource", "operation", "Finance"]
        return (
            <CommonDropDown
                  value={currentDept}
                placeholder="Select a Department"
                className={classes.deptDropdown}
                options={departmentOptions}
                onSelect={this.handleSelect} />
        )

    }

    getExportButton = () => (
        <Button key="exportButton" icon={<DownloadOutlined />} onClick={this.hanldleExport} >{intl.get("export")}</Button>)
    hanldleExport = () => {

        return axios({
            url: `${API}/employee/export`,
            method: 'GET',
            responseType: 'blob',
        }).then(res => {

            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'Employee.xlsx'); //or any other extension
            document.body.appendChild(link);
            link.click();
        })
    }

    render() {
        const { currentTab } = this.state
        const { employeeList, managementList, isLoading } = this.props
        const dynamicTabs = this.generateTabs()


        let exportButton = this.getExportButton()
        return (
            <div className={classes.employeeContainer}>
                <Row className={classes.barAboveTabs} >
                    {currentTab === 'permanentUsers' && this.getSelectDropdown()}
                    {currentTab === 'permanentUsers' && exportButton}
                </Row>
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
        currentDept:state.EmployeeReducer.currentDept,
        managementList: state.EmployeeReducer.managementList,
        isLoading: state.EmployeeReducer.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchEmployee: () => { dispatch(fetchEmployee()) },
        searchByDepartment: (payload) => { dispatch(searchByDepartment(payload)) }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Employee)
