import React, { Component, useEffect } from 'react'
import DataBoxes from './DataBoxes'
import classes from './Inventory.less'
import InventoryList from './InventoryList/InventoryList'
import intl from 'react-intl-universal';
import { fetchInventory } from './action/InventoryAction';
import { connect, useDispatch, useSelector } from 'react-redux';
import QueueAnim from 'rc-queue-anim';
import CommonButton from '../../Common/CommonButton/CommonButton';
import { createLoadingSelector } from '../../reducers/api/selectors';
import { fetchProductsInCart } from '../ProductMainPage/actions/productActions';
import { motion } from 'framer-motion';
import Banner from '../../Common/Banner';
import Navigationmenu from '../../Common/NavigationMenu/NavigationMenu';
import { withRouter } from 'react-router-dom';
import { getAllConfirmedOrders } from '../Payment/action/PaymentAction';

function Inventory(props) {


    const inventoryList = useSelector(state => state.InventoryReducer.inventoryList)
    const confirmedOrders = useSelector(state => state.PaymentReducer.confirmedOrders);
    
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(fetchInventory())
        dispatch(fetchProductsInCart())
        dispatch(getAllConfirmedOrders())
    }, [])


    const variants = {
        hidden: {
            opacity: 0

        },
        visible: {
            opacity: 1,
            transition: {
                duration: .5
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: .5
            }
        }


    }
   
    return (

        <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={classes.inventoryContainer}
        >

            <Banner />
            <Navigationmenu />
            <DataBoxes confirmedOrders={confirmedOrders}/>

            <InventoryList

                inventoryList={inventoryList}
            />



        </motion.div>


    )
}

export default withRouter(Inventory)