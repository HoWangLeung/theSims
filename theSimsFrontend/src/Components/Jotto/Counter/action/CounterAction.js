import { put, takeEvery, all, call } from 'redux-saga/effects'
import { fetchUser } from './api'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* helloSaga() {
  console.log('Hello Sagas!')
}

export function* incrementAsync() {
  const data = yield call(fetchUser)
  yield put({ type: 'INCREMENT_ASYNC', payload:data })
}

export function* decrementAsync() {
    yield delay(3000)
    yield put({ type: 'DECREMENT_ASYNC' })
  }

function* watchIncrementAsync() {
  yield takeEvery('INCREMENT', incrementAsync)
}

function* watchDecrementAsync() {
    yield takeEvery('DECREMENT', decrementAsync)
  }
// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync(),
    watchDecrementAsync()
  ])
}