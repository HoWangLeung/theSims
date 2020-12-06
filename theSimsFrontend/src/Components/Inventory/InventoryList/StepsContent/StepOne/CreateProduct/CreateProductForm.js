import React, { useState, useEffect, useRef } from 'react';
import { Form, Input, Button, Space, Select, Row, Divider, Tag, Tooltip } from 'antd';
import { DeleteFilled, MinusCircleOutlined, MinusSquareOutlined, PlusOutlined, PlusSquareOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import intl from 'react-intl-universal';
import { Collapse, message } from 'antd';
import { values } from 'lodash';
import CommonModal from '../../../../../../Common/ConfirmModal/CommonModal';
import { returnInfoMessage, returnMessage } from '../../../../../../Common/utilities/helpers';
import { nextPage, fetchCategoryInfo, addTempItemToCategoryInfo } from '../../../../action/InventoryAction';
import { useDispatch, useSelector } from 'react-redux'
import classes from '../../../../Inventory.less';
const { Panel } = Collapse;
const { Option } = Select;
function Createproductform() {


    const [form] = Form.useForm();
    const [name, setName] = useState("")

    const categoryInfo = useSelector(state => state.InventoryReducer.categoryInfo)
    
    const prevRef = useRef();
    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(fetchCategoryInfo())

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
        
        dispatch(nextPage(values, 'createProduct'))
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

    }

    const addItem = (e) => {
        
        let payload = {
            name
        }

        if(name!=""){ dispatch(addTempItemToCategoryInfo(payload))
            message.success({
                content: "Added a temporary Category",
                // className: 
                style: {
                    marginTop: '18vh',
                },
            })}
       

    }
    const onNameChange = (e) => {
        let value = e.currentTarget.value
        
        setName(value)
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


            }}
        >
            <Form.Item name={"productCategory"} label={intl.get("productCategory")}  >
                <Select
                    style={{ width: 240 }}
                    placeholder="Select a Category"
                    dropdownRender={menu => (
                        <div>
                            <div className={classes.selectCategoryDividerContainer}  >
                                <Divider className={classes.selectCategoryDivider}>Existing</Divider>
                            </div>
                            {menu}
                            <div className={classes.selectCategoryDividerContainer}  >
                                <Divider className={classes.selectCategoryDivider}>Or</Divider>
                            </div>
                            <Input placeholder="New Category" style={{ flex: 'auto' }} value={name} onChange={onNameChange} />
                            <a
                                style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }}
                                onClick={addItem}
                            >
                                <PlusOutlined /> Confirm
              </a>

                        </div>
                    )}
                >

                    {categoryInfo.map(info => {
                        
                        return (
                            <Option key={info.name} className={classes.createProductFormOption}>
                               <span style={{paddingRight:"5px"}}> {info.name}</span>
                                {info.temporary ?
                                    <Tag style={{paddingLeft:"5px"}}>
                                        temporary
                                        <Tooltip title="This category is not saved to the database yet, proceed to the end in order to save it">
                                            <QuestionCircleOutlined style={{paddingLeft:"5px", cursor:"pointer"}} />
                                        </Tooltip>

                                    </Tag>
                                    : null}

                            </Option>
                        )
                    }

                    )

                    }
                </Select>
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
