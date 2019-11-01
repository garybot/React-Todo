import React from 'react';

const TodoForm = (props) => {
  return (
    <form className="todo-form" onSubmit={props.handleSubmit}>
      <input 
        required 
        type="text" 
        name="task" 
        value={props.formData}
        placeholder="Add Todo" 
        onChange={props.handleChange} 
      />
      <button type="submit">Add Todo</button>
      <button type="button" onClick={props.clearCompleted}>Clear Completed</button>
    </form>
  )
}

export default TodoForm;