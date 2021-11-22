import { render, fireEvent } from '@testing-library/react'
import CalculatorForm from './CalculatorForm';

describe('The Calculator form component', () => {
  let _subject, _algorithm

  beforeEach(() => {
    _algorithm = jest.fn()
    _algorithm.mockReturnValue('RESULT')
    _subject = render(<CalculatorForm algorithm={_algorithm} />)
  })

  it('does not show a result yet', () => {
    showsResult('')
  })

  it('has a number text box', () => {
    hasInput('calc-input', 'number')
  })

  it('has a button', () => {
    hasInput('calc-command', 'submit')
  })

  describe('when played', () => {
    it('displays the result', () => {
      _algorithm.mockReturnValue('fizz')
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
    const result = _subject.getByTestId('calc-result')
    expect(result).toHaveTextContent(expected)
  }

  function enter(number) {
    const input = _subject.getByTestId('calc-input')
    fireEvent.change(input, { target: { value: number } })
  }

  function submit() {
    const command = _subject.getByTestId('calc-command')
    fireEvent.click(command)
  }
})
