import React, { Component } from 'react';
import './App.css';

//Components
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';


class App extends Component {
  constructor(){
    super()
    this.state={
      invList:[{name:'Oreos',price:5,image:'https://i5.walmartimages.ca/images/Enlarge/005/700/999999-66721005700.jpg'},{name:'Marshmellow',price:2,image:'https://www.altpress.com/wp-content/uploads/2018/07/lucky_charms_header-1.jpg'},{name:'Scallops',price:3,image:'https://cms.splendidtable.org/sites/default/files/styles/w2000/public/scallops_0.jpg?itok=8zIMd2fR'}],
    }
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
