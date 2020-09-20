import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from "redux-saga";

import ReduxThunk from 'redux-thunk'
import combineReducers from './reducers/index'
import rootSaga from './Components/Jotto/Counter/action/CounterAction';
 


const saga = createSagaMiddleware();
export const middlewares = [ReduxThunk,saga];
const store = createStore(combineReducers,applyMiddleware(...middlewares))

export default store;

saga.run(rootSaga)
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()