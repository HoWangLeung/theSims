import React, { Component } from 'react'
import DataBoxes from './DataBoxes'
import classes from './Inventory.less'
import InventoryList from './InventoryList/InventoryList'
import intl from 'react-intl-universal';
import { fetchInventory } from './action/InventoryAction';
import { connect } from 'react-redux';
class Inventory extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    componentDidMount(){
        this.props.fetchInventory()
    }

    render() {
        return (
            <div className={classes.inventoryContainer} >
                <DataBoxes/>
                <InventoryList/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {


    return {
    
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchInventory: () => { dispatch(fetchInventory()) }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Inventory)
