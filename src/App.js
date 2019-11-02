import React, { Component } from "react";
import logo from "./logo.svg";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from './components/search-box/search-box.component';
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  // when react renders or puts the component on the dom FOR THE FIRST TIME. and calls the block of code inside it.
  componentDidMount() {
    // this fetch returns us is a promise and promise gives us the body
    //of the response
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json()) // this response gets the array of objects
      .then(users => this.setState({ monsters: users })) // this is getting one by one object.
      .catch(error => console.log("exception"));
  }

  //arrow functions allows to set this when this thing is defined.
  // when this class is loaded by react then it sees oh this class
  // has the arrow function and it see this then it binds it to the component
  //i.e with this class
  handleChange = e =>{
      this.setState({ searchField : e.target.value});
  }

  // render method returns any
  // whenever we update the state the render method is called again
  // such as onClincking a button we are changing thr state
  //everything inside render is jsx and here we are just micking an HTML code
  //any parameter passed in the card list is a param
  // here item b/w the cardList  is the children
  // ex Rana in this example is the children
  //map iterates over all the elements
  //here we are using key because it hepls react to keep a track which item is getting changed and do not render everything.
  // <CardList name="jatin"> here name is the prop for CardList comnponentg
  // children are the things b/w <CardList>   </CardList>
  //In input if we use the type as password then it will hide the words
  //on change call the function when event is triggered.
  render() {
    // destructuring allows to pull out the contents and put them inside the {}
    // this is equal to
    //const monsters = this.state.monsters;
    //const searchFiels = this.state.searchField;
    //it is just the easier way.
    // here monsters and searchField are the new variables not the one in the state.
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
      <h1>Monosters Rolodex</h1>
        <SearchBox 
        placeholder="search monster"
        //here e is the synthetic method
        handleChange = {this.handleChange}
        />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}
export default App;
