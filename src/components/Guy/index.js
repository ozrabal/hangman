import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './styles.css'

export const Guy = ({ stage }) => (
  <div className={styles.guyWrapper}>
    <div className={cx(styles.guy, styles[`stage${stage}`])}></div>
  </div>
)

Guy.displayName = 'Guy'

Guy.propTypes = {
  stage: PropTypes.number.isRequired,
}

export default Guy
