jest.mock('../domain/fizzBuzzPlayer')

import { render, fireEvent } from '@testing-library/react'
import Player from '../domain/fizzBuzzPlayer'
import FizzBuzz from './FizzBuzz'

describe('The FizzBuzz component', () => {
  let _subject

  beforeEach(() => {
    Player.play = jest.fn()
    Player.play.mockReturnValue('RESULT')
    _subject = render(<FizzBuzz />)
  })

  it('does not show a result yet', () => {
    const result = _subject.getByTestId('fb-result')
    expect(result).toHaveTextContent('')
  })

  // TODO
  // it has a number text box
  // it has a play button
  // given a number, when played, it displays the result

})
