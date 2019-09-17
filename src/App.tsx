import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { Todo, fetchTodos, deleteTodo } from './actions'
import { StoreState } from './reducers'

interface AppProps {
  todos: Todo[]
  fetchTodos: Function
  deleteTodo: typeof deleteTodo
}
class App extends Component<AppProps> {
  onClick = () => {
    this.props.fetchTodos()
  }

  deleteTodo = (id: number) => {
    this.props.deleteTodo(id)
  }

  renderList(): JSX.Element[] {
    return this.props.todos.map(todo => (
      <div key={todo.id} onClick={() => this.deleteTodo(todo.id)}>
        {todo.title}
      </div>
    ))
  }

  render() {
    return (
      <div>
        {this.renderList()}
        <button onClick={this.onClick}>Fetch Todos</button>
      </div>
    )
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return {
    todos
  }
}

export default connect(
  mapStateToProps,
  { fetchTodos, deleteTodo }
)(App)
