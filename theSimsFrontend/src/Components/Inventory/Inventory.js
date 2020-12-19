import React, { Component } from 'react'
import DataBoxes from './DataBoxes'
import classes from './Inventory.less'
import InventoryList from './InventoryList/InventoryList'
import intl from 'react-intl-universal';
import { fetchInventory } from './action/InventoryAction';
import { connect } from 'react-redux';
import QueueAnim from 'rc-queue-anim';
import CommonButton from '../../Common/CommonButton/CommonButton';
import { createLoadingSelector } from '../../reducers/api/selectors';
import { fetchProductsInCart } from '../ProductMainPage/actions/productActions';
import { motion } from 'framer-motion';
import Banner from '../../Common/Banner';
import Navigationmenu from '../../Common/NavigationMenu/NavigationMenu';

class Inventory extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {
        const { fetchInventory, fetchProductsInCart } = this.props
        fetchInventory()
        fetchProductsInCart()
    }

    render() {
        const { isLoading, inventoryList } = this.props
        const variants = {
            hidden: {
                opacity: 0

            },
            visible: {
                opacity: 1,
                transition: {
                    duration: 1
                }
            },
            exit: {
                opacity: 0,
                transition: {
                    duration: 1
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
                <div>
                    <Banner />
                    <Navigationmenu />
                    <DataBoxes />

                    <InventoryList

                        inventoryList={inventoryList}
                    />

                </div>

            </motion.div>
        )
    }
}

const mapStateToProps = (state) => {


    return {
        isLoading: state.InventoryReducer.loading,
        inventoryList: state.InventoryReducer.inventoryList,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchInventory: () => dispatch(fetchInventory()),
        fetchProductsInCart: () => dispatch(fetchProductsInCart())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Inventory)
