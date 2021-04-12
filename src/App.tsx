import logo from './logo.svg';
import './App.css';
import Message from './Message';
import { Component } from 'react';


const initialState = {
  message: 'Typescript is cool.',
  name: 'Beth'
};

// define types of state variables
interface IState {
  message: string,
  name: string
}

// Component<props, state>
class App extends Component<any, IState> {
  readonly state: IState = initialState
   render() {
     return (
       <div className="App">
         <header className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
           <Message message={this.state.message} name={this.state.name} />
         </header>
       </div>
     );
   }
}

export default App;
