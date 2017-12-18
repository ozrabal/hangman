import React from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import styles from './styles.css'

export const MissedLetters = ({ letters }) => (
  <div className={styles.missedLetters}>
    <h2>You missed:</h2>
    <span>{letters}</span>
  </div>
)

MissedLetters.propTypes = {
  letters: ImmutablePropTypes.list.isRequired, // eslint-disable-line react/no-typos
}

export default MissedLetters
