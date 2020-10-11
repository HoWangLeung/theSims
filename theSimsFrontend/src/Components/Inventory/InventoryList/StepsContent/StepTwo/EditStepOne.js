import React, { Component } from 'react'
import QueueAnim from 'rc-queue-anim';
import { List, Typography, Divider } from 'antd';

class EditStepOne extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    getSelecteditems = () => {
        const { content } = this.props
        return content.map((e, i) => {
            return (

                <div key={i}>
                    <List
                    bordered={true}
                    size="small"
                    
                    >
                        <List.Item  >
                            {e.productName}
                        </List.Item>
                    </List>
                </div >

            )

        })
    }

    render() {


        return (
            <div>
                <h3>You have Selected:</h3>
                <QueueAnim forcedReplay={true} leaveReverse={true} delay={200} interval={200} >

                    {this.getSelecteditems()}
                </QueueAnim>
            </div>
        )
    }
}

export default EditStepOne
