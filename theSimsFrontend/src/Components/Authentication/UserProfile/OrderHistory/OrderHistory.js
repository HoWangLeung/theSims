import { Table } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUserOrderHistory, getUserOrderHistoryInvoice } from '../../actions/AuthenticationActions';
import { getPreviewTableHeader } from './GetOrderHistoryHeader';

 function Orderhistory(props) {

 
    const orderHistory = useSelector(state => state.AuthenticationReducer.orderHistory);
    const {confirmedOrder} = orderHistory
    const invoicePdfUrl  = useSelector(state => state.AuthenticationReducer.invoicePdfUrl);
    console.log(invoicePdfUrl);
    useEffect(() => {

   
        return () => {
            console.log('clean up', invoicePdfUrl);
        }
    }, [invoicePdfUrl])


    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(getUserOrderHistory({ userId: sessionStorage.getItem("userId") }))
        return () => {
            console.log('clean up', orderHistory);
        }
    }, [])

    const handlePdfExport=()=>{
        dispatch(getUserOrderHistoryInvoice({ userId: sessionStorage.getItem("userId") }))
     
    }

    const action = {
        handlePdfExport: handlePdfExport,
        invoicePdfUrl:invoicePdfUrl
    }
    return (
        <>
            <Table

            columns={getPreviewTableHeader(action)}
            dataSource={confirmedOrder}
            
            
            
            />
        </>
    )
}
export default withRouter(Orderhistory)