import React, { Component } from 'react'
import QueueAnim from 'rc-queue-anim';
class EditMultiple extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    getSelecteditems = () => {
        const { content } = this.props
        return content.map((item, index) => {
            return (
           
                    <div key={index}>
                        {index+1} . {item.productName}
                    </div>
         
            )
        })
    }

    render() {


        return (
            <div>
                <h3>You have Selected:</h3>
                <QueueAnim  leaveReverse={true} delay={500} interval={200} >
                {this.getSelecteditems()}
                </QueueAnim>
            </div>
        )
    }
}

export default EditMultiple
