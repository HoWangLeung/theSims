import axios from "axios";
import { API } from "../../../ApiConfig";



export const getStatSoldByMonth =  (payload) => {
    return  async(dispatch, getState) => {
        
      const {activeMonth, activeYear} = payload
        dispatch({ type: 'GET_STAT_SOLD_BY_MONTH_REQUEST'})
         let response = await axios.get(`${API}/orders/confirmedOrders/statistic/quantity?year=${activeYear}&month=${activeMonth}`, payload)
         dispatch({ type: 'GET_STAT_SOLD_BY_MONTH_SUCCESS', payload:response.data})
        

    }

}