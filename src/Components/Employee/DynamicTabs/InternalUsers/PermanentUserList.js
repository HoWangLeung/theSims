import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { Switch, Table, Modal, Spin } from 'antd';
import classes from '../../Employee.less'
import intl from 'react-intl-universal';
import { commonHeader } from './CommonHeader';
import { deleteEmployee } from '../../actions/EmployeeAction'
import ConfirmModal from '../../../../Common/ConfirmModal/CommonModal';
import CommonModal from '../../../../Common/ConfirmModal/CommonModal';
import { returnMessage } from '../../../../Common/utilities/helpers';

class PermanentUserList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            confirmStatus: false
        }
    }


    handleDelete = (e) => {

        let deleteId = e.currentTarget.id
        
        let modal = CommonModal.confirm({
        
            content: intl.get('askConfirmDelete'),
            okText: intl.get('confirm'),
            centered: true,
            maskClosable: false,
            okButtonProps: { loading: this.props.isLoading },
            keyboard: false,
            margin: 0,
            onOk: () => {
                return new Promise((res, rej) => {
                    this.props.deleteEmployee(deleteId, res, modal)

                }).then(() => {

                    returnMessage(intl.get('deleted'))

                })


            }
        })
    }



    generatePermanentUserTable = () => {
        const data = this.props.employeeList || [];

        const permConfig = {
            handleDelete: this.handleDelete
        }
        const columns = commonHeader(permConfig);

        return (
            <Table
                className={classes.employeeTable}
                columns={columns} dataSource={data}
                pagination={{ pageSize: 3, showSizeChanger: false, pageSizeOptions: [3, 5, 10] }}
                scroll={{ x: true }}
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
    

    return {
        employeeList: state.EmployeeReducer.employeeList,
        isLoading: state.EmployeeReducer.loading,
        isButtonLoading: state.EmployeeReducer.buttonLoading

    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        deleteEmployee: (id, res, modal) => {
            dispatch(deleteEmployee(id, res, modal))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PermanentUserList)
