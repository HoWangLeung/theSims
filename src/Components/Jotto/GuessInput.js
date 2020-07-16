import React, { Component } from 'react'
import { Input, Row, Col, Form, Button, Checkbox, Spin } from 'antd'
import RandomWordService from './api/RandomWordService';
import { connect } from 'react-redux'
import { addGuessedWord, retrieveSecetWord } from './actions/JottoAction';


class GuessInput extends Component {
    constructor(props) {
        super(props)

        this.state = {
            secretWord: '',
            guessedWord: '',
            isLoading: true
        }
    }

    onFinish = values => {
        let commonWordLength = 0;
        let guessedWord = values.input

        this.setState({ guessedWord })
        const { secretWord } = this.props
        for (let i = 0; i < secretWord.length; i++) {
            if (secretWord.charAt(i) === this.state.guessedWord.charAt(i)) {
                commonWordLength++;
            }
        }
        console.log(commonWordLength, "length");
        this.props.addGuessedWord(guessedWord, commonWordLength)
        console.log(this.props, 'sdfsdf');

    };

    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };


    componentDidMount() {
        // this.retrieveRandomWord()

    }


    retrieveRandomWord = async () => {
        const { retrieveSecetWord } = this.props
        await RandomWordService.retrieveRandomWord()
            .then(res => {
                console.log(res);
                let secretWord = res.data.word;
                retrieveSecetWord(secretWord)
                this.setState({
                    secretWord
                })
            })
    }

    render() {
        return (
            <Form
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
            >
                <Form.Item
                    label="Input"
                    name="input"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your guess!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Submit
                     </Button>
                </Form.Item>
            </Form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        guessedWords: state.guessedWords,
        secretWord:state.secretWord
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addGuessedWord: (value, commonWordLength) => { dispatch(addGuessedWord(value, commonWordLength)) },
        retrieveSecetWord: (secretWord) => { dispatch(retrieveSecetWord(secretWord)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GuessInput)
