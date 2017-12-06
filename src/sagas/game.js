import { takeLatest, put, take, cancel } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'react-router-redux'

import { types, receivedWord, errorReceivingWord } from '../actions/game'

// mocks
import word from '../mocks/word.json'

export function* loadWord() {
  const resp = word
  // const resp = {error: 'error ERROR_RECEIVING_WORD'}
  // TODO call API
  yield (!resp.error)
    ? put(receivedWord(resp.word))
    : put(errorReceivingWord(resp.error))
}

export function* loadWordLifecycle() {
  const watcher = yield takeLatest(types.REQUEST_WORD, loadWord)
  yield take(LOCATION_CHANGE)
  yield cancel(watcher)
}

export default loadWordLifecycle
