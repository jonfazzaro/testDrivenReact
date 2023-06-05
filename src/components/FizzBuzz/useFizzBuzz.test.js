import Player from '../../domain/fizzBuzzPlayer'
import {useFizzBuzz} from "./useFizzBuzz";
import {act, renderHook} from "@testing-library/react-hooks";

jest.mock('../../domain/fizzBuzzPlayer')

describe('The FizzBuzz hook', () => {
    let state

    beforeEach(() => {
        Player.play = jest.fn()
        Player.play.mockReturnValue('RESULT')
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
        it('displays the result', () => {
            Player.play.mockReturnValue('fizz')
            act(() => {
                state.current.change({target: {value: 3}})
                state.current.submit({
                    preventDefault: () => {
                    }
                })
            })

            expect(state.current.result).toEqual('fizz')
        })
    })

    function renderWith(initialValue) {
        state = renderHook(() => useFizzBuzz(initialValue)).result
    }
})

