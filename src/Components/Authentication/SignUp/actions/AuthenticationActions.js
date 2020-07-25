export const loginAction=(isLoggedIn)=>{
    
    return{
        type:'LOGIN_ACTION',
        isLoggedIn
    }
}

export const logoutAction=(isLoggedIn)=>{

    
    return{
        type:'LOGOUT_ACTION',
        isLoggedIn
    }
}