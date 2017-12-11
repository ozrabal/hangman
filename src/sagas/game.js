import { takeLatest, put, take, cancel, call, select } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'react-router-redux'
import { getWord, getMasked, getLetter } from '../selectors'
import { types, receivedWord, errorReceivingWord, maskWord, checkLetter, keyPressed } from '../actions/game'
import request from '../api/request'
import endpoints from '../api/endpoints'

export function* loadWord() {
  try {
    const response = yield call(request, endpoints.GET_WORD, { method: 'GET' })
    yield put(receivedWord(response.word.toUpperCase()))
  } catch (error) {
    yield put(errorReceivingWord(error))
  }
}

export function* makeMaskedWord() {
  const word = yield select(getWord)
  yield put(maskWord(word.map(() => '_')))
}

export function* makeCheckLetter() {
  const word = yield select(getWord)
  const masked = yield select(getMasked)
  const letter = yield select(getLetter)
  const position = word.reduce((a, e, i) => (e === letter.toUpperCase()) ? a.concat(i) : a, [])
const unmasked = position.map( (v,k,i) => (

Object.assign([...masked], {[k] : letter})
)
)
//const unmasked = masked.map((k, v) => {
  //if()
//})
console.log(unmasked)
  yield put(checkLetter(unmasked))
}

export function* loadWordLifecycle() {
  const watcher = yield takeLatest(types.REQUEST_WORD, loadWord)
  yield takeLatest(types.RECEIVED_WORD, makeMaskedWord)
  // yield takeLatest(types.KEY_PRESSED, makeCheckLetter)
  yield take(LOCATION_CHANGE)
  yield cancel(watcher)
}

export default loadWordLifecycle
