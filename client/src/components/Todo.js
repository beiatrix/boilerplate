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

  onSubmitHandle() {

  }

  onDeleteHandle() {

  }

  onEditHandle() {

  }

  onCompleteHandle() {

  }

  render() {
    return (
      <div>
      <form onSubmit={this.onSubmitHandle.bind(this)}>
        <input type="text" name="item" className="item" />
        <button className="btn-add-item">Add</button>
      </form>
      <ul>
        {this.state.data.map(item => (
          <li key={item.id}>
            {item.title}
            <button onClick={this.onDeleteHandle.bind(this, item.id)}>Delete</button>
            <button onClick={this.onEditHandle.bind(this, item.id, item.title)}>Edit</button>
            <button onClick={this.onCompleteHandle}>Complete</button>
          </li>
        ))}
      </ul>
    </div>
    )
  }
}