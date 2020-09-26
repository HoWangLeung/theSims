import React, { Component } from 'react'
import { Select } from 'antd';
import classes from './SelectDropdown.less'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import intl from 'react-intl-universal';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
const { Option } = Select;


class SelectDropdown extends Component {
    constructor(props) {
        super(props)

        this.state = {
        
        }
    }

    onChange = (value) => {

    }

    onBlur = () => {

    }

    onFocus = () => {

    }

    onSearch = (val) => {

    }
    onSelect = (value) => {
        const { handleSelect } = this.props
        
        handleSelect(value);
    }
    generateSelectDropdown = () => {

        const { placeHolder, departmentOptions,currentDept } = this.props

        return (<Select
            className={classes.SelectDropdown}
            showSearch
            allowClear
            value={currentDept}
             
            placeholder={placeHolder}
            optionFilterProp="children"
            onChange={this.onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onSearch={this.onSearch}
            onSelect={this.onSelect}
            filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            
        >

            {departmentOptions.map((option, index) => {
                
                return <Option key={index} style={{zIndex:2000}} value={option}>{intl.get(option)}</Option>
            })}
        </Select>)
    }

    render() {

        let SelectDropdown = this.generateSelectDropdown();
        let { icon } = this.props;
        return (
            <div className={classes.SelectDropdownContainer}>
                <FontAwesomeIcon className={classes.icon} icon={icon} />{SelectDropdown}
            </div>
        )
    }
}

const mapStateToProps = (state) => {


    return {
        currentDept:state.EmployeeReducer.currentDept
    }
}

export default withRouter(connect(mapStateToProps)(SelectDropdown))
