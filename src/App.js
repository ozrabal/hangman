import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'

import { initGame, keyPressed } from './actions/game'
import { validKey } from './utils'
import Word from './containers/word'
import Guy from './components/Guy'
import MissedLetters from './components/MissedLetters'
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
    actions.initGame()
  }

  onKeyDown(event) {
    const { actions } = this.props
    if (validKey(event.keyCode)) {
      actions.keyPressed(event.key)
    }
  }

  render() {
    const {
      win,
      lost,
      missed,
      attempts,
    } = this.props
    return (
      <div className={styles.wrapper}>
        {(win || lost) && <Overlay />}
        <MissedLetters letters={missed} />
        <Guy stage={attempts} />

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
  lost: PropTypes.bool.isRequired,
  missed: ImmutablePropTypes.list.isRequired, // eslint-disable-line react/no-typos
}

App.defaultProps = {}

const mapStateToProps = (state) => ({
  attempts: state.game.getIn(['attempts']),
  win: state.game.getIn(['win']),
  lost: state.game.getIn(['lost']),
  missed: state.game.getIn(['missed']),
})

const mapDispatchToProps = (dispatch) => {
  const actions = Object.assign({}, { initGame, keyPressed })
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
