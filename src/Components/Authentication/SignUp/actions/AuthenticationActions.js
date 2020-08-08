import axios from 'axios'

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

export const signUpRequest = (payload,ownProps) => {
    console.log('reaching signUpRequest', payload,ownProps);
    return (dispatch,getState)=>{
       axios.post("http://localhost:8080/internalUser/signup", payload)
      .then(res=>{
          console.log(res);
        dispatch({ type: 'SIGNUP_SUCCESS' })
      })
      .then(()=>{
          console.log('sdfsdfsdfwer');
        ownProps.history.push("/")
      })
      
      .catch(e=>{
        dispatch({ type: 'SIGNUP_FAILURE',e })
      })

    }

}