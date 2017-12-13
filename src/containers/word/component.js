import React from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import Immutable from 'immutable'

import styles from './styles.css'

export const Word = ({ word }) => (
  <div className={styles.wordWrapper}>
    { word.map((index) => (!index.masked ? index.letter : '_')) }
  </div>
)

Word.displayName = 'Word'

Word.propTypes = {
  word: ImmutablePropTypes.list, // eslint-disable-line react/no-typos
}

Word.defaultProps = {
  word: new Immutable.List(),
}


export default Word
