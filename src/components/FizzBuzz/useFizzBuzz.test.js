import Player from '../../domain/fizzBuzzPlayer'
import {useFizzBuzz} from "./useFizzBuzz";
import {act, renderHook} from "@testing-library/react-hooks";

jest.mock('../../domain/fizzBuzzPlayer')

describe('The FizzBuzz hook', () => {
    let _subject

    beforeEach(() => {
        Player.play = jest.fn()
        Player.play.mockReturnValue('RESULT')
        _subject = renderHook(useFizzBuzz).result
    })

    it('does not show a result yet', () => {
        expect(_subject.current.result).toEqual('')
    })

    describe('given a default input', () => {
        beforeEach(() => {
            _subject = renderHook(() => useFizzBuzz(13)).result
        })

        it('renders with that value', () => {
            expect(_subject.current.input).toEqual(13)
        });
    });

    describe('when played', () => {
        it('displays the result', () => {
            Player.play.mockReturnValue('fizz')
            act(() => {
                _subject.current.change({target: {value: 3}})
                _subject.current.submit({
                    preventDefault: () => {
                    }
                })
            })

            expect(_subject.current.result).toEqual('fizz')
        })
    })

})
