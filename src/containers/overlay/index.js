import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { initGame } from '../../actions/game'
import Overlay from './component'

export class OverlayContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { win, lost, actions } = this.props
    return (
      <Overlay win={win} lost={lost} onButtonClick={actions.initGame} />
    )
  }
}

OverlayContainer.displayName = 'OverlayContainer'

OverlayContainer.propTypes = {
  actions: PropTypes.object.isRequired,
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

const mapDispatchToProps = (dispatch) => {
  const actions = Object.assign({}, { initGame })
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OverlayContainer)
