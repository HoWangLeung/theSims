import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Space, Select, Row } from 'antd';
import { DeleteFilled, MinusCircleOutlined, MinusSquareOutlined, PlusOutlined, PlusSquareOutlined } from '@ant-design/icons';
import intl from 'react-intl-universal';
import { Collapse } from 'antd';
import { values } from 'lodash';
const { Panel } = Collapse;
const { Option } = Select;

function Createproductform() {
    const [form] = Form.useForm();
    const [currentFields, setCurrentFields] = useState({
        addedFirst: false,
        inCompleteFields: [],
        anyundefined: false
    })


    useEffect(() => {
        if (!currentFields.addedFirst) form.current()




    }, []);
    const onFinish = values => {
        form.validateFields()
            .then(() => {



            }).catch(errorInfo => {
                console.log(errorInfo);
                console.log('sdf');


            })

    };
    const onFinishFailed = ({ values, errorFields, outOfDate }) => {
        let inCompleteFields = []
        let anyundefined = false
        let panelFields = values.createProduct
        panelFields.forEach((field, index) => {

            inCompleteFields.push(index)
            if (field === undefined) {
                anyundefined = true
            } else {

                console.log('checked');

            }
            setCurrentFields({
                ...currentFields,
                anyundefined,
                inCompleteFields,
                addedFirst: true
            })

        })
    }
    const handlePanelClick = () => {

    }

    const handleDelete = (e, remove, field) => {
        e.preventDefault()
        e.stopPropagation();

        let id = parseInt(e.currentTarget.id)


        let isClickedFirst = (id === 0) ? true : false
        let isClickedLast = (id === form.currentData.length - 1) ? true : false


        const updatedList1 = currentFields.inCompleteFields.filter((inCompleteField, index) => {
            return inCompleteField !== id
        })


        if (!isClickedFirst && !isClickedLast) {
            for (let i = id; i < updatedList1.length; i++) {
                updatedList1[i] -= 1
            }
        }

        if (isClickedFirst && !isClickedLast) {
            for (let i = 0; i < updatedList1.length; i++) {
                updatedList1[i] -= 1
            }
        }


        setCurrentFields({
            ...currentFields,
            inCompleteFields: updatedList1
        })

        remove(field.name)


    }



    return (
        <Form
            id="createproductForm"
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            onFieldsChange={(changedFields, allFields) => {



            }}
        >


            <Form.Item name={"productCategory"} label={intl.get("productCategory")}  >
                <Input></Input>
            </Form.Item>
            <Form.List
                name="createProduct"


            >


                {(fields, { add, remove }) => {

                    form.current = add
                    form.currentData = fields

                    return (
                        <>
                            {fields.map(field => {
                                let panelWarning = null
                                const { inCompleteFields } = currentFields


                                inCompleteFields.forEach(inCompleteField => {
                                    if (inCompleteField === field.name) {
                                        panelWarning = (<p>Missing Fields </p>)
                                    }

                                })



                                const fieldNames = ['Name', 'Country', 'Cost', 'Price', 'Remaining']
                                return (
                                    <Collapse
                                        bordered={false}
                                        expandIcon={({ isActive }) => isActive ? <MinusSquareOutlined /> : <PlusSquareOutlined />}

                                    >
                                        <Panel header={`Product ${field.key}`}
                                            onClick={handlePanelClick}
                                            extra={
                                                <Row>
                                                    {panelWarning}
                                                    <DeleteFilled name={field.name} id={field.name} style={{ fontSize: "150%" }} onClick={(e) => handleDelete(e, remove, field)} />
                                                </Row>
                                            }>
                                            <Row >
                                                {fieldNames.map((fieldName, index) => {

                                                    return (<Form.Item
                                                        key={index}
                                                        // {...field}
                                                        label={fieldName}
                                                        name={[field.name, fieldName]}
                                                        fieldKey={[field.fieldKey, index]}
                                                        validateTrigger={["onload"]}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'Please input your name',
                                                            },
                                                        ]}

                                                    >
                                                        <Input />
                                                    </Form.Item>)
                                                })}


                                            </Row>
                                        </Panel>

                                    </Collapse>

                                )
                            })}

                            <Form.Item>
                                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
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
