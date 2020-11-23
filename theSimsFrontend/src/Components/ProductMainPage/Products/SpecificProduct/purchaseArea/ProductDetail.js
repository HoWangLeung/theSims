import React from 'react'
import PropTypes from 'prop-types'
import { Button, InputNumber, Row } from 'antd'
import CommonModal from '../../../../../Common/ConfirmModal/CommonModal';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthenticationService from '../../../../Authentication/SignUp/AuthenticationService';
import intl from 'react-intl-universal';
import { Redirect, withRouter } from 'react-router-dom';
import { addToCart } from '../../../actions/productActions';


function Productdetail(props) {
    const { product } = props
    const dispatch = useDispatch();
    const[quantity, setQuantity] =useState(1)
    const user = useSelector(state =>state.AuthenticationReducer.userProfile);
    const[currentUser , setCurrentUser] = useState(user)
    
    
    function onChange(value) {
        
        setQuantity(value)
    }

    const askForLogin=()=> (
        CommonModal.warning({
            content: "Please Login first",
            okText: "Redirect",
            centered: true,
            maskClosable: false,
            // okButtonProps: { loading: this.props.isLoading },
            keyboard: false,
            margin: 0,
            onOk:  () => {
                props.history.push("/login")
            }
        })
    )

    const handleClick = () => {
     
        let isLoggedIn = AuthenticationService.isUserLoggedIn()
        if(!isLoggedIn) askForLogin()


        let payload={
            userId: parseInt(sessionStorage.getItem('userId')),
            quantity,
            productId:product.id,
            status:"pending"   
        }

        
        dispatch(addToCart(payload))
        
    }
    return (
        <div>
            <h2> {product.productName}</h2>
            <p>Price: {product.basePrice}</p>
            <InputNumber size="large" min={1} max={100000} defaultValue={quantity} onChange={onChange} />
            <Button onClick={handleClick}>Confirm</Button>
        </div>
    )
}

Productdetail.propTypes = {

}

export default withRouter(Productdetail)
