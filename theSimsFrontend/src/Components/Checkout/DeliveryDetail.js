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

import {
    CardElement,
    Elements,
    useElements,
    useStripe
} from '@stripe/react-stripe-js';
import { submitPayment } from './action/CheckoutAction';
import Mycheckoutform from './Payment/MyCheckoutForm';
import Text from 'antd/lib/typography/Text';
function Deliverydetail(props) {

    const [error, setError] = useState(null);
    const stripe = useStripe();
    const elements = useElements();

    const dispatch = useDispatch();
    const [radioValue, setRadioValue] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [address, setAddress] = useState('')
    const orderInfo = useSelector(state => state.ProductReducer.cartList);
    const cartListItem = orderInfo.orderProductList




    const handleRadioChange = (e) => {

        setRadioValue(e.target.value)
    }

    const onFinish = async (values) => {
        console.log(values);
        // values.firstname= firstname
        // values.lastname= lastname
        // values.address= address
        let payload = {
            values: {
                orderId: orderInfo.id,
                status: "confirmed",
                firstname,
                lastname,
                address
            }
        }

        const { cardInfo } = values




        CommonModal.confirm({
            content: "Are you sure",
            okText: intl.get('confirm'),
            centered: true,
            maskClosable: false,
            // okButtonProps: { loading: this.props.isLoading },
            keyboard: false,
            margin: 0,
            onOk: async () => {

                const card = elements.getElement(CardElement);
                const result = await stripe.createToken(card);
                let cardPayload = { token: result.token.id }
                await dispatch(submitPayment(cardPayload))
                await dispatch(changeOrderStatus(payload))
                await dispatch(fetchProductsInCart())
                props.history.push("/checkout-success")




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
        // if (radioValue === "payme") {
        //     return (<>
        //         <Divider > Method Two </Divider>
        //         <div className={classes.paymentMethod}>
        //             <p>Link to my Payme : <a href="https://payme.hsbc.com.hk/zh-hk/personal">https://payme.hsbc.com.hk/zh-hk/personal</a></p>

        //         </div>
        //     </>
        //     )
        // }
        // if (radioValue === "creditCard") {
        //     return <>
        //         <Divider > Method Three </Divider>
        //         <div className={classes.paymentMethod}>creditCard</div>
        //     </>
        // }

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

    const onSelectAddress = (address) => {

        setAddress(address)
    }
    return (
        <div 
        // className={classes.deliverydetailContainer}
        >

            <h3>Delivery Detail</h3>
            <Divider />
            <Form
                labelCol={{ span: 3 }}
                wrapperCol={{ span: 17 }}
                layout="horizontal"
                onFinish={onFinish}
                name="submitCheckout"
                labelAlign="left"
            >

                <Form.Item label={<Text strong>Names</Text>} className={classes.paymentFormItem}>
                    <Input.Group >
                        <Row gutter={8}>
                            <Col span={12}>
                                <Input size="large" value={firstname} onChange={handleFirstNameChange} name="firstName" placeholder="First Name" />
                            </Col>
                            <Col span={12}>
                                <Input size="large" value={lastname} onChange={handleLastNameChange} name="lastName" placeholder="Last Name" />
                            </Col>
                        </Row>
                    </Input.Group>
                </Form.Item>
                <Form.Item name="phone" label={<Text strong>Phone</Text>} className={classes.paymentFormItem}>
                    <Input size="large" placeholder="e.g. 12345678" />
                </Form.Item>


                <Form.Item label={<Text strong>Building</Text>} className={classes.paymentFormItem}>
                    <LocationSearchInput onSelectAddress={onSelectAddress} />
                </Form.Item>

                <Form.Item name="block" label={<Text strong>Block</Text>} className={classes.paymentFormItem}>
                    <Input size="large" placeholder="e.g. Block A" />
                </Form.Item>
                <Form.Item name="floor" label={<Text strong>Floor</Text>} className={classes.paymentFormItem}>
                    <Input size="large" placeholder="e.g. 20/F " />
                </Form.Item>

                <Form.Item size="large" name="flat" label={<Text strong>Flat</Text>} className={classes.paymentFormItem}>
                    <Input size="large" placeholder="Flat A" />
                </Form.Item>


                <Mycheckoutform />

                <Form.Item className={classes.purhcaseButtonContainer} >

                    <Button size="large" type="primary" form="submitCheckout" htmlType="submit" >PAY</Button>

                </Form.Item>

            </Form>


        </div>


    )
}

Deliverydetail.propTypes = {

}

export default withRouter(Deliverydetail)
