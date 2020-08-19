import React, { Component } from 'react'
import { Modal, Button } from 'antd';

class CommonModal extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {
        return (
            <div>
                <Modal
                    title="Basic Modal"
                    visible={this.props.visible}
                    onOk={this.props.hideModal}
                    onCancel={this.props.hideModal}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        )
    }
}

export default CommonModal
