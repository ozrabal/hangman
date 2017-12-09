import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export const Word = ({ word }) => (

  <div className={styles.wordWrapper}>{word}</div>
)

Word.displayName = 'Word'

Word.propTypes = {
  word: PropTypes.string,
}

Word.defaultProps = {
  word: null,
}


export default Word
