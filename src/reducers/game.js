import { types } from '../actions/game'

const {
  REQUEST_WORD,
  // RECEIVED_WORD,
  // ERROR_RECEIVING_WORD
} = types

export const initialState = {
  word: null,
  error: null,
  fetching: false,
}

export default function game(state = initialState, action = {}) {
  switch (action.type) {
    case REQUEST_WORD:
      return {
        ...state,
        fetching: true,
      }
    default:
      return state
  }
}
