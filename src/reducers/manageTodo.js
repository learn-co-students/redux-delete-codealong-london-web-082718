export default function manageTodo(state = {
  todos: [],
}, action) {

  // OLD:
  // switch (action.type) {
  //   case 'ADD_TODO':
  //     return { todos: state.todos.concat(action.payload.text) }
  switch (action.type) {
    case 'ADD_TODO':
      const todo = {
        id: Math.random()*10000000000000000,
        text: action.payload.text
      }
      return { todos: state.todos.concat(todo) };
    case 'DELETE_TODO':
      return { todos: state.todos.filter(todo => todo.id !== action.payload)}

    default:
      return state;
  }
}

//  Line 10 - 14
// Using Math.random()*10000000000000000 will generate a long random number each time a todo is created. 
// Now, instead of just storing an array of strings, we'll be storing an array of objects

