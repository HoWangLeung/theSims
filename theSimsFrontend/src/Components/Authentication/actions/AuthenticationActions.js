import axios from 'axios'
import { API } from '../../../ApiConfig'

const sleep = m => new Promise(r => setTimeout(r, m))
export const loginAction = (isLoggedIn) => {

  return {
    type: 'LOGIN_ACTION',
    isLoggedIn
  }
}

export const getUserProfile = (payload) => {

  return async (dispatch, getState) => {

    try {
      let res = await axios.post(`${API}/users/userProfile`, payload)

      dispatch({ type: 'GET_USER_PROFILE_SUCCESS', payload: res.data })
      return res
    } catch (err) {

    }

  }
}

export const getUserOrderHistory = ({ userId }) => {

  return async (dispatch, getState) => {

    try {
      
      dispatch({ type: 'GET_USER_ORDER_HISTORY_REQUEST' })
      let res = await axios.get(`${API}/orders/confirmedOrders?id=${userId}`)
      
      dispatch({ type: 'GET_USER_ORDER_HISTORY_SUCCESS', payload: res.data })
      return res
    } catch (err) {

    }

  }
}

export const getUserOrderHistoryInvoice = ({ userId, orderId }) => {

  return async (dispatch, getState) => {

    try {
      
      dispatch({ type: 'GET_USER_ORDER_HISTORY_INVOICE_REQUEST' })
    
      let res = await axios(
        {
          url: `${API}/orders/confirmedOrders/exportPdf/?userId=${userId}&orderId=${orderId}`,
          method: 'GET',
          responseType: 'blob',
        }
      )


      
      dispatch({ type: 'GET_USER_ORDER_HISTORY_INVOICE_SUCCESS', payload: res })
      return res
    } catch (err) {

    }

  }
}

export const editBasicInfoRequest =  (payload) => {

  return async (dispatch, getState) => {

    try {

    
       dispatch({ type: 'EDIT_BASIC_INFO_REQUEST' })
  
       let userId = parseInt(sessionStorage.getItem("userId"))
      // console.log(typeof userId);
      // console.log(payload);
      // const sleep = (m) => new Promise((r) => setTimeout(r, m))
      // sleep(3000)
      let res = await axios.put(`${API}/users/editBasicInfo?userId=${userId}`, payload);

     // dispatch({ type: 'EDIT_BASIC_INFO_SUCCESS' })

   //    return res
 
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