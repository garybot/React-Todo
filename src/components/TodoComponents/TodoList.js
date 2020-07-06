import React from 'react';
import Todo from './Todo.js';

const TodoList = (props) => {
  return (
    <ul>
      {
        props.data
        .filter(item => {
          return item.task.includes(props.searchData);
        })
        .map(item => {
          return <Todo item={item} key={item.id} toggleComplete={props.toggleComplete}/>
        })
      }
    </ul>
  )
}

export default TodoList;