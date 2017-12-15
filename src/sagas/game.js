import { takeLatest, put, take, cancel, call, select } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'react-router-redux'
import { getWord, getLetter } from '../selectors'
import { types, receivedWord, errorReceivingWord, checkLetter, checkWin, setMissedLetter } from '../actions/game'
import request from '../api/request'
import endpoints from '../api/endpoints'

export function* loadWord() {
  try {
    const response = yield call(request, endpoints.GET_WORD, { method: 'GET' })
    response.word = response.word.toUpperCase().split('')
    const masked = response.word.map((letter) => ({ letter, masked: true }))
    yield put(receivedWord(masked))
  } catch (error) {
    yield put(errorReceivingWord(error))
  }
}

export function* makeCheckLetter() {
  const word = yield select(getWord)
  let letter = yield select(getLetter)
  letter = letter.toUpperCase()
  const unmasked = word.map((a) => (
    a.letter === letter ? { letter: a.letter, masked: false } : { letter: a.letter, masked: a.masked }
  ))

  yield put(checkLetter(unmasked))
  const indices = word.findIndex((index) => index.letter === letter)
  if (indices < 0) {
    yield put(setMissedLetter(letter))
  }
}

export function* makeCheckWin() {
  const word = yield select(getWord)
  const index = word.findIndex((i) => (i.masked === true))
  if (index < 0) {
    yield put(checkWin(true))
  } else {
    yield put(checkWin(false))
  }
}

export function* loadWordLifecycle() {
  const watcher = yield takeLatest(types.REQUEST_WORD, loadWord)
  yield takeLatest(types.KEY_PRESSED, makeCheckLetter)
  yield takeLatest(types.CHECK_LETTER, makeCheckWin)
  yield take(LOCATION_CHANGE)
  yield cancel(watcher)
}

export default loadWordLifecycle
