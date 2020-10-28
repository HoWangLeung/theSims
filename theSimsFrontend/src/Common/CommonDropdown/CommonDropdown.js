import { Select } from 'antd'
import { Option } from 'antd/lib/mentions'
import React, { Component } from 'react'
import intl from 'react-intl-universal';

class Commondropdown extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }


    }



    render() {
        const {options, ...restProps} = this.props;
        
        return (
            <Select
                {...restProps}
            >
                {options.map((option, index) => {

                    return <Option key={index} value={option}>{option}</Option>
                })}
            </Select>
        )
    }
}
export default Commondropdown