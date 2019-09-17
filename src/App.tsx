import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { Todo, fetchTodos } from './actions'
import { StoreState } from './reducers'
import { directive } from '@babel/types'

interface AppProps {
  todos: Todo[]
  fetchTodos(): any
}
class App extends Component<AppProps> {
  onClick = () => {
    this.props.fetchTodos()
  }

  render() {
    return (
      <div>
        {this.props.todos.map(todo => (
          <div>{todo.title}</div>
        ))}
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
  { fetchTodos }
)(App)
