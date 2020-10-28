import axios from 'axios'
import { API } from '../../../../ApiConfig'

export const loginAction = (isLoggedIn) => {

  return {
    type: 'LOGIN_ACTION',
    isLoggedIn
  }
}

export const getUserProfile = () => {


  return async (dispatch, getState) => {

    try {
      let res = await axios.get(`${API}/users/userProfile/`)
      
      dispatch({ type: 'GET_USER_PROFILE_SUCCESS', payload: res.data })
      return res
    } catch (err) {
      
    }


  }

}

export const logoutAction = (isLoggedIn) => {


  return {
    type: 'LOGOUT_ACTION',
    isLoggedIn
  }
}

export const signUpRequest = (payload, ownProps) => {

  return (dispatch, getState) => {
    const headers = {
      'Content-Type': 'application/json'
    }
    axios.post(`${API}/users/signup`, payload, {
      headers: headers
    })
      .then(res => {

        dispatch({ type: 'SIGNUP_SUCCESS' })
      })
      .then(() => {

        ownProps.history.push("/signup-success")
      })

      .catch(e => {
        dispatch({ type: 'SIGNUP_FAILURE', e })
      })

  }

}