import React from 'react';

const Todo = (props) => {
  const completed = props.item.completed ? "line-through" : "none";
  return (
    <li style={{textDecoration: completed}} onClick={() => props.toggleComplete(props.item.id)}>{props.item.task}</li>
  )
}

export default Todo;