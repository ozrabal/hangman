export const types = {
  REQUEST_WORD: 'REQUEST_WORD',
  RECEIVED_WORD: 'RECEIVED_WORD',
  ERROR_RECEIVING_WORD: 'ERROR_RECEIVING_WORD',

  MASK_WORD: 'MASK_WORD',
  KEY_PRESSED: 'KEY_PRESSED',
  CHECK_LETTER: 'CHECK_LETTER',
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

export const maskWord = (masked) => ({
  masked,
  type: types.MASK_WORD,
})

export const keyPressed = (key) => ({
  key,
  type: types.KEY_PRESSED,
})

export const checkLetter = (masked) => ({
  masked,
  type: types.CHECK_LETTER,
})
