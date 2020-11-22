import axios from 'axios'
import { API } from '../../../ApiConfig'

const sleep = m => new Promise(r => setTimeout(r, m))

export const fetchAllProducts = () => {

  return async (dispatch, getState) => {
    try {
      dispatch({ type: 'FETCH_PRODUCTS_REQUEST' })
      await sleep(300)
      let res = await axios.get(`${API}/products/`)
      console.log(res);
      dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: res.data })
      return res

    } catch (err) {
    }

  }
}

export const fetchProductsInCart = () => {

  return async (dispatch, getState) => {

    try {
      let userId = sessionStorage.getItem("userId")
      let token = sessionStorage.getItem('USER_TOKEN')
      let res = await axios.get(`${API}/orders/user/${userId}`, { headers: { "Authorization": token }} )
      dispatch({ type: 'FETCH_PRODUCTSINCART_SUCCESS', payload: res.data })
    
      return res

    } catch (err) {


    }

  }
}

export const fetchOneProduct = (id) => {
  console.log('id=> ', id);
  return async (dispatch, getState) => {

    try {
      
      dispatch({ type: 'FETCH_ONE_PRODUCT_REQUEST' })
      let res = await axios.get(`${API}/products/${id}`)
      dispatch({ type: 'FETCH_ONE_PRODUCT_SUCCESS', payload: res.data })

      return res
    } catch (err) {


    }

  }
}

export const addToCart = (payload) => {

  return async (dispatch, getState) => {
    
    try {
      let token = sessionStorage.getItem('USER_TOKEN')
      console.log(payload);
      dispatch({ type: 'ADD_TO_CART_REQUEST' })
      let res = await axios.post(`${API}/orders/addOrder`, payload,{ headers: { "Authorization": token }})
      dispatch({ type: 'ADD_TO_CART_SUCCESS' })
      console.log(res);


    } catch (err) {

    }

  }
}

export const deleteProductInCart = (payload) => {

  return async (dispatch, getState) => {
    
    try {
      let token = sessionStorage.getItem('USER_TOKEN')
      console.log(payload);
      dispatch({ type: 'DELETE_PRODUCT_CART_REQUEST' })
     
      let res = await axios.delete(`${API}/orders/removeProduct`, 
      {data: payload},
      { headers: { "Authorization": token }},
  
    
      )
      console.log(res);
      dispatch({ type: 'DELETE_PRODUCT_CART_SUCCESS' })
    return res
    } catch (err) {

    }

  }
}