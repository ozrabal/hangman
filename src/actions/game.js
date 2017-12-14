export const types = {
  REQUEST_WORD: 'REQUEST_WORD',
  RECEIVED_WORD: 'RECEIVED_WORD',
  ERROR_RECEIVING_WORD: 'ERROR_RECEIVING_WORD',

  MASK_WORD: 'MASK_WORD',
  KEY_PRESSED: 'KEY_PRESSED',
  CHECK_LETTER: 'CHECK_LETTER',
  CHECK_WIN: 'CHECK_WIN',
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

export const checkLetter = (word) => ({
  word,
  type: types.CHECK_LETTER,
})

export const checkWin = (win) => ({
  win,
  type: types.CHECK_WIN,
})
