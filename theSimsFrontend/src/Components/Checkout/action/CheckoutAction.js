import axios from 'axios'
import { API } from '../../../ApiConfig';
 
const sleep = m => new Promise(r => setTimeout(r, m))

 

export const submitPayment = (payload) => {
    return  async(dispatch, getState) => {


        console.log(payload);
        dispatch({ type: 'SUBMIT_PAYMENT_REQUEST'} )
        let response = await axios.post(`${API}/payment/charge`, payload)

        console.log(response);

    }

}


