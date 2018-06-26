import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import MenuCombo from './menucombo'


class App extends Component {
      constructor(props){
            super(props)
            this.heading = "Enter a price cap here for recommendations"
            this.state = {
                  data:[]
            }
      }
      handleSubmit = (e) => {
            e.preventDefault()
            let route = "http://localhost:3001/"
            let PriceCap = this.input.value
            axios.get(`${route}?PriceCap=${PriceCap}`)
                  .then(response  => {
                        let data = response.data
                        console.log(data)
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
          <h1 className="App-title">{this.heading}</h1>
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
                        <MenuCombo data={this.state.data}/>
                  </form>
             </div>
      </div>
    );
  }
}

export default App;
