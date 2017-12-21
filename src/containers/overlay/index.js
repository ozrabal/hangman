import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { initGame } from '../../actions/game'
import Overlay from './component'

export class OverlayContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      win, lost, word, actions,
    } = this.props
    const w = word.flatMap((index) => [index.letter]).toJS()
    return (
      <Overlay win={win} lost={lost} word={w} onButtonClick={actions.initGame} />
    )
  }
}

OverlayContainer.displayName = 'OverlayContainer'

OverlayContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  win: PropTypes.bool,
  lost: PropTypes.bool,
  word: PropTypes.object,
}

OverlayContainer.defaultProps = {
  win: false,
  lost: false,
  word: {},
}

const mapStateToProps = (state) => ({
  win: state.game.getIn(['win']),
  lost: state.game.getIn(['lost']),
  word: state.game.getIn(['word']),
})

const mapDispatchToProps = (dispatch) => {
  const actions = Object.assign({}, { initGame })
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OverlayContainer)
