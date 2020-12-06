import React, { Component } from 'react'

import { List, Typography, Divider } from 'antd';
import Selectedlist from './SelectedList/SelectedList';
import Createproduct from './CreateProduct/Createproduct';

class EditStepOne extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    renderStepOne = () => {
        const { content,selectedRows } = this.props
        
        if (content === "createProduct")
            return <Createproduct />
        if (content === "editMultiple"){  
            return(<>  <h3>You have Selected:</h3>
                <Selectedlist key="selectedList" content={selectedRows} /></>)
          
        }
          
    }
    render() {


        return (
            <div>
          
               

                    {this.renderStepOne()}
          
            </div>
        )
    }
}

export default EditStepOne
