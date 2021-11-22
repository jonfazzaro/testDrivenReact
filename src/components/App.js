import './App.css';
import CalculatorForm from './CalculatorForm';
import fizzBuzzPlayer from '../domain/fizzBuzz/fizzBuzzPlayer';
import romanNumerals from '../domain/roman/romanNumerals';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>FizzBuzz</h3>
        <CalculatorForm algorithm={fizzBuzzPlayer.play}/>
        <h3>Roman Numerals</h3>
        <CalculatorForm algorithm={romanNumerals}/>
      </header>
    </div>
  );
}

export default App;
