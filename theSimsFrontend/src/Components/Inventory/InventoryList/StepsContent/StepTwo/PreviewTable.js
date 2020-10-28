import React, { Component } from 'react'
import { Table } from 'antd';
import { GetPreviewTableHeader } from '../../GetHeader';

class PreviewTable extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidUpdate() {

    }

    handleInputChange=e=>{
        const {handleInputChange} = this.props
        handleInputChange(e)
    }

    getColumns = () => {
        const { previewList, addToAllValue } = this.props
        const callbacks =  {
            handleInputChange:this.handleInputChange
        }

        return GetPreviewTableHeader(callbacks)
    }

    handleChange = () => {
        
    }

    handleSubmission = (currentData) => {
        const { inventoryList, addToAllValue } = this.props




    }

    render() {
        const { previewList } = this.props
        const columns = this.getColumns()

        return (
            <div>
                <Table
                    columns={columns}
                    dataSource={previewList}
                    size="small"
                    scroll={{ y: 150 }}
                    onChange={this.handleChange}
                    summary={this.handleSubmission}
                />
            </div>
        )
    }
}

export default PreviewTable
