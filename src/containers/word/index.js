import React from 'react'
import { connect } from 'react-redux'
import ImmutablePropTypes from 'react-immutable-proptypes'
import Immutable from 'immutable'

import Word from './component'

export class WordContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { word } = this.props

    return (
      <Word word={word} />
    )
  }
}

WordContainer.displayName = 'WordContainer'

WordContainer.propTypes = {
  word: ImmutablePropTypes.list, // eslint-disable-line react/no-typos
}

WordContainer.defaultProps = {
  word: new Immutable.List(),
}

const makeMapStateToProps = (state) => ({
  word: state.game.getIn(['word']),
})

export default connect(makeMapStateToProps)(WordContainer)
