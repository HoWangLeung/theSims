import React, { useState } from 'react';
import { Form, Input, Button, Space, Select, Row } from 'antd';
import { DeleteFilled, MinusCircleOutlined, MinusSquareOutlined, PlusOutlined, PlusSquareOutlined } from '@ant-design/icons';
import intl from 'react-intl-universal';
import { Collapse } from 'antd';
const { Panel } = Collapse;
const { Option } = Select;

const areas = [
    { label: 'Beijing', value: 'Beijing' },
    { label: 'Shanghai', value: 'Shanghai' },
];

const sights = {
    Beijing: ['Tiananmen', 'Great Wall'],
    Shanghai: ['Oriental Pearl', 'The Bund'],
};

const Createproductform = () => {
    const [form] = Form.useForm();
    const [currentFields, setCurrentFields] = useState({
        "createProduct": [
            {
                fieldKey: 0,
                isListField: true,
                key: 0,
                name: 0
            }]
    })
    const onFinish = values => {
        console.log('Received values of form:', values);
    };



    const renderFormFields = (field, remove) => {
        const fieldNames = ['Name', 'Country', 'Cost', 'Price', 'Remaining']
        return (
            <Collapse
                bordered={false}
                expandIcon={({ isActive }) => isActive ? <MinusSquareOutlined /> : <PlusSquareOutlined />}
                className="site-collapse-custom-collapse"

            >
                <Panel header={`Product ${field.key +1} `} 
                extra={
                    <div>
                        <DeleteFilled  onClick={() => remove(field.name)} />            
                    </div>
                }
                
                
                key={field.key} className="site-collapse-custom-panel">
                    <Row key={field.key}>
                        {fieldNames.map(fieldName => {
                            console.log(fieldName);
                            return (<Form.Item
                                {...field}
                                label={fieldName}
                                name={[field.name, fieldName]}
                                fieldKey={[field.fieldKey, fieldName]}
                                rules={[{ required: true, message: `Missing ${fieldName}` }]}
                            >
                                <Input />
                            </Form.Item>)
                        })}

                        
                    </Row>
                </Panel>
              
            </Collapse>
        
        )
    }

    const handleAdd = (add, fields) => {
        console.log(fields);
        console.log('handling add');
        add()
    }

    return (
        <Form
            initialValues={
                currentFields
            }
            form={form}
            name="dynamic_form_nest_item"
            onFinish={onFinish}
            autoComplete="off">


            <Form.Item name={"productCategory"} label={intl.get("productCategory")} rules={[{ required: true }]}>
                <Input></Input>
            </Form.Item>
            <Form.List
                name="createProduct"

            >


                {(fields, { add, remove }) => {

                    console.log(fields);

                    return (
                        <>
                            {fields.map(field => {

                                return renderFormFields(field, remove)
                            })}

                            <Form.Item>
                                <Button type="dashed" onClick={() => handleAdd(add, fields)} block icon={<PlusOutlined />}>
                                    Add Product
                  </Button>
                            </Form.Item>
                        </>
                    )
                }}
            </Form.List>

        </Form>
    );
};



export default Createproductform
