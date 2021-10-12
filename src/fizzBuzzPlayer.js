export default { play }

function play(input) {
  return fizz(input) + buzz(input) 
       || input.toString();
}

const fizz = i => word(i, 3, 'fizz');
const buzz = i => word(i, 5, 'buzz');

const word = (input, factor, result) =>
    (input % factor === 0) ? result : "";
