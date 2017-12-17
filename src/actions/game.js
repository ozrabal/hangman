export const types = {
  INIT_GAME: 'INIT_GAME',
  REQUEST_WORD: 'REQUEST_WORD',
  RECEIVED_WORD: 'RECEIVED_WORD',
  ERROR_RECEIVING_WORD: 'ERROR_RECEIVING_WORD',

  MASK_WORD: 'MASK_WORD',
  KEY_PRESSED: 'KEY_PRESSED',
  KEY_CHECKED: 'KEY_CHECKED',
  CHECK_LETTER: 'CHECK_LETTER',
  SET_MISSED_LETTER: 'SET_MISSED_LETTER',
  CHECK_WIN: 'CHECK_WIN',
}

export const initGame = () => ({
  type: types.INIT_GAME,
})

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

export const keyChecked = (key) => ({
  key,
  type: types.KEY_CHECKED,
})

export const keyPressed = (key) => ({
  key,
  type: types.KEY_PRESSED,
})

export const checkLetter = (word) => ({
  word,
  type: types.CHECK_LETTER,
})

export const setMissedLetter = (letter) => ({
  letter,
  type: types.SET_MISSED_LETTER,
})

export const checkWin = (win, lost) => ({
  win,
  lost,
  type: types.CHECK_WIN,
})
