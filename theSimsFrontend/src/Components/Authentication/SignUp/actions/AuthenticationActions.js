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
      const headers = {
        'Content-Type': 'application/json' 
      }
       axios.post("http://localhost:8080/users/signup", payload,{
        headers: headers
      })
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