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
    
    return (dispatch,getState)=>{
      const headers = {
        'Content-Type': 'application/json' 
      }
       axios.post("http://localhost:8080/users/signup", payload,{
        headers: headers
      })
      .then(res=>{
          
        dispatch({ type: 'SIGNUP_SUCCESS' })
      })
      .then(()=>{
          
        ownProps.history.push("/")
      })
      
      .catch(e=>{
        dispatch({ type: 'SIGNUP_FAILURE',e })
      })

    }

}