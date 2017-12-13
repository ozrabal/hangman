import { takeLatest, put, take, cancel, call, select } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'react-router-redux'
import { getWord, getMasked, getLetter } from '../selectors'
import { types, receivedWord, errorReceivingWord, maskWord, checkLetter, keyPressed } from '../actions/game'
import request from '../api/request'
import endpoints from '../api/endpoints'
import Immutable, { fromJS, updateIn } from 'immutable'
export function* loadWord() {
  try {
    const response = yield call(request, endpoints.GET_WORD, { method: 'GET' })
    response.word = response.word.split('')
    const masked = response.word.map((letter) => ({ letter: letter.toUpperCase(), masked: true }))
    yield put(receivedWord(masked))
  } catch (error) {
    yield put(errorReceivingWord(error))
  }
}

export function* loadWordLifecycle() {
  const watcher = yield takeLatest(types.REQUEST_WORD, loadWord)
  // yield takeLatest(types.RECEIVED_WORD, makeMaskedWord)
  //yield takeLatest(types.KEY_PRESSED, makeCheckLetter)
  yield take(LOCATION_CHANGE)
  yield cancel(watcher)
}

export default loadWordLifecycle
