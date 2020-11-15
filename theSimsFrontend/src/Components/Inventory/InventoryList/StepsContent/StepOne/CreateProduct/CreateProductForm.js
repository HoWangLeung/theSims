import React, { useState, useEffect, useRef } from 'react';
import { Form, Input, Button, Space, Select, Row } from 'antd';
import { DeleteFilled, MinusCircleOutlined, MinusSquareOutlined, PlusOutlined, PlusSquareOutlined } from '@ant-design/icons';
import intl from 'react-intl-universal';
import { Collapse } from 'antd';
import { values } from 'lodash';
import CommonModal from '../../../../../../Common/ConfirmModal/CommonModal';
import { returnInfoMessage, returnMessage } from '../../../../../../Common/utilities/helpers';
import { nextPage } from '../../../../action/InventoryAction';
import { useDispatch, useSelector } from 'react-redux'
import classes from '../../../../Inventory.less';
const { Panel } = Collapse;
const { Option } = Select;
function Createproductform() {
    const [form] = Form.useForm();
    // const [currentFields, setCurrentFields] = useState({
    //     currentData: [],
    //     addedFirst: false,
    //     inCompleteFields: [],
    //     anyundefined: false,
    //     missinFields: []
    // })
    const prevRef = useRef();
    const dispatch = useDispatch();
    useEffect(() => {
        form.setFieldsValue({
            "createProduct": [{
                name: 0,
                key: 0,
                anyMissingField: false,
                fieldKey: 0
            }]
        })
    }, []);
    const prevCurrentFields = prevRef.current;
    const onFinish = values => {
        console.log(values);
        dispatch(nextPage(values))
    };
    const onFinishFailed = ({ values, errorFields, outOfDate }) => {
        let data = form.getFieldValue("createProduct")
        let combinedList = values.createProduct.map((item, i) => Object.assign({}, item, data[i]));
        combinedList.map(key => {
            const missingFields = Object.values(key).some(val => (val === undefined || val === ""))
            key['anyMissingField'] = missingFields ? true : false
        })
        form.setFieldsValue({
            "createProduct": combinedList
        })
    }
    const handleDelete = (e, remove, field) => {
        const currentFormValue = form.getFieldValue("createProduct")
        e.stopPropagation();
        if (field.name === 0 && currentFormValue.length === 1) {
            return returnInfoMessage("At least one product is required for this operation")
        }
        const filtered = currentFormValue.filter(e => e.name !== field.name)
        for (let i = field.name; i < filtered.length; i++)
            filtered[i].name -= 1
        form.setFieldsValue({ "createProduct": filtered })
        console.log(form.getFieldsError());
    }
    const handleCollapseKeyChange = e => { }
    const handleAdd = (e, add, fields) => {
        const currentFormValue = form.getFieldValue("createProduct")
        if (currentFormValue.length > 10) return returnInfoMessage("Th Maximum Limit (10) is reached")
        form.setFieldsValue(
            {
                "createProduct": [
                    ...currentFormValue,
                    {
                        name: currentFormValue[currentFormValue.length - 1].name + 1,
                        key: currentFormValue[currentFormValue.length - 1].key + 1,
                        anyMissingField: false,
                        fieldKey: currentFormValue[currentFormValue.length - 1].fieldKey + 1
                    }
                ]
            })
    }
    const handleInputChange = () => {
        console.log('changing');
    }
    return (
        <Form
            className={classes.createproductForm}
            id="createproductForm"
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            onFieldsChange={(changedFields, allFields) => {
                console.log(changedFields);
                console.log(allFields);
            }}
        >
            <Form.Item name={"productCategory"} label={intl.get("productCategory")}  >
                <Input/>
            </Form.Item>
            <Form.List
                name="createProduct"
            >
                {(fields, { add, remove }) => {
                    form.current = add
                    form.currentData = fields
                    return (
                        <>
                            {fields.map((field, index) => {
                                const fieldNames = ['productName', 'countryOrigin', 'cost', 'basePrice', 'Remaining']
                                return (
                                    <Collapse
                                        key={field.name}
                                        bordered={false}
                                        expandIcon={({ isActive }) => isActive ? <MinusSquareOutlined /> : <PlusSquareOutlined />}
                                        // defaultActiveKey="0"
                                        onChange={handleCollapseKeyChange}
                                    >
                                        <Panel className={classes.createProductPanel} key={field.name} header={`Product ${field.key}`}
                                            forceRender={true}
                                            extra={
                                                <Row>
                                                    {form.getFieldValue("createProduct")[index].anyMissingField
                                                        && <p style={{ margin: "0", color: "red" }}>One or More Field(s) Missing</p>}
                                                    <DeleteFilled id={field.name} style={{ fontSize: "150%" }} onClick={(e) => handleDelete(e, remove, field)} />
                                                </Row>
                                            }>
                                            <Row >
                                                {fieldNames.map((fieldName, index) => {
                                                    return (<Form.Item
                                                        key={index}
                                                        label={fieldName}
                                                        name={[field.name, fieldName]}
                                                        fieldKey={[field.fieldKey, index]}
                                                        rules={[
                                                            {
                                                                required: true,
                                                                message: 'Please input your name',
                                                            },
                                                        ]}
                                                    >
                                                        <Input onChange={handleInputChange} />
                                                    </Form.Item>)
                                                })}
                                            </Row>
                                        </Panel>
                                    </Collapse>
                                )
                            })}
                            <Form.Item>
                                <Button type="dashed" onClick={(e) => handleAdd(e, add, fields)} block icon={<PlusOutlined />}>
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
