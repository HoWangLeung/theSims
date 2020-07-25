import React, { Component } from 'react'
import { Steps, Button, message } from 'antd';
import classes from '../DigitalQrCodeMenu.less'
import CreateTemplate from '../CreateTemplate/CreateTemplate'
const { Step } = Steps;

const steps = [
    {
        title: 'Select a Template',
        content: 'First-content',
    },
    {
        title: 'Create Your Template',
        content: <CreateTemplate/>,
    },
    {
        title: 'Preview And Generate',
        content: 'Last-content',
    },
];

class GettingStarted extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        };
    }

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }


    getSteppedMenuCreator = () => {
        const { current } = this.state;
        return (<><Steps current={current}>
            {steps.map(item => (
                <Step key={item.title} title={item.title} />
            ))}
        </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">


                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => this.prev()}>
                        Previous
                    </Button>
                )}
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => this.next()}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                )}
            </div></>)
    }

    render() {

        const SteppedMenuCreator = this.getSteppedMenuCreator()
        return (
            <div className={classes.SteppedMenuCreatorContainer}>
                {SteppedMenuCreator}
            </div>
        );
    }
}

export default GettingStarted
