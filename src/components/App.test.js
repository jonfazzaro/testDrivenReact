import {render} from '@testing-library/react'
import App from './App'
import FizzBuzz from "./FizzBuzz/FizzBuzz";

jest.mock('./FizzBuzz/FizzBuzz')

describe('The App component', () => {
    let _subject

    beforeEach(() => {
        FizzBuzz.mockReturnValue(<></>)
        _subject = render(<App />)
    })

    it('shows FizzBuzz', () => {
        expect(FizzBuzz).toHaveBeenCalledWith(
            expect.objectContaining({value:1}),
            expect.anything()
        )
    });
})
