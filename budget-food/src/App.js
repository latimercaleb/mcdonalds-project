import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import MenuCombo from './menucombo'
const heading = "Enter a price cap here for recommendations"

class App extends Component {
      handleSubmit = (e) => {
            e.preventDefault()
            axios.get('https://jsonplaceholder.typicode.com/comments?postId=PriceCap')
                  .then(response  =>{
                        console.log("FOUND", response)
                  } )
                  .catch(err => {
                        console.log("NOT FOUND",err)
                  })
      }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{heading}</h1>
        </header>
            <div>
                  <form onSubmit={this.handleSubmit}>
                        <label>Enter a price</label>
                        <input  name = 'PriceCap'
                                    type = 'number'
                                    min = '1'
                                    max  ='20'/>
                        <button>Generate Suggestions</button>
                  </form>
             </div>
      </div>
    );
  }
}

export default App;
