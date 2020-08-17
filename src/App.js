import React, {Component} from 'react';
import './App.css';

import {CardList} from './components/Card-list/card-list.component';
import {Searchbox} from './components/search-box/search-box.component';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(users => this.setState({ monsters : users }));

  }

  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monsters => monsters.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Searchbox 
          placeholder = 'Search Monsters'
          handlingOnchange = {e =>this.setState({searchField : e.target.value})}
        />
        <CardList monsters = {filteredMonsters}/>
      </div>
    );
  }
}

export default App;
