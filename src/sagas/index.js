import { all } from 'redux-saga/effects'
import loadWordLifecycle from './game'

export default function* sagas() {
  yield all([
    loadWordLifecycle(),
  ])
}
