import React from 'react'

// OLD: const Todo = props => <li>{props.text}</li>

const Todo = props => {
  return (
    <div>
      <span>{props.todo.text}</span>
      <button onClick={() => props.delete(props.todo.id)}>DELETE</button>
    </div>
  )
}

export default Todo;
