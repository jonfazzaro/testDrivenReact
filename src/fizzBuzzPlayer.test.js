import Player from "./fizzBuzzPlayer";

describe('The fizz buzz player', () => {

    expectResult("1", 1);
    expectResult("2", 2);
    expectResult("fizz", 3);
    expectResult("buzz", 5);
    expectResult("fizz", 6);
    expectResult("buzz", 10);
    expectResult("fizzbuzz", 15);
    expectResult("fizzbuzz", 90);

    function expectResult(expected, input) {
        it(`given ${input}, returns ${expected}`, () => {
            expect(Player.play(input)).toEqual(expected);
        });
    }
});