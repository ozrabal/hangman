import Immutable, { fromJS } from 'immutable'
// import { get } from 'lodash'

import { types } from '../actions/game'

const {
  REQUEST_WORD,
  RECEIVED_WORD,
  ERROR_RECEIVING_WORD,
  KEY_PRESSED,
  CHECK_LETTER,
  // SET_MISSED_LETTER,
} = types

export const initialState = fromJS({})
  .set('error', false)
  .set('word', new Immutable.List())
  .set('fetching', false)
  .set('letter', null)
  .set('attempts', 11)
  .set('keysPressed', new Immutable.List())

function game(state = initialState, action = {}) {
  switch (action.type) {
    case REQUEST_WORD:
      return state
        .setIn(['fetching'], true)

    case RECEIVED_WORD:
      return state
        .setIn(['fetching'], false)
        .setIn(['word'], new Immutable.List(action.word))

    case ERROR_RECEIVING_WORD:
      return state
        .setIn(['fetching'], false)
        .setIn(['error'], action.error)

    case KEY_PRESSED:
      return state
        .setIn(['letter'], action.key)
        .setIn(['keysPressed'], new Immutable.List(state.get('keysPressed', []).push(action.key)))

    case CHECK_LETTER:
      return state
        .setIn(['attempts'], state.get('attempts') - 1)
        .setIn(['word'], new Immutable.List(action.word))

    /* case SET_MISSED_LETTER:
      return state
        .setIn()
*/
    default:
      return state
  }
}

export default game
