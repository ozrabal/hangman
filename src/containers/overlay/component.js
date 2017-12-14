import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export const Overlay = ({ text, onButtonClick }) => (
  <div className={styles.overlayWrapper}>
    {text}
    <button onClick={onButtonClick} />
  </div>
)

Overlay.displayName = 'Overlay'

Overlay.propTypes = {
  text: PropTypes.string,
  onButtonClick: PropTypes.func.isRequired,
}

Overlay.defaultProps = {
  text: null,
}


export default Overlay
