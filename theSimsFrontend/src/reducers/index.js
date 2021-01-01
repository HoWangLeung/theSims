import { combineReducers } from 'redux'
import EmployeeReducer from './EmployeeReducer'
import JottoReducer from './JottoReducer'
import AuthenticationReducer from './AuthenticationReducer'
import InventoryReducer from './InventoryReducer'
import CounterReducer from './CounterReducer'
import ProductReducer from './ProductReducer'
import PaymentReducer from './PaymentReducer'
import LoadingReducer from './api/LoadingReducer'
import StatisticReducer from './StatisticReducer'
const  rootReducer = combineReducers({
    EmployeeReducer,
    InventoryReducer,
    JottoReducer,
    AuthenticationReducer,
    CounterReducer,
    ProductReducer,
    LoadingReducer,
    PaymentReducer,
    StatisticReducer
})

export default (state, action) =>{
    
    return rootReducer(action.type === 'LOGOUT_ACTION' ? undefined : state, action);
}
  