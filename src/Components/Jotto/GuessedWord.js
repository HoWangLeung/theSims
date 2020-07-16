import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table } from 'antd'


class GuessedWord extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
        console.log(this.props);


    }



    render() {

        const dataSource = this.props.guessedWords.map(word => {
            console.log(word);
            return {
                id: word.id,
                value: word.value,
                commonWordLength: word.commonWordLength
            }

        })

        const columns = [
            {
                title: "GuessedWord",
                dataIndex: 'value',
                key: 'id'
            },
            {
                title: "LetterMatched",
                dataIndex: 'commonWordLength',
                key: 'id'
            },


        ]
        return (
            <div>
                <Table columns={columns}
                    dataSource={dataSource} />
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        guessedWords: state.JottoReducer.guessedWords,
        secretWord: state.JottoReducer.secretWord
    }
}



export default connect(mapStateToProps)(GuessedWord);
