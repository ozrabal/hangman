import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

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
  word: PropTypes.string,
}

WordContainer.defaultProps = {
  word: null,
}

const makeMapStateToProps = (state) => ({
  word: state.game.get('word'),
})

export default connect(makeMapStateToProps)(WordContainer)
