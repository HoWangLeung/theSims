import { combineReducers } from 'redux'
import EmployeeReducer from './EmployeeReducer'
import JottoReducer from './JottoReducer'
import AuthenticationReducer from './AuthenticationReducer'
import InventoryReducer from './InventoryReducer'
import CounterReducer from './CounterReducer'
import ProductReducer from './ProductReducer'
import LoadingReducer from './api/LoadingReducer'
const  rootReducer = combineReducers({
    EmployeeReducer,
    InventoryReducer,
    JottoReducer,
    AuthenticationReducer,
    CounterReducer,
    ProductReducer,
    LoadingReducer,
})

export default (state, action) =>{
    
    return rootReducer(action.type === 'LOGOUT_ACTION' ? undefined : state, action);
}
  