import {React} from 'react'
import {useFizzBuzz} from "./useFizzBuzz";

function FizzBuzz({value}) {
  const {input, result, submit, change} = useFizzBuzz(value);

  return (
    <div data-testid="fb-container">
      <form onSubmit={submit}>
        <input
          type="number"
          data-testid="fb-input"
          value={input}
          onChange={change}
        />
        <input
          type="submit"
          data-testid="fb-command"
        />
      </form>
      <div data-testid="fb-result">{result}</div>
    </div>
  )
}

export default FizzBuzz
