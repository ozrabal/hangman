import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './styles.css'

export const Letter = ({ letter, masked }) => (
  <span className={cx(styles.letterWrapper, { blank: masked })}>{!masked && letter}</span>
)

Letter.propTypes = {
  letter: PropTypes.string.isRequired,
  masked: PropTypes.bool.isRequired,
}

export default Letter
