import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
      super();
      this.state = {
        monsters : [{
            name: 'Frankstein'
        },
      {
        name: 'Drackula'
      },
      {
        name: 'Zoombie'
      }
    ]
      }
  }
  // render method returns any
  // whenever we update the state the render method is called again 
  // such as onClincking a button we are changing thr state
  //everything inside render is jsx and here we are just micking an HTML code
   render (){
     return (<div className="App">
     <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
       <p>
       {this.state.name}
       </p>
       <button onClick = {() => this.setState({ name : 'hello Jatin Rana'})}>Change text</button>
       <a
         className="App-link"
         href="https://reactjs.org"
         target="_blank"
         rel="noopener noreferrer"
       >
         Learn React
       </a>
     </header>
   </div>)
    
   }
}


export default App;
