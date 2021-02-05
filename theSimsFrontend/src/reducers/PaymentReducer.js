import _ from 'lodash';

const initState = {
   confirmedOrders:[]
}


const PaymentReducer = (state = initState, action) => {



    switch (action.type) {

        case ("GET_ALL_CONFIRMED_ORDERS_SUCCESS"):
            

            return {
                ...state,
                confirmedOrders:action.payload.detail
            };
    
 

        default:
            return state;
    }



}

export default PaymentReducer