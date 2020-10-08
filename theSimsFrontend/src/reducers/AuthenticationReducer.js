const initState = {
    isLoggedIn: sessionStorage.getItem('USER_TOKEN')=== null? false:true,
    userProfile:[]
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

        case("GET_USER_PROFILE_SUCCESS"):
            console.log(action);
            return {
                ...state,
                userProfile:action.payload
            };
        default:
            return state;




}

}

export default AuthenticationReducer