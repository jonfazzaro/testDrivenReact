import {React, useState} from 'react';
import Player from '../fizzBuzzPlayer';

function FizzBuzz() {
    const [input, setInput] = useState(null);
    const [result, setResult] = useState("");

    return <div data-testid="fb-container">
        <input type="number" data-testid="fb-input" onChange={e => setInput(e.target.value)}/>
        <input type="submit" data-testid="fb-command" onClick={e => setResult(Player.play(input))}/>
        <div data-testid="fb-result">{result}</div>
    </div>;
}

export default FizzBuzz;