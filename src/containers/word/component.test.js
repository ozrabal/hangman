import React from 'react'
import renderer from 'react-test-renderer'
import Word from './component'

it('should render div', () => {
  const letter = renderer
    .create(<Word />)
    .toJSON()
  expect(letter).toMatchSnapshot()
})
