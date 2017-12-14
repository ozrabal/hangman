import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { requestWord, keyPressed } from './actions/game'
import Word from './containers/word'
import Overlay from './containers/overlay'
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

  componentDidUpdate() {
    const { attempts } = this.props
    if (attempts === 0) {
      document.removeEventListener('keydown', this.onKeyDown, false)
    }
  }

  onKeyDown(event) {
    const { actions } = this.props
    actions.keyPressed(event.key)
  }

  render() {
    const { win } = this.props
    return (
      <div className={styles.wrapper}>
        { win && <Overlay />}
        <Word />
      </div>
    )
  }
}

App.displayName = 'App'

App.propTypes = {
  actions: PropTypes.object.isRequired,
  attempts: PropTypes.number.isRequired,
  win: PropTypes.bool.isRequired,
}

App.defaultProps = {}

const mapStateToProps = (state) => ({
  attempts: state.game.getIn(['attempts']),
  win: state.game.getIn(['win']),
})

const mapDispatchToProps = (dispatch) => {
  const actions = Object.assign({}, { requestWord, keyPressed })
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
