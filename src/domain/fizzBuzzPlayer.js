const fizzBuzzPlayer = { play };

function play(input) {
  return fizz(input) + buzz(input) || input.toString();
}

const fizz = word.bind(null, 3, 'fizz');
const buzz = word.bind(null, 5, 'buzz');

function word(factor, noise, input) {
  if (input % factor === 0) return noise

  return ''
}

export default fizzBuzzPlayer;