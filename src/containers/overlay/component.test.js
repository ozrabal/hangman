import React from 'react'
import renderer from 'react-test-renderer'
import Overlay from './component'

it('should render div win', () => {
  const letter = renderer
    .create(<Overlay win lost={false} word={[]} onButtonClick={() => 'clicked'} />)
    .toJSON()
  expect(letter).toMatchSnapshot()
})

it('should render div lost', () => {
  const letter = renderer
    .create(<Overlay win={false} lost word={[]} onButtonClick={() => 'clicked'} />)
    .toJSON()
  expect(letter).toMatchSnapshot()
})
