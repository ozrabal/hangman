import React from 'react'
import { connect } from 'react-redux'
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
    return (
      <Overlay text="win" onButtonClick={this.onButtonClick} />
    )
  }
}

OverlayContainer.displayName = 'OverlayContainer'

// WordContainer.propTypes = {
//   word: ImmutablePropTypes.list, // eslint-disable-line react/no-typos
// }

// WordContainer.defaultProps = {
//   word: new Immutable.List(),
// }

// const makeMapStateToProps = (state) => ({
//   word: state.game.getIn(['word']),
// })

export default connect()(OverlayContainer)
