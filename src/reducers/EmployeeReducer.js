const initState = {
   employeeList:[]
}

const EmployeeReducer = (state = initState, action) => {
    console.log(state);
    console.log(action);
    switch (action.type) {
        case ("FETCH_EMPLOYEE"):
            // let index = state.guessedWords.length
            // let newGuessedWord = action.value
            // let guessedWord = { id: index + 1, value: newGuessedWord, commonWordLength: action.commonWordLength }
            // let guessedWordsArr = [...state.guessedWords]
            console.log(action.payload);
            
            return {
                ...state,
                employeeList:action.payload
            };

        default:
            return state;
    }

}

export default EmployeeReducer