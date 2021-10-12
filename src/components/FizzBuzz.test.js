jest.mock('../fizzBuzzPlayer')

import { render, fireEvent } from '@testing-library/react'
import Player from '../fizzBuzzPlayer'
import FizzBuzz from './FizzBuzz'

describe('The FizzBuzz component', () => {
  let _subject

  beforeEach(() => {
    Player.play = jest.fn()
    Player.play.mockReturnValue('RESULT')
    _subject = render(<FizzBuzz />)
  })

  it('does not show a result yet', () => {
    showsResult('')
  })

  it('has a number text box', () => {
    hasInput('fb-input', 'number')
  })

  it('has a button', () => {
    hasInput('fb-command', 'submit')
  })

  describe('when played', () => {
    it('displays the result', () => {
      Player.play.mockReturnValue('fizz')
      enter(3)
      submit()
      showsResult('fizz')
    })
  })

  function hasInput(testid, type) {
    const input = _subject.getByTestId(testid)
    expect(input).toHaveAttribute('type', type)
  }

  function showsResult(expected) {
    const result = _subject.getByTestId('fb-result')
    expect(result).toHaveTextContent(expected)
  }

  function enter(number) {
    const input = _subject.getByTestId('fb-input')
    fireEvent.change(input, { target: { value: number } })
  }

  function submit() {
    const command = _subject.getByTestId('fb-command')
    fireEvent.click(command)
  }
})
