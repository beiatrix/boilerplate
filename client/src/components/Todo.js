import React, {Component} from 'react'
import '../styles/Todo.css'

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

  // create
  onSubmitHandle(e) {
    e.preventDefault()

    this.setState({
      data: [...this.state.data, {
        id: Date.now(),
        title: e.target.item.value,
        done: false,
        date: new Date()
      }]
    })

    e.target.item.value = ''
  }

  // update
  onEditHandle(e) {
    this.setState({
      edit: true,
      id: arguments[0],
      title: arguments[1]
    })
  }

  onUpdateHandle(e) {
    e.preventDefault()

    this.setState({
      data: this.state.data.map(item => {
        if (item.id === this.state.id) {
          item['title'] = e.target.updatedItem.value
          return item
        }
        return item
      }),
      edit: false
    })
  }

  onCompleteHandle(e) {
    let id = arguments[0]

    this.setState({
      data: this.state.data.map(item => {
        if (item.id === id) {
          item['done'] = true
          return item
        }
        return item
      })
    })
  }

  // delete
  onDeleteHandle(e) {
    let id = arguments[0]
    console.log(arguments)

    this.setState({
      data: this.state.data.filter(item => item.id !== id)
    })
  }

  renderEditForm() {
    if (this.state.edit) {
      return (
        <form onSubmit={this.onUpdateHandle.bind(this)}>
          <input type="text" name="updatedItem" className="item" defaultValue={this.state.title} />
          <button className="update-add-item">Update</button>
        </form>
      )
    }
  }

  render() {
    return (
      <div>

      {this.renderEditForm()}

      <form onSubmit={this.onSubmitHandle.bind(this)}>
        <input type="text" name="item" className="item" />
        <button className="btn-add-item">Add</button>
      </form>

      <ul>
        {this.state.data.map(item => (
          <li className={ item.done ? 'done' : 'hidden' } key={item.id}>
            {item.title}
            <button onClick={this.onDeleteHandle.bind(this, item.id)}>Delete</button>
            <button onClick={this.onEditHandle.bind(this, item.id, item.title)}>Edit</button>
            <button onClick={this.onCompleteHandle.bind(this, item.id)}>Complete</button>
          </li>
        ))}
      </ul>
    </div>
    )
  }
}