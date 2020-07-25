import React, { Component } from 'react'

import { Layout, Row, Col, Space } from 'antd';
import { Typography } from 'antd';
import styles from './Home.less'
import Congrats from './Jotto/Congrats';
import GuessedWord from './Jotto/GuessedWord';
import GuessInput from './Jotto/GuessInput';
import { connect } from 'react-redux'
import RetrieveHint from './Jotto/RetrieveHint';
import { Spin } from 'antd';
import RandomWordService from './Jotto/api/RandomWordService';
import { retrieveSecetWord } from './Jotto/actions/JottoAction'
import SelectDifficulty from './Jotto/SelectDifficulty';
const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: false
        }
    }

    componentDidMount() {
        // this.retrieveRandomWord()
      

    }


    retrieveRandomWord = async () => {
        const { retrieveSecetWord } = this.props
        await RandomWordService.retrieveRandomWord()
            .then(res => {
                
                let secretWord = res.data.word;
                retrieveSecetWord(secretWord)
                this.setState({
                    secretWord,
                    isLoading:false
                })
            })
    }

    render() {
        
        

        return (
            <Spin tip="Loading..." spinning={this.state.isLoading} size="large" >
                <SelectDifficulty/>
                <Row justify="center">

                    <Col span={18}>
                        <h1>Jotto</h1>

                        {/* <GuessInput />
                        <RetrieveHint />
                        <Congrats success={false} />
                        <GuessedWord guessedWords={[
                            {
                                guessedWord: 'train',
                                letterMatchCount: 3
                            }

                        ]} /> */}

                    </Col>
                </Row >
            </Spin>
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
        retrieveSecetWord: (secretWord) => { dispatch(retrieveSecetWord(secretWord)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
