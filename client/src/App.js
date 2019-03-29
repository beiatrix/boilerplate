import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {apiResponse: ''}
  }

  async callAPI() {
    try {
      const res = await fetch('http://localhost:9000/testAPI')
      this.setState({
        apiResponse: res.text()
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
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p className="App-intro">{this.state.apiResponse}</p>
        </header>
      </div>
    );
  }
}

export default App;
