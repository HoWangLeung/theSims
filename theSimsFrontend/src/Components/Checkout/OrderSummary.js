import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux';

function Ordersummary(props) {





    const listOrderedProduct = () => {

        return props.orderInfo.orderProductList && props.orderInfo.orderProductList.map(items => {
            return (
                <>

                    <p>{items.product.productName} {" x "}{items.quantity}</p>
                </>
            )
        })
    }
    return (
        <div>
            <p>Product Name : </p>
            {listOrderedProduct()}


            <p>subTotal : {props.orderInfo.total} </p>
            <p>Discount : </p>
            <p>Total : {props.orderInfo.total}</p>

        </div>
    )
}

Ordersummary.propTypes = {

}

export default Ordersummary
