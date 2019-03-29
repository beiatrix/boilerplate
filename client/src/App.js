import React, { Component } from 'react';
import './App.css';
import {Todo} from './components';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apiResponse: '',
      dbResponse: ''
    }
  }

  async callAPI() {
    try {
      const res = await fetch('http://localhost:9000/testAPI')
      const text = await res.text()
      this.setState({
        apiResponse: text
      })
    } catch (err) {
      console.error(err)
    }
  }

  async callDB() {
    try {
      const res = await fetch('http://localhost:9000/testDB')
      const text = await res.text()
      this.setState({
        dbResponse: text
      })
    } catch (err) {
      console.error(err)
    }
  }

  componentWillMount() {
    this.callAPI()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p className="App-intro">{this.state.apiResponse}</p>
        </header>
        <Todo></Todo>
      </div>
    );
  }
}

export default App;
