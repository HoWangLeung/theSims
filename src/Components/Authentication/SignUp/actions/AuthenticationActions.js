export const loginAction=(isLoggedIn)=>{
    console.log('returning login action');
    return{
        type:'LOGIN_ACTION',
        isLoggedIn
    }
}

export const logoutAction=(isLoggedIn)=>{

    console.log('returning logout action');
    return{
        type:'LOGOUT_ACTION',
        isLoggedIn
    }
}