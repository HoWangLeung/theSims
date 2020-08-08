import React, { Component } from 'react'
import { Select } from 'antd';
import classes from './SelectDropdown.less'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import intl from 'react-intl-universal';
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
    onSelect=(value)=>{
        const{handleSelect} = this.props
        console.log(value, "34");
        handleSelect(value);
    }
    generateSelectDropdown = () => {

        const { placeHolder, departmentOptions } = this.props
        
        return (<Select
            className={classes.SelectDropdown}
            showSearch
            style={{ width: 200 }}
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

            {departmentOptions.map((option, index) => (
                    <Option value={option}>{intl.get(option)}</Option>
                 ))}
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

export default SelectDropdown
