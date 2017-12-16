import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// import ImmutablePropTypes from 'react-immutable-proptypes'
// import Immutable from 'immutable'

import Overlay from './component'

export class OverlayContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props)
    this.onButtonClick = this.onButtonClick.bind(this)
  }

  onButtonClick() {
    console.log('click') // eslint-disable-line no-console
  }

  render() {
    const { win, lost } = this.props
    return (
      <Overlay win={win} lost={lost} onButtonClick={this.onButtonClick} />
    )
  }
}

OverlayContainer.displayName = 'OverlayContainer'

OverlayContainer.propTypes = {
  win: PropTypes.bool,
  lost: PropTypes.bool,
}

OverlayContainer.defaultProps = {
  win: false,
  lost: false,
}

const mapStateToProps = (state) => ({
  win: state.game.getIn(['win']),
  lost: state.game.getIn(['lost']),
})

export default connect(mapStateToProps)(OverlayContainer)
