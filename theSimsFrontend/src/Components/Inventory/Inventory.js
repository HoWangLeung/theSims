import React, { Component } from 'react'
import DataBoxes from './DataBoxes'
import classes from './Inventory.less'
import InventoryList from './InventoryList/InventoryList'
import intl from 'react-intl-universal';
import { fetchInventory } from './action/InventoryAction';
import { connect } from 'react-redux';
import QueueAnim from 'rc-queue-anim';
import CommonButton from '../../Common/CommonButton/CommonButton';
class Inventory extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {
        this.props.fetchInventory()
    }

    render() {
        const { isLoading, inventoryList } = this.props
        return (
            <div className={classes.inventoryContainer} >
                <QueueAnim type="top" duration={1500}  >
                    <DataBoxes key="demo1"  />
                </QueueAnim>
                <QueueAnim type="bottom" duration={1500}>
                    <InventoryList
                        key="demo2"
                        isLoading={isLoading}
                        inventoryList={inventoryList}
                    />
                </QueueAnim>
            </div>
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
        fetchInventory: () => { dispatch(fetchInventory()) }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Inventory)
