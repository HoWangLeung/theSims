import React, { Component } from 'react'
import DataBoxes from './DataBoxes'
import classes from './Inventory.less'
class Inventory extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div className={classes.inventoryContainer} >
                <DataBoxes/>
            </div>
        )
    }
}

export default Inventory
