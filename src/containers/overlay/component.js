import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export const Overlay = ({ win, lost, onButtonClick }) => (
  <div className={styles.overlayWrapper}>
    {win && <h1>You Win</h1>}
    {lost && <h1>You Lost</h1>}
    <button onClick={onButtonClick}>New word</button>
  </div>
)

Overlay.displayName = 'Overlay'

Overlay.propTypes = {
  win: PropTypes.bool.isRequired,
  lost: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func.isRequired,
}

export default Overlay
