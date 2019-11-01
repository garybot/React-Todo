import React from 'react';

const Todo = (props) => {
  const completed = props.item.completed ? "line-through red" : "none";
  return (
    <li className="todo-item" style={{textDecoration: completed}} onClick={() => props.toggleComplete(props.item.id)}>{props.item.task}</li>
  )
}

export default Todo;