import axios from 'axios'
import { API } from '../../../ApiConfig'

const sleep = m => new Promise(r => setTimeout(r, m))


export const fetchAllProducts = () => {
  
    return async(dispatch, getState) => {
      
       try{
         dispatch({ type: 'FETCH_PRODUCTS_START' }) 
         await sleep(1000)
         let res = await axios.get(`${API}/products/`)
         console.log(res);
         dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: res.data })
         return res

       }catch(err){
           console.log(err);

       }

    }
}