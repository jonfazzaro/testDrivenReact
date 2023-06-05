import Player from '../../domain/fizzBuzzPlayer'
import {useFizzBuzz} from "./useFizzBuzz";
import {act, renderHook} from "@testing-library/react-hooks";

jest.mock('../../domain/fizzBuzzPlayer')

describe('The FizzBuzz hook', () => {
    let state

    beforeEach(() => {
        Player.play = jest.fn()
        Player.play.mockReturnValue('fizz')
        renderWith(null)
    })

    it('does not show a result yet', () => {
        expect(state.current.result).toEqual('')
    })

    describe('given a default input', () => {
        beforeEach(() => {
            renderWith(13);
        })

        it('renders with that value', () => {
            expect(state.current.input).toEqual(13)
        });
    });

    describe('when played', () => {
        beforeEach(() => {
            input(3);
            submit();
        });

        it('displays the result', () => {
            expect(state.current.result).toEqual('fizz')
        })
    })

    function renderWith(initialValue) {
        state = renderHook(() => useFizzBuzz(initialValue)).result
    }

    function input(value) {
        act(() => {
            state.current.change({target: {value: value}})
        })
    }

    function submit() {
        act(() => {
            state.current.submit({
                preventDefault: () => {
                }
            })
        })
    }
})

