jest.mock("../fizzBuzzPlayer");

import { render, fireEvent } from '@testing-library/react';
import Player from '../fizzBuzzPlayer';
import FizzBuzz from './FizzBuzz';

Player.play = jest.fn();

describe("The FizzBuzz component", () => {
  let _subject;

  beforeEach(() => {
    Player.play.mockReturnValue("RESULT");
    _subject = render(<FizzBuzz />);
  });

  it("plays fizz buzz with the Player", () => {
    const container = _subject.getByTestId("fb-result");
    expect(container.textContent).toEqual("");
  });

  it('has a text box', () => {
    const input = _subject.getByTestId("fb-input");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "number");
  });

  it('has a button', () => {
    const command = _subject.getByTestId("fb-command");
    expect(command).toBeInTheDocument();
    expect(command).toHaveAttribute("type", "submit");
  });

  it('when played, displays the result', () => {
    const result = _subject.getByTestId("fb-result");
    const input = _subject.getByTestId("fb-input");
    const command = _subject.getByTestId("fb-command");
    Player.play.mockReturnValue("fizz");

    fireEvent.change(input, {target: {value: '3'}})
    fireEvent.click(command);
    
    expect(result).toHaveTextContent("fizz");
  });



});
