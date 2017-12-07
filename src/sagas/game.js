import { takeLatest, put, take, cancel, call } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'react-router-redux'

import { types, receivedWord, errorReceivingWord } from '../actions/game'
import request from '../api/request'
import endpoints from '../api/endpoints'

export function* loadWord() {
  try {
    const response = yield call(request, endpoints.GET_WORD, { method: 'GET' })
    yield put(receivedWord(response.word))
  } catch (error) {
    yield put(errorReceivingWord(error))
  }
}

export function* loadWordLifecycle() {
  const watcher = yield takeLatest(types.REQUEST_WORD, loadWord)
  yield take(LOCATION_CHANGE)
  yield cancel(watcher)
}

export default loadWordLifecycle
