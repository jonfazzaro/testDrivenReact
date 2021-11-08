import { React, useState } from 'react'
import Player from '../domain/fizzBuzzPlayer'

function FizzBuzz() {
  const [result, setResult] = useState('')

  return (
    <div data-testid="fb-container">
      <div data-testid="fb-result">{result}</div>
    </div>
  )

}

export default FizzBuzz
