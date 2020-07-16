export const addGuessedWord = (value, commonWordLength) => {
    return {
        type: 'ADD_GUESSED_WORD',
        value,
        commonWordLength
    }
}

export const retrieveSecetWord = (secretWord) => {
    return {
        type: 'RETRIEVE_SECRET_WORD',
        secretWord
    }
}