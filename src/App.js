import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

//Components
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';


class App extends Component {
  constructor(){
    super()
    this.state={
      invList:[],
    }
  }

  componentDidMount(){
    axios.get('api/inventory').then(response=>{
      console.log(response)
      this.setState({invList:response.data})
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Shelfie</h1>
        </header>
        
        < Dashboard
          list={this.state.invList} />
        < Form />
        < Header />
      </div>
    );
  }
}

export default App;
