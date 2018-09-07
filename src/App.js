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
      currentProd:{
        id:'',
        name:'',
        price:'',
        img:''
      }
    }
    this.getProds = this.getProds.bind(this);
    this.currentProdHandle = this.currentProdHandle.bind(this);
  }

  

  getProds(){
    axios.get('/api/inventory').then(response=>{
      
      this.setState({invList:response.data})
    })
  }

  componentDidMount(){
    axios.get('/api/inventory').then(response=>{
      this.setState({invList:response.data})
    })
  }

  currentProdHandle(val){
    console.log(val)
    this.setState({name:val.name, price:val.price,img:val.img})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Shelfie</h1>
        </header>
        <div className='productSection'>

        < Dashboard getProds={this.getProds}
          list={this.state.invList}
          currentProdHandle={this.currentProdHandle}
          
          />

          {/* <div className='productCard'>
              <div></div>
              <div>
                <h5>Image URL:</h5>
                <input value={this.state.img}></input></div>
              <div>
                <h5>Product Name:</h5>
                <input value={this.state.name}></input></div>
              <div>
                <h5>Price:</h5>
                <input value={this.state.price}></input></div>
          </div> */}
        </div>
        < Form getProds={this.getProds}
              currentProd={this.state.currentProd}     
          />
          
        < Header />
      </div>
    );
  }
}

export default App;
