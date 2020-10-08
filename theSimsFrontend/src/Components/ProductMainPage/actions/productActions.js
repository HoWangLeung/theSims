import axios from 'axios'
import { API } from '../../../ApiConfig'

const sleep = m => new Promise(r => setTimeout(r, m))

export const fetchAllProducts = () => {
  
    return async (dispatch, getState) => {
      
       try{
         dispatch({ type: 'FETCH_PRODUCTS_START' }) 
         await sleep(1000)
         let res = await axios.get(`${API}/products/`)
         
         dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: res.data })
         return res

       }catch(err){
           

       }

    }
}

export const fetchProductsInCart = () => {
  
  return async(dispatch, getState) => {
    
    try{
      let token = sessionStorage.getItem('USER_TOKEN')
      let res = await axios.get(`${API}/orders/`,{ headers: {"Authorization" : token}})    
     dispatch({ type: 'FETCH_PRODUCTSINCART_SUCCESS', payload: res.data })
      return res

    }catch(err){
        

    }

  }
}
