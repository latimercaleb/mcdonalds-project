import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import MenuCombo from './menucombo'

const heading = "Enter a price cap here for recommendations"


class App extends Component {
      constructor(props){
            super(props)
            this.state = {
                  data:[]
            }
      }
      handleSubmit = (e) => {
            e.preventDefault()
             let PriceCap = this.input.value;
            axios.get(`localhost:3120/data/combi.js${PriceCap}`)
                  .then(response  =>{
                        let data = response.data
                        this.setState({data})
                  })
                  .catch(err => {
                        console.log("NOT FOUND",err)
                  })
      }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{heading}</h1>
        </header>
            <div className = "Menu-card">
                  <form onSubmit={this.handleSubmit}>
                        <label>Enter a price</label>
                        <input  name = 'PriceCap'
                                    ref={node => {this.input = node}}
                                    type = 'number'
                                    min = '1'
                                    max  ='20' />
                        <button>Generate Suggestions</button>
                        <MenuCombo data={this.state.data} />
                  </form>
             </div>
      </div>
    );
  }
}

export default App;
