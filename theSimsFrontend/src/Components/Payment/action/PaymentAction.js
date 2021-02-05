import axios from "axios"
import { API } from "../../../ApiConfig"

export const getAllConfirmedOrders = () => {
    return  async (dispatch, getState) => {
        dispatch({ type: 'GET_ALL_CONFIRMED_ORDERS_REQUEST'})
        
        let res = await axios.get(`${API}/orders/allConfirmedOrders`)
        dispatch({ type: 'GET_ALL_CONFIRMED_ORDERS_SUCCESS', payload:res.data})
        

    }

}