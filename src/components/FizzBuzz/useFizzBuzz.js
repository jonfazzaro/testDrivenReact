import {useState} from "react";
import Player from '../../domain/fizzBuzzPlayer'

export function useFizzBuzz({initialValue = null}) {
    const [input, setInput] = useState(initialValue)
    const [result, setResult] = useState('')

    const change = event => setInput(event.target.value)

    function submit(event) {
        event.preventDefault();
        setResult(Player.play(input));
    }

    return {input, result, submit, change};
}