import React, { useState } from 'react'
import PropTypes from 'prop-types'
import PlacesAutocomplete from 'react-places-autocomplete';
import {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
} from 'react-places-autocomplete';
import classes from './Checkout.less'

import {
    Form,
    Input,
    Button,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
    Radio,
    Divider,
    Row,
    Col,

} from 'antd';
import LocationSearchInput from './LocationSearchInput ';
import CommonModal from '../../Common/ConfirmModal/CommonModal';
import intl from 'react-intl-universal';
import { useDispatch, useSelector } from 'react-redux';
import { changeOrderStatus, fetchProductsInCart } from '../ProductMainPage/actions/productActions';
import { withRouter } from 'react-router-dom';

function Deliverydetail(props) {

    const dispatch = useDispatch();
    const [radioValue, setRadioValue] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const[address,setAddress] = useState('')
    const orderInfo = useSelector(state => state.ProductReducer.cartList);
    const cartListItem = orderInfo.orderProductList
    

    const handleRadioChange = (e) => {
        
        setRadioValue(e.target.value)
    }

    const onFinish = (values) => {
        // values.firstname= firstname
        // values.lastname= lastname
        // values.address= address
        let payload = {
                 values:{
                    orderId:orderInfo.id,
                    status:"confirmed",
                    firstname,
                    lastname,
                    address
                 }
        }
  
        CommonModal.confirm({   
            content: "Are you sure",
            okText: intl.get('confirm'),
            centered: true,
            maskClosable: false,
            // okButtonProps: { loading: this.props.isLoading },
            keyboard: false,
            margin: 0,
            onOk: async () => {
                
                dispatch(changeOrderStatus(payload))
                .then(res=>{
                    dispatch(fetchProductsInCart())
                })
                .then(()=>{
                        props.history.push("/checkout-success")
                })

            }
        })
    }

    const renderPaymentInfo = () => {
        if (radioValue === "bankTransfer") {
            return (
                <>
                    <Divider > Method One </Divider>
                    <div className={classes.paymentMethod}>
                        <p>Bank : ABC Bank</p>
                        <p>Account Holder : Leung Ho Wang</p>
                        <p>Account: 123-123123-123</p>
                    </div>
                </>
            )
        }
        if (radioValue === "payme") {
            return (<>
                <Divider > Method Two </Divider>
                <div className={classes.paymentMethod}>
                    <p>Link to my Payme : <a href="https://payme.hsbc.com.hk/zh-hk/personal">https://payme.hsbc.com.hk/zh-hk/personal</a></p>

                </div>
            </>
            )
        }
        if (radioValue === "creditCard") {
            return <>
                <Divider > Method Three </Divider>
                <div className={classes.paymentMethod}>creditCard</div>
            </>
        }

    }

    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
    };

    const handleFirstNameChange = e => {
        setFirstname(e.currentTarget.value)
    }

    const handleLastNameChange = e => {
        setLastname(e.currentTarget.value)
    }

    const onSelectAddress=(address)=>{
        
        setAddress(address)
    }
    return (
        <div className={classes.deliverydetailContainer}>

            <h3>Delivery Detail</h3>
            <Divider > Address </Divider>
            <Form
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 12 }}
                layout="horizontal"
                onFinish={onFinish}
            >

                <Form.Item label="Names">
                    <Input.Group >
                        <Row gutter={8}>
                            <Col span={12}>
                                <Input  value={firstname} onChange={handleFirstNameChange} name="firstName" placeholder="First Name" />
                            </Col>
                            <Col span={12}>
                                <Input value={lastname} onChange={handleLastNameChange} name="lastName" placeholder="Last Name" />
                            </Col>
                        </Row>
                    </Input.Group>
                </Form.Item>
                <Form.Item name="phone" label="Phone">
                    <Input  placeholder="e.g. 12345678" />
                </Form.Item>


                <Form.Item label="Building">
                    <LocationSearchInput onSelectAddress={onSelectAddress} />
                </Form.Item>

                <Form.Item name="block" label="Block">
                    <Input placeholder="e.g. Block A" />
                </Form.Item>
                <Form.Item name="floor" label="Floor">
                    <Input placeholder="e.g. 20/F " />
                </Form.Item>

                <Form.Item name="flat" label="Flat">
                    <Input placeholder="Flat A" />
                </Form.Item>


                <Form.Item name="remark" label="Remark (If Applicable)">
                    <Input  placeholder="Special Instruction" />
                </Form.Item >

                <Divider >Payment Method</Divider>
                <Form.Item name="paymentMethod" label="Payment">
                    <Radio.Group  onChange={handleRadioChange} value={radioValue}>
                        <Radio style={radioStyle} value={'bankTransfer'}>
                            Bank Transfer
        </Radio>
                        <Radio style={radioStyle} value={'payme'}>
                            Payme
        </Radio>
                        <Radio style={radioStyle} value={'creditCard'}>
                            Credit Card
        </Radio>

                    </Radio.Group>
                </Form.Item>

                {renderPaymentInfo()}

                <Form.Item className={classes.purhcaseButtonContainer} >

                    <Button htmlType="submit" >Purchase</Button>

                </Form.Item>

            </Form>


        </div>


    )
}

Deliverydetail.propTypes = {

}

export default withRouter(Deliverydetail)
