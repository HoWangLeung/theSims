import React, { Component } from 'react';
import { Select } from 'antd';
import {emit} from './emit.js'
// import '../../assets/css/index.less'
const { Option } = Select;
class Header extends Component {
    handleChange(val) {
        // 發送消息
        console.log(typeof val);
        emit.emit('change_language', val);
    }
    render() {
        return (
            <div className='header'>
                Header
                <Select defaultValue="English" onChange={this.handleChange.bind(this)}>
                    <Option value="en-US">English</Option>
                    <Option value="zh-CN">中文</Option>
                </Select>
            </div>
        );
    }
    componentDidMount() {
    }
}
export default Header;