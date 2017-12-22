import React from 'react'
import renderer from 'react-test-renderer'
import Letter from '../Letter'

it('should render a letter', () => {
  const letter = renderer
    .create(<Letter letter="a" masked={false} />)
    .toJSON()
  expect(letter).toMatchSnapshot()
})
