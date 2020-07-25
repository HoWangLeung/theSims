const initState = {
    guessedWords: [

    ],
    secretWord:''
}

const JottoReducer = (state = initState, action) => {
    
    
    switch (action.type) {
        case ("ADD_GUESSED_WORD"):
            let index = state.guessedWords.length
            let newGuessedWord = action.value
            let guessedWord = { id: index + 1, value: newGuessedWord, commonWordLength: action.commonWordLength }
            let guessedWordsArr = [...state.guessedWords]
            return {
                guessedWords: guessedWordsArr.concat(guessedWord)
            }
            case ("RETRIEVE_SECRET_WORD"):
                
                
                return{
                    ...state,
                    secretWord:action.secretWord
                }
                

        default:
            return state;
    }

}

export default JottoReducer