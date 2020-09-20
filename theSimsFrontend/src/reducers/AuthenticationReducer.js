const initState = {
    isLoggedIn: sessionStorage.getItem('USER_TOKEN')=== null? false:true
}

const AuthenticationReducer = (state = initState, action) => {

    switch (action.type) {
  
        case ("LOGIN_ACTION"):
        
        
            return {
                ...state,
                isLoggedIn: action.isLoggedIn
            };
            break;
        case ("LOGOUT_ACTION"):

            return {
                ...state,
                isLoggedIn: false

            };
            break;
            //========================================================================================================================
        case ("SIGNUP_SUCCESS"):
            
            return state;

        case ("SIGNUP_FAILURE"):
            return state;
        default:
            return state;




}

}

export default AuthenticationReducer