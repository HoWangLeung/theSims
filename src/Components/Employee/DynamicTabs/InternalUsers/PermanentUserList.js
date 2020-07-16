import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { Switch, Table } from 'antd';
import classes from '../../Employee.less'
import intl from 'react-intl-universal';
import { commonHeader } from './CommonHeader';
class PermanentUserList extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    generatePermanentUserTable = () => {
        const data = this.props.employeeList || [];
        const columns = commonHeader();

        return (
            <Table
                className={classes.employeeTable}
                columns={columns} dataSource={data}
                pagination={{ pageSize: 3, showSizeChanger: false, pageSizeOptions: [3, 5, 10] }}
            />
        )
    }

    render() {
        const upperTable = this.generatePermanentUserTable()
        return (
            <div>
                {upperTable}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);

    return {
        employeeList: state.EmployeeReducer.employeeList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PermanentUserList)
