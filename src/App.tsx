import logo from './logo.svg';
import './App.css';

function App() {
  // Basic Types
  let firstValue: string = 'Amanda';
  let secondValue: number = 7;
  let thirdValue: boolean = false;
  let fourthValue: number[] = [2, 4, 5]; // array of numbers, type is actually object
  let fifthValue: Array<string> = ['one', 'two']; // alternate to make an array

  // Complex Types
  let aTuple: [string, number] = ['Amanda', 7]; // tuple can have different types inside an array 
  enum Codes { first = 1, second = 2 };
  // use any sparingly
  let firstName: any = 'Steve';
  // return type for functions that do not return anything use void
  const warning = (): void => {
    console.warn('warning!');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The value {firstValue} is of {typeof firstValue} type!
        </p>
        <p>
          The value {secondValue} is of {typeof secondValue} type!
        </p>
        <p>
          The value {thirdValue} is of {typeof thirdValue} type!
        </p>
        <p>
          The value {fourthValue} is of {typeof fourthValue} type!
        </p>
        <p>
          The value {fifthValue} is of {typeof fifthValue} type!
        </p>
        <p>
          The value {aTuple[0]} is of {typeof aTuple[0]} type!
        </p>
        <p>
          The value {firstName} is of {typeof firstName} type!
        </p>
      </header>
    </div>
  );
}

export default App;
