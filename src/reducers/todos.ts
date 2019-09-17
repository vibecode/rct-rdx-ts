import { Todo, FetchTodosAction } from '../actions'
import { ActionTypes } from '../actions/types'

export const todosReducer = (
  state: Todo[] = [],
  { type, payload }: FetchTodosAction
) => {
  switch (type) {
    case ActionTypes.fetchTodos:
      return payload
    default:
      return state
  }
}
