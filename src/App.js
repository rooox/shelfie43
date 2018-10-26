import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();

    this.state={
      inventoryList: []
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount(){
  axios.get('/api/inventory').then((res)=> {
    this.setState({
      inventoryList: res.data
    });
  })
  }

  


  render() {
    return (
      <div className="App">
       <Header/>
       <Dashboard inventory={this.state.inventoryList}/>
       <Form componentDidMount={this.componentDidMount} 
       inventoryList={this.state.inventoryList}/>

       {/* //createNewProduct={this.createNewProduct} */}
       

      </div>
    );
  }
}

export default App;
