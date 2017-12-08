import { fromJS } from 'immutable'
// import { get } from 'lodash'

import { types } from '../actions/game'

const {
  REQUEST_WORD,
  RECEIVED_WORD,
  ERROR_RECEIVING_WORD,
} = types

export const initialState = fromJS({})
  .set('error', false)
  .set('word', null)
  .set('fetching', false)

function game(state = initialState, action = {}) {
  switch (action.type) {
    case REQUEST_WORD:
      return state
        .setIn(['fetching'], true)

    case RECEIVED_WORD:
      return state
        .setIn(['fetching'], false)
        .setIn(['word'], action.word)

    case ERROR_RECEIVING_WORD:
      return state
        .setIn(['fetching'], false)
        .setIn(['error'], action.error)

    default:
      return state
  }
}

export default game
