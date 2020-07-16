import { combineReducers } from 'redux'
import EmployeeReducer from './EmployeeReducer'
import JottoReducer from './JottoReducer'
import AuthenticationReducer from './AuthenticationReducer'
export default combineReducers({
    EmployeeReducer,
    JottoReducer,
    AuthenticationReducer
})