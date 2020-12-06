import React from 'react'
import PropTypes from 'prop-types'
import { Button, Divider, Input, InputNumber, Row, Select } from 'antd'
import CommonModal from '../../../../../Common/ConfirmModal/CommonModal';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthenticationService from '../../../../Authentication/SignUp/AuthenticationService';
import intl from 'react-intl-universal';
import { Redirect, withRouter } from 'react-router-dom';
import { addToCart } from '../../../actions/productActions';
import classes from '../SpecificProduct.less'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons'
const { Option } = Select;
function Productdetail(props) {
    const { product } = props
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1)
    const user = useSelector(state => state.AuthenticationReducer.userProfile);
    const isFetching = useSelector(state => state.LoadingReducer);

    const [currentUser, setCurrentUser] = useState(user)


    function handleChange(value) {

        setQuantity(value)
    }

    const askForLogin = () => (
        CommonModal.warning({
            content: "Please Login first",
            okText: "Redirect",
            centered: true,
            maskClosable: false,
            // okButtonProps: { loading: this.props.isLoading },
            keyboard: false,
            margin: 0,
            onOk: () => {
                props.history.push("/login")
            }
        })
    )

    const handleClick = () => {

        let isLoggedIn = AuthenticationService.isUserLoggedIn()
        if (!isLoggedIn) {
            askForLogin()
        } else {
            let payload = {
                userId: parseInt(sessionStorage.getItem('userId')),
                quantity,
                productId: product.id,
                status: "pending"
            }


            dispatch(addToCart(payload))
                .then(res => {
                    CommonModal.success({
                        content: "Successfully Added"
                    })
                })
        }

    }

    const renderNumberOptions = () => {

        const options = Array.from(Array(101).keys()).filter(f=>f!=0).map(e => <Option value={e}>{e}</Option>)

        return options
    }

    
    return (
        <div className={classes.productdetailContainer_inner} >
            <div>
                <h1> {product.productName}</h1>
                
                <h3>Availability: In Stock</h3>
                <Divider />
                <h2>$ {product.basePrice}</h2>
            </div>
            <div>
                <h2>Description</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software l
                   ike Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
       
            <div>
                <h2>Quantity</h2>
                <Select defaultValue={1} size="large" className={classes.productDetailSelect} onChange={handleChange}>
                    {renderNumberOptions()}
                </Select>
            </div>



            <Row justify='center'>
                <Button
                    loading={isFetching["ADD_TO_CART"]}
                    onClick={handleClick}
                    className={classes.addToCartButton}
                >
                    Confirm
             </Button>
            </Row>
            <Divider />
            <Row>
                <FontAwesomeIcon icon={faTruck} />
                <p>Free HK shipping over $999999999 and easy returns. Learn more.</p>
            </Row>
        </div>
    )
}

Productdetail.propTypes = {

}

export default withRouter(Productdetail)
