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

interface AppState {
  fetching: boolean
}
class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)

    this.state = { fetching: false }
  }

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false })
    }
  }

  onClick = () => {
    this.props.fetchTodos()
    this.setState({ fetching: true })
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
        {this.state.fetching && 'Loading'}
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
