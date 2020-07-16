const initState = {
    isLoggedIn: false
}

const AuthenticationReducer = (state = initState, action) => {
console.log(action);
    switch (action.type) {
        case ("LOGIN_ACTION"):
        console.log('reaching login ');
            return {
                ...state,
                isLoggedIn: action.isLoggedIn
            };
            break;
        case ("LOGOUT_ACTION"):
console.log('loggin out');
            return {
                ...state,
                isLoggedIn: false

            };
            break;
        default:
            return state;
    }

}

export default AuthenticationReducer