import responsiveObserve from 'antd/lib/_util/responsiveObserve'
import axios from 'axios'
import { result } from 'lodash'
import { API } from '../../../ApiConfig'
import AuthenticationService from '../../Authentication/SignUp/AuthenticationService'

const sleep = m => new Promise(r => setTimeout(r, m))
// axios.interceptors.request.use(
//   (config)=>{
//       if(AuthenticationService.isUserLoggedIn()){
//           
//           config.headers.authorization = sessionStorage.getItem("USER_TOKEN")
//       }
//       return config
//   },
//   error=>{

//   }
// )
export const changeOrderStatus = (payload) => {

  return async (dispatch, getState) => {
    try {

      const { orderId, status } = payload.values

      dispatch({ type: 'CHANGE_ORDER_STATUS_REQUEST' })
      let res = await axios.put(`${API}/orders/changeOrderStatus/${orderId}?status=${status}`)

      dispatch({ type: 'CHANGE_ORDER_STATUS_SUCCESS', payload })
      return res

    } catch (err) {
    }

  }
}


export const filterProductByCategory = (payload) => {

  return async (dispatch, getState) => {
    try {

      dispatch({ type: 'FETCH_PRODUCTS_CATEOGRY', payload })


    } catch (err) {
    }

  }
}
export const searchProduct = (payload) => {

  return async (dispatch, getState) => {
    try {
      if (payload.values === '') {
        dispatch({ type: 'FETCH_PRODUCTS_REQUEST' })
        let res = await axios.get(`${API}/products/`)
        dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: res.data })
      } else {
        dispatch({ type: 'SEARCH_PRODUCT', payload })
      }

    } catch (err) {
    }

  }
}

export const filterProductByPrice = (payload) => {


  return async (dispatch, getState) => {
    try {

      dispatch({ type: 'FILTER_PRODUCT_PRICE', payload })



    } catch (err) {
    }

  }
}


export const fetchAllProducts = () => {

  return async (dispatch, getState) => {
    try {
      dispatch({ type: 'FETCH_PRODUCTS_REQUEST' })
   // await sleep(900000)
      let res = await axios.get(`${API}/products/`)
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
      console.log(userId);
     // dispatch({ type: 'FETCH_PRODUCTSINCART_REQUEST', payload: res.data })
    
      let res = await axios.get(`${API}/orders/user/${userId}`
        // , { headers: { "Authorization": token }} 
      )
      dispatch({ type: 'FETCH_PRODUCTSINCART_SUCCESS', payload: res.data })

      return res

    } catch (err) {


    }

  }
}


// export const fetchPhotoUnsplash = (photoId) => {

//   return async (dispatch, getState) => {

//     try {
//       const url = `https://api.unsplash.com/photos/${photoId}`

//       dispatch({ type: 'FETCH_PHOTO_UNSPLASH_REQUEST' })
//       let res = await axios.get(url,
//         {headers: { Authorization: "Client-ID LdiIvQUsn0qhA_tx29EhaNCiqLtikQ51sgGALLLA6qg"}}
      
//       )
//       
//       dispatch({ type: 'FETCH_PHOTO_UNSPLASH_SUCCESS', payload: res })

//       return res
//     } catch (err) {
//    }

//   }
// }

export const fetchOneProduct = (id) => {

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

      dispatch({ type: 'ADD_TO_CART_REQUEST' })
      let res = await axios.post(`${API}/orders/addOrder`, payload

        // ,{ headers: { "Authorization": token }}
      )
      
      dispatch({ type: 'ADD_TO_CART_SUCCESS' , payload:res.data})



    } catch (err) {

    }

  }
}

export const deleteProductInCart = (payload) => {

  return async (dispatch, getState) => {

    try {
      let token = sessionStorage.getItem('USER_TOKEN')

      dispatch({ type: 'DELETE_PRODUCT_CART_REQUEST' })

      let res = await axios.delete(`${API}/orders/removeProduct`,

        { data: payload },
        { headers: { "Authorization": token } },


      )

      dispatch({ type: 'DELETE_PRODUCT_CART_SUCCESS', payload: res })
      return res
    } catch (err) {

    }

  }
}