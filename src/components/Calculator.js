import React, {useState} from 'react';

function Calculator({algorithm}) {
    const [input, setInput] = useState(null)
  const [result, setResult] = useState('')

  return (
    <div data-testid="calc-container">
      <form onSubmit={submit}>
        <input
          type="number"
          data-testid="calc-input"
          onChange={(e) => setInput(e.target.value)}
        />
        <input
          type="submit"
          data-testid="calc-command"
        />
      </form>
      <div data-testid="calc-result">{result}</div>
    </div>
  )

  function submit(event) {
    event.preventDefault();
    setResult(algorithm(input));
  }
}

export default Calculator;