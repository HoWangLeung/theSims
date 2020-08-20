import React, { Component } from 'react'
import { Steps, Button, message } from 'antd';
import EditMultiple from './EditMultiple';

const { Step } = Steps;


class EditMultipleSteps extends Component {
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

    render() {
        const steps = [
            {
                title: 'Selected',
                content: <EditMultiple content ={this.props.content} />,
            },
            {
                title: 'Edit',
                content: 'Second-content',
            },
            {
                title: 'Preview',
                content: 'Last-content',
            },
        ];
        const { current } = this.state;
        return (
            <>
                <Steps current={current}>
                    {steps.map(item => (
                        <Step key={item.title} title={item.title} />
                    ))}
                </Steps>
                <div className="steps-content">{steps[current].content}</div>
                <div className="steps-action">
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
                    {current > 0 && (
                        <Button style={{ margin: '0 8px' }} onClick={() => this.prev()}>
                            Previous
                        </Button>
                    )}
                </div>
            </>
        );
    }
}

export default EditMultipleSteps
