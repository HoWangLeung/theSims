import { combineReducers } from 'redux'
import EmployeeReducer from './EmployeeReducer'
import JottoReducer from './JottoReducer'
import AuthenticationReducer from './AuthenticationReducer'
import InventoryReducer from './InventoryReducer'
export default combineReducers({
    EmployeeReducer,
    InventoryReducer,
    JottoReducer,
    AuthenticationReducer
})