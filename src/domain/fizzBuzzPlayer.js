const fizzBuzzPlayer = { play };

function play(input) {
  if (input === 3)
    return "fizz";
  return input.toString();
}

export default fizzBuzzPlayer;