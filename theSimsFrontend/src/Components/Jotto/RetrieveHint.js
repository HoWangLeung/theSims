import React, { Component } from 'react'
import { Button } from 'antd'
import GetHintService from './api/GetHintService'
import { connect } from 'react-redux'
import { Alert } from 'antd';

class RetrieveHint extends Component {
    constructor(props) {
        super(props)

        this.state = {
            wordDefinition: [],
            showDefinition: false,
        }
    }

    handleGetHint = e => {
        

        const { secretWord } = this.props
        GetHintService.getHint(secretWord)
            .then(res => {
                
                let wordDefinition = res.data.definitions
                

                this.setState({
                    wordDefinition,
                    showDefinition: true
                })
            })


    }

    render() {
        const definitions = this.state.wordDefinition.map((item, index) => {
            if (this.state.wordDefinition !== []) {
                

                return (<Alert key={index} message={item.definition} type="info" />)
            } else {
                return (<Alert key={index} message="Opps! the secret word is not on dictionary" type="warning" />)
            }

        })

        return (
            <div>
                <Button type="primary" onClick={this.handleGetHint} >Get hint !</Button>
                {this.state.showDefinition && definitions}

            </div>


        )
    }
}

const mapStateToProps = (state) => {
    return {
        guessedWords: state.guessedWords,
        secretWord: state.secretWord
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RetrieveHint)
