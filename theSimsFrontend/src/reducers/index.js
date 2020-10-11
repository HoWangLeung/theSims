import { combineReducers } from 'redux'
import EmployeeReducer from './EmployeeReducer'
import JottoReducer from './JottoReducer'
import AuthenticationReducer from './AuthenticationReducer'
import InventoryReducer from './InventoryReducer'
import CounterReducer from './CounterReducer'
import ProductReducer from './ProductReducer'
import LoadingReducer from './api/LoadingReducer'
export default combineReducers({
    EmployeeReducer,
    InventoryReducer,
    JottoReducer,
    AuthenticationReducer,
    CounterReducer,
    ProductReducer,
    LoadingReducer,
})