import Player from "./fizzBuzzPlayer";

describe('The fizz buzz player', () => {

    expectResult("1", 1);
    expectResult("2", 2);
    expectResult("fizz", 3);

    // TODO
    // Draw the rest of the owl. 
    // The rules: https://en.wikipedia.org/wiki/Fizz_buzz

    function expectResult(expected, input) {
        it(`given ${input}, returns ${expected}`, () => {
            expect(Player.play(input)).toEqual(expected);
        });
    }
});