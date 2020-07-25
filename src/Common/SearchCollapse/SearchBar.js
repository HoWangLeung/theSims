import React, { useState } from 'react'
import intl from 'react-intl-universal';
import classes from './SearchCollapse.less'
import { Form, Input, Button, Radio } from 'antd';
import CustomDatePicker from './CustomDatePicker';
import { UndoOutlined } from '@ant-design/icons';
import SelectDropdown from '../SelectDropdown';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
const SearchBar = (props) => {
    
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('inline');

    const onFormLayoutChange = ({ layout }) => {
        setFormLayout(layout);
    };

    const formItemLayout =
        formLayout === 'horizontal'
            ? {
                labelCol: { span: 4 },
                wrapperCol: { span: 14 },
            }
            : null;

    const buttonItemLayout =
        formLayout === 'horizontal'
            ? {
                wrapperCol: { span: 14, offset: 4 },
            }
            : null;

    return (
        <>
            <Form
                {...formItemLayout}
                layout={formLayout}
                form={form}
                initialValues={{ layout: formLayout }}
                onValuesChange={onFormLayoutChange}
            >

                <Form.Item label={intl.get('lastModifiedDate')}>
                    <CustomDatePicker />
                </Form.Item>

                <Form.Item label={intl.get('id')}>
                    <Input placeholder={intl.get('id')} />
                </Form.Item>

                <Form.Item label={intl.get('employeeName')}>
                    <Input placeholder={intl.get('employeeName')} />
                 
                </Form.Item>

                <Form.Item {...buttonItemLayout}>
                    <Button type="primary">{intl.get('search')}</Button>
                </Form.Item>

                <Form.Item  {...buttonItemLayout}>
                   <Button type="link" size="large">
                   <UndoOutlined />  {intl.get('reSet')}
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};
const mapStateToProps = (state) => {
    

    return {
        employeeList: state.EmployeeReducer.employeeList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar))
