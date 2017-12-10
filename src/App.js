import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { requestWord, keyPressed } from './actions/game'
import Word from './containers/word'

import styles from './styles/index.css'

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.onKeyDown = this.onKeyDown.bind(this)
  }

  componentDidMount() {
    const { actions } = this.props
    document.addEventListener('keydown', this.onKeyDown, false)

    actions.requestWord()
  }

  onKeyDown(event) {
    const { actions } = this.props
    actions.keyPressed(event.key)
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <Word />
      </div>
    )
  }
}

App.displayName = 'App'

App.propTypes = {
  actions: PropTypes.object.isRequired,
}

App.defaultProps = {}

const mapDispatchToProps = (dispatch) => {
  const actions = Object.assign({}, { requestWord, keyPressed })
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

export default connect(null, mapDispatchToProps)(App)
