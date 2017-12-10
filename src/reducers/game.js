import Immutable, { fromJS } from 'immutable'
// import { get } from 'lodash'

import { types } from '../actions/game'

const {
  REQUEST_WORD,
  RECEIVED_WORD,
  ERROR_RECEIVING_WORD,
  KEY_PRESSED,
} = types

export const initialState = fromJS({})
  .set('error', false)
  .set('word', new Immutable.List())
  .set('fetching', false)
  .set('keysPressed', new Immutable.List())

function game(state = initialState, action = {}) {
  switch (action.type) {
    case REQUEST_WORD:
      return state
        .setIn(['fetching'], true)

    case RECEIVED_WORD:
      return state
        .setIn(['fetching'], false)
        .setIn(['word'], new Immutable.List(action.word.split('')))

    case ERROR_RECEIVING_WORD:
      return state
        .setIn(['fetching'], false)
        .setIn(['error'], action.error)
    case KEY_PRESSED:
      return state
        .setIn(
          ['keysPressed'],
          new Immutable.List(state.get('keysPressed', []).push(action.key))
        )
    default:
      return state
  }
}

export default game
