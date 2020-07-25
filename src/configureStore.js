import {createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import combineReducers from './reducers/index'

export const middlewares = [ReduxThunk];
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
export default createStoreWithMiddleware(combineReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())