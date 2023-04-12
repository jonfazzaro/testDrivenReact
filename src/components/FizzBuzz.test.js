import {render, fireEvent, cleanup} from '@testing-library/react'

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

  describe('given a default input', () => {
    beforeEach(()=>{
      cleanup()
      _subject = render(<FizzBuzz value={13} />)
    })

    it('renders with that value', () => {
      hasValue(13);
    });
  });

  function hasInput(testid, type) {
    const input = _subject.getByTestId(testid)
    expect(input).toHaveAttribute('type', type)
  }

  function hasValue(value) {
    expect(input()).toHaveValue(value)
  }

  function showsResult(expected) {
    const result = _subject.getByTestId('fb-result')
    expect(result).toHaveTextContent(expected)
  }

  function enter(number) {
    fireEvent.change(input(), { target: { value: number } })
  }

  function submit() {
    const command = _subject.getByTestId('fb-command')
    fireEvent.click(command)
  }

  function input() {
    return _subject.getByTestId('fb-input')
  }
})

jest.mock('../domain/fizzBuzzPlayer')
