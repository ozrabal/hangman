import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export const Overlay = ({ win, lost, onButtonClick }) => (
  <div className={styles.overlayWrapper}>
    {win && <p>You Win</p>}
    {lost && <p>You Lost</p>}
    <button onClick={onButtonClick} />
  </div>
)

Overlay.displayName = 'Overlay'

Overlay.propTypes = {
  win: PropTypes.bool.isRequired,
  lost: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func.isRequired,
}

export default Overlay
