import React, { Component } from 'react';
import './App.css';
import {Todo} from './components';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {apiResponse: ''}
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

  // callAPI() {
  //   fetch('http://localhost:9000/testAPI')
  //   .then(res => res.text())
  //   .then(res => this.setState({ apiResponse: res }))
  //   .catch(err => err)
  // }

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
