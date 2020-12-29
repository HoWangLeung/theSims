import React, { useState, useEffect, useRef } from 'react';
import { Form, Input, Button, Space, Select, Row, Divider, Tag, Tooltip, Col } from 'antd';
import { DeleteFilled, MinusCircleOutlined, MinusSquareOutlined, PlusOutlined, PlusSquareOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import intl from 'react-intl-universal';
import { Collapse, message, Upload } from 'antd';
import { values } from 'lodash';
import CommonModal from '../../../../../../Common/ConfirmModal/CommonModal';
import { returnInfoMessage, returnMessage } from '../../../../../../Common/utilities/helpers';
import { nextPage, fetchCategoryInfo, addTempItemToCategoryInfo, setUploadedProductUrl } from '../../../../action/InventoryAction';
import { useDispatch, useSelector } from 'react-redux'
import classes from '../../../../Inventory.less';
import Imageuploader from './ImageUploader';
import { storage } from './UploadIndex'
import { CheckCircleFilled, UploadOutlined } from '@ant-design/icons';
import ImgCrop from 'antd-img-crop';
import Text from 'antd/lib/typography/Text';
const { Panel } = Collapse;
const { Option } = Select;

function Createproductform() {

    const formItemLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 18 },
    };
    const formItemLayoutCategory = {
        labelCol: { span: 7 },
        wrapperCol: { span: 48 },
    };


    const [fileList, setFileList] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
    const [inputValues, setInputValues] = useState([])

    //form







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

        console.log(values, " success");
        dispatch(nextPage(values, 'createProduct'))
    };
    const onFinishFailed = ({ values, errorFields, outOfDate }) => {
        console.log(values, 'failed');
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
    const handleInputChange = (e) => {
        console.log(e.currentTarget);
        let value = e.currentTarget.value
        let id = e.currentTarget.id
        console.log(id);
        console.log(value);
        console.log(form.getFieldsValue().createProduct);
        let values = form.getFieldsValue().createProduct
        setInputValues(values)



    }

    const addItem = (e) => {

        let payload = {
            name
        }

        if (name != "") {
            dispatch(addTempItemToCategoryInfo(payload))
            message.success({
                content: "Added a temporary Category",
                // className: 
                style: {
                    marginTop: '18vh',
                },
            })
        }


    }
    const onNameChange = (e) => {
        let value = e.currentTarget.value

        setName(value)
    }

    const normFile = (e) => {


        return e && e.fileList;
    }
    ///////====================
    const handleUpload = (options) => {
        const { onSuccess, onError, file, onProgress } = options;

        setUploading(true)


        const uploadTask = storage.ref(`images/products/${file.name}_${file.uid}`).put(file);
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );


                setProgress(progress);

            },
            error => {
                console.log(error);
            },
            () => {

                storage
                    .ref("images/products/")
                    .child(`${file.name}_${file.uid}`)
                    .getDownloadURL()
                    .then(result => {

                        setUrl(result);




                        setUploading(false)

                        onSuccess("OK", result)
                        // dispatch(setUploadedProductUrl(result))

                    })
                    .catch(e => { console.log(e); })
            }
        );

    };
    const handleOnChange = (info) => {
        const { fileList: newFileList } = info
        console.log("newFileList, ", newFileList);
        setFileList(newFileList);
    };
    const Uprops = {
        beforeUpload: file => {
            setFileList(state => [...state, file])
            return true;
        },
        fileList,
    };
    const onPreview = async file => {
        let src = file.url;
        if (!src) {
            src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow.document.write(image.outerHTML);
    };

    const getPanelHeader = (index) => {
        console.log(inputValues);
        console.log(index);
        
        return (<>
            <Text strong>
                {intl.get(`inventory.newProduct`)}
            </Text>
            <span>{` : `}</span>

            { inputValues[index] && inputValues[index].productName ? <Tag color="green">{inputValues[index].productName}</Tag>
            :null}
        </>)
    }

    return (
        <Form
            className={classes.createproductForm}
            labelAlign="left"
            id="createproductForm"
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            onFieldsChange={(changedFields, allFields) => {

            }}
            onValuesChange={(changedFields, allFields) => {

            }}
            validateTrigger={'onChange'}
        >
            <Form.Item

                // {...formItemLayoutCategory}
                name={"productCategory"}
                label={<Text strong>{intl.get("productCategory")}</Text>}
                rules={[
                    {
                        required: true,
                        message: 'This field is mandatory.',
                    }

                ]}

            >
                <Select
                    className={classes.categorySelect}
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
                                <span style={{ paddingRight: "5px" }}> {info.name}</span>
                                {info.temporary ?
                                    <Tag style={{ paddingLeft: "5px" }}>
                                        temporary
                                        <Tooltip title="This category is not saved to the database yet, proceed to the end in order to save it">
                                            <QuestionCircleOutlined style={{ paddingLeft: "5px", cursor: "pointer" }} />
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
                                const fieldNames = ['productName', 'countryOrigin', 'cost', 'basePrice', 'remaining', 'productUrl']
                                return (
                                    <Collapse
                                        key={field.name}
                                        bordered={false}
                                        expandIcon={({ isActive }) => isActive ? <MinusSquareOutlined /> : <PlusSquareOutlined />}
                                        // defaultActiveKey="0"
                                        onChange={handleCollapseKeyChange}
                                    >
                                        <Panel
                                            className={classes.createProductPanel}
                                            key={field.name}
                                            header={getPanelHeader(index)}
                                            forceRender={true}
                                            extra={
                                                <Row>
                                                    {form.getFieldValue("createProduct")[index].anyMissingField
                                                        && <p style={{ margin: "0", color: "red" }}>One or More Field(s) Missing</p>}
                                                    <DeleteFilled id={field.name} style={{ fontSize: "150%" }} onClick={(e) => handleDelete(e, remove, field)} />
                                                </Row>
                                            }>
                                            <Row >
                                                <Col span={24} >
                                                    {fieldNames.map((fieldName, index) => {
                                                        if (fieldName === 'productUrl') {
                                                            return (

                                                                <Form.Item
                                                                    required={true}
                                                                    {...formItemLayout}
                                                                    key={index}
                                                                    label={intl.get(`inventory.${fieldName}`)}
                                                                    name={[field.name, fieldName]}
                                                                    fieldKey={[field.fieldKey, index]}
                                                                    valuePropName="fileList"
                                                                    getValueFromEvent={normFile}

                                                                    rules={[

                                                                        // ({ getFieldValue }) => ({
                                                                        //     validator(rule, value) {

                                                                        //         if (!value) {
                                                                        //             return Promise.reject('Please proivde an image for the product');
                                                                        //         }
                                                                        //         return Promise.resolve();
                                                                        //     },
                                                                        // })
                                                                    ]



                                                                    }
                                                                >

                                                                    <Upload

                                                                        onPreview={onPreview}
                                                                        onChange={handleOnChange}
                                                                        listType="picture-card"

                                                                        progress={
                                                                            {
                                                                                format: (percent) => {


                                                                                    return progress < 100 ? progress + "%" : <CheckCircleFilled />
                                                                                },
                                                                                percent: progress,
                                                                                // showInfo:true,
                                                                                type: "line",
                                                                                success: { percent: progress }
                                                                            }
                                                                        }
                                                                        customRequest={handleUpload}
                                                                        {...Uprops}>
                                                                        {fileList.length < 5 && '+ Upload'}
                                                                    </Upload>

                                                                </Form.Item>

                                                            )


                                                        } else {

                                                            return (<Form.Item
                                                                {...formItemLayout}
                                                                key={index}
                                                                label={intl.get(`inventory.${fieldName}`)}
                                                                name={[field.name, fieldName]}
                                                                fieldKey={[field.fieldKey, index]}
                                                                rules={[
                                                                    {
                                                                        required: true,
                                                                        message: 'This field is mandatory.',
                                                                    }

                                                                ]}

                                                            //   getValueFromEvent={normFile}
                                                            >
                                                                <Input id={index} onChange={handleInputChange} />
                                                            </Form.Item>)
                                                        }

                                                    }



                                                    )
                                                    }
                                                </Col>
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
        </Form >
    );
};
export default Createproductform
