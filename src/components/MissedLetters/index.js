import React from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'

export const MissedLetters = ({ letters }) => (
  <div>{letters}</div>
)

MissedLetters.propTypes = {
  letters: ImmutablePropTypes.list.isRequired, // eslint-disable-line react/no-typos
}

export default MissedLetters
