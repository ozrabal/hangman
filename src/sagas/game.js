import { takeLatest, put, take, cancel, call, select } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'react-router-redux'
import { getWord, getLetter } from '../selectors'
import { types, receivedWord, errorReceivingWord, checkLetter } from '../actions/game'
import request from '../api/request'
import endpoints from '../api/endpoints'

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

export function* makeCheckLetter() {
  const word = yield select(getWord)
  const letter = yield select(getLetter)
  const unmasked = word.map((a) => (
    a.letter === letter.toUpperCase() ? { letter: a.letter, masked: false } : { letter: a.letter, masked: a.masked }
  ))
  yield put(checkLetter(unmasked))
}

export function* loadWordLifecycle() {
  const watcher = yield takeLatest(types.REQUEST_WORD, loadWord)
  yield takeLatest(types.KEY_PRESSED, makeCheckLetter)
  yield take(LOCATION_CHANGE)
  yield cancel(watcher)
}

export default loadWordLifecycle
