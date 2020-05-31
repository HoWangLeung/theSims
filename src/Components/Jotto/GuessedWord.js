import React from 'react'
import PropTypes from 'prop-types'
import { Table, Tag, Space } from 'antd';

const GuessedWord = (props) => {
    const { guessedWords } = props
    console.log(guessedWords);

    const columns = [
        {
            title: 'Guess',
            dataIndex: 'guessedWord',
            key: 'guessedWord',
            render: text => {
                console.log(text);
                return text
            }
        },
        {
            title: 'Matching Letters',
            dataIndex: 'letterMatchCount',
            key: 'letterMatchCount',
            render: (text,record,index) => {     
                console.log(record);
                       
            return <div data-test="guessed-word">{record.letterMatchCount}</div>
            }
        },
    ]

const data = guessedWords


    let contents
    console.log(guessedWords.length);

    if (guessedWords.length === 0) {
        contents = (<span data-test="guess-instructions">Try to guess the secret word!</span>)
    } else {
        contents = (
            <div data-test="guessed-words">
             <Table columns={columns} dataSource={data}  />
            </div>
        )
    }
    return (
        <div data-test="component-guessed-words">
            {contents}
        </div>
    )
}

GuessedWord.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired,

}

export default GuessedWord;
