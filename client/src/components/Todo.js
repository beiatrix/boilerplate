import React, {Component} from 'react'

const fakeData = [{
  id: '1',
  title: 'Buy Milk',
  done: false,
  date: new Date()
}, {
  id: '2',
  title: 'Meeting with Ali',
  done: false,
  date: new Date()
}, {
  id: '3',
  title: 'Tea break',
  done: false,
  date: new Date()
}, {
  id: '4',
  title: 'Go for a run.',
  done: false,
  date: new Date()
}]

export default class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      edit: false,
    id: null,
    data: fakeData
    }
  }
  render() {
    return (
      <h1>hiya</h1>
    )
  }
}