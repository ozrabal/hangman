import Immutable, { fromJS } from 'immutable'
// import { get } from 'lodash'

import { types } from '../actions/game'

const {
  REQUEST_WORD,
  RECEIVED_WORD,
  ERROR_RECEIVING_WORD,
  KEY_PRESSED,
  KEY_CHECKED,
  CHECK_LETTER,
  CHECK_WIN,
  SET_MISSED_LETTER,
} = types

export const initialState = fromJS({})
  .set('error', false)
  .set('word', new Immutable.List())
  .set('fetching', false)
  .set('letter', null)
  .set('attempts', 11)
  .set('win', false)
  .set('keysPressed', new Immutable.List())
  .set('missed', new Immutable.List())

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

    case KEY_CHECKED:
      return state
        .setIn(['keysPressed'], new Immutable.List(state.get('keysPressed', []).push(action.key)))

    case KEY_PRESSED:
      return state
        .setIn(['letter'], action.key)

    case CHECK_LETTER:
      return state
        .setIn(['word'], new Immutable.List(action.word))

    case CHECK_WIN:
      return state
        .setIn(['win'], action.win)
        .setIn(['attempts'], action.win ? 0 : state.get('attempts'))

    case SET_MISSED_LETTER:
      return state
        .setIn(['attempts'], state.get('attempts') - 1)
        .setIn(['missed'], new Immutable.List(state.get('missed', []).push(action.letter)))

    default:
      return state
  }
}

export default game
