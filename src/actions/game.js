export const types = {
  REQUEST_WORD: 'REQUEST_WORD',
  RECEIVED_WORD: 'RECEIVED_WORD',
  ERROR_RECEIVING_WORD: 'ERROR_RECEIVING_WORD',

  KEY_PRESSED: 'KEY_PRESSED',
}

export const requestWord = () => ({
  type: types.REQUEST_WORD,
})

export const receivedWord = (word) => ({
  word,
  type: types.RECEIVED_WORD,
})

export const errorReceivingWord = (error) => ({
  error,
  type: types.ERROR_RECEIVING_WORD,
})

export const keyPressed = (key) => ({
  key,
  type: types.KEY_PRESSED,
})
