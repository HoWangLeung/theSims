import React, { Component } from 'react'
import { Steps, Button, message } from 'antd';
import EditMultiple from './EditMultiple';
import classes from '../Inventory.less'
import EditStepTwo from './StepsContent/StepTwo/EditStepTwo';
const { Step } = Steps;


class EditMultipleSteps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        };
    }

    next=()=> {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }


    handleQuantityUpdate=()=>{
        
        console.log('line 30');
    }

    render() {
        const { current } = this.state
        const {inventoryList} = this.props
        const steps = [
            {
                title: 'Selected',
                content: <EditMultiple  content ={this.props.content} />,
            },
            {
                title: 'Edit & Preview',
                content: <EditStepTwo
                 inventoryList={inventoryList}
                 handleQuantityUpdate={this.handleQuantityUpdate}
                 />,
            },
        
        ];
    
        return (
            <>
                <Steps current={current}>
                    {steps.map(item => (
                        <Step key={item.title} title={item.title} />
                    ))}
                </Steps>
                <div className={classes.stepsContent}>{steps[current].content}</div>
                <div className="steps-action">
                   
                  
                    {current > 0 && (
                        <Button style={{ margin: '0 8px' }} onClick={() => this.prev()}>
                            Previous
                        </Button>
                    )}
                     {current < steps.length - 1 && (
                        <Button type="primary" onClick={this.next}>
                            Next
                        </Button>
                    )}
                      {current === steps.length - 1 && (
                        <Button type="primary" onClick={this.handleQuantityUpdate}>
                            Confirm
                        </Button>
                    )}
                </div>
            </>
        );
    }
}

export default EditMultipleSteps
