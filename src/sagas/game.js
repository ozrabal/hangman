import { takeLatest, put, call, select } from 'redux-saga/effects'
import { getWord, getLetter, getKeysPressed, getAttempts, getWin, getLost } from '../selectors'
import { types, receivedWord, errorReceivingWord, checkLetter, checkWin, setMissedLetter, keyChecked } from '../actions/game'
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

export function* makeKeyPress() {
  const pressed = yield select(getKeysPressed)
  const letter = yield select(getLetter)
  const win = yield select(getWin)
  const lost = yield select(getLost)
  if (!pressed.includes(letter) && !win && !lost) {
    yield put(keyChecked(letter))
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
  const attempts = yield select(getAttempts)
  if (attempts - 1 === 0) {
    yield put(checkWin(false, true))
  } else {
    const index = word.findIndex((i) => (i.masked === true))
    if (index < 0) {
      yield put(checkWin(true, false))
    }
  }
}

export function* loadWordLifecycle() {
  yield takeLatest(types.INIT_GAME, loadWord)
  yield takeLatest(types.KEY_PRESSED, makeKeyPress)
  yield takeLatest(types.KEY_CHECKED, makeCheckLetter)
  yield takeLatest(types.CHECK_LETTER, makeCheckWin)
}

export default loadWordLifecycle
