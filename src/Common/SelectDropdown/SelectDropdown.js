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
        console.log(`selected ${value}`);
    }

    onBlur = () => {
        console.log('blur');
    }

    onFocus = () => {
        console.log('focus');
    }

    onSearch = (val) => {
        console.log('search:', val);
    }
    generateSelectDropdown = () => {

        const { placeHolder, departmentOptions } = this.props
        console.log(departmentOptions);
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
