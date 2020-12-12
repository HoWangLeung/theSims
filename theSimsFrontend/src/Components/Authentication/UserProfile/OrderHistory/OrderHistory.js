import { Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUserOrderHistory, getUserOrderHistoryInvoice } from '../../actions/AuthenticationActions';
import { getPreviewTableHeader } from './GetOrderHistoryHeader';

function Orderhistory(props) {


    const orderHistory = useSelector(state => state.AuthenticationReducer.orderHistory);
    const { confirmedOrder } = orderHistory
    const isFecting = useSelector(state => state.LoadingReducer);
    const [onClickId, setOnClickId] = useState();
    //const invoicePdfUrl  = useSelector(state => state.AuthenticationReducer.invoicePdfUrl);
   
    
    // useEffect(() => {


    //     return () => {
    //         
    //     }
    // }, [invoicePdfUrl])


    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(getUserOrderHistory({ userId: sessionStorage.getItem("userId") }))
        return () => {
            
        }
    }, [])

    const handlePdfExport = (e) => {
        let orderId = e.currentTarget.id
        setOnClickId(orderId)
        dispatch(getUserOrderHistoryInvoice({ userId: sessionStorage.getItem("userId"), orderId }))
            .then(res => {
                
                const url = window.URL.createObjectURL(new Blob([res.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'invoice.pdf'); //or any other extension
                document.body.appendChild(link);
                link.click();
               
            })

    }

    const action = {
        handlePdfExport: handlePdfExport,
        isFecting,
        onClickId
        // invoicePdfUrl:invoicePdfUrl
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