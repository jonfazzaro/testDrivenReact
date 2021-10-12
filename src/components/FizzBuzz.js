import { React, useState } from 'react'
import Player from '../domain/fizzBuzzPlayer'

function FizzBuzz() {
  const [input, setInput] = useState(null)
  const [result, setResult] = useState('')

  return (
    <div data-testid="fb-container">
      <form onSubmit={submit}>
        <input
          type="number"
          data-testid="fb-input"
          onChange={(e) => setInput(e.target.value)}
        />
        <input
          type="submit"
          data-testid="fb-command"
        />
      </form>
      <div data-testid="fb-result">{result}</div>
    </div>
  )

  function submit(event) {
    event.preventDefault();
    setResult(Player.play(input));
  }
}

export default FizzBuzz
