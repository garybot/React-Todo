import React from 'react';

import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';
import SearchForm from './components/TodoComponents/SearchForm.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ], 
      formData: "",
      searchData: ""
    };
  }

  handleSearchChange = evt => {
    this.setState({searchData: evt.target.value});
  }
  handleFormChange = evt => {
    this.setState({formData: evt.target.value});
  }

  handleFormSubmit = evt => {
    evt.preventDefault();
    const newTask = {
      task: this.state.formData, 
      id: Date.now(), 
      completed: false
    }
    this.setState({data: [...this.state.data, newTask]});
    this.setState({formData: ""})
    evt.target.reset()
  }

  toggleComplete = (id) => {
    this.setState({
      data: this.state.data.map(item => {
        return item.id === id ? {...item, completed: !item.completed} : item
      })
    });
  }

  clearCompleted = () => {
    this.setState({
      data: this.state.data.filter(item => {
        return !item.completed;
      })
    })
  }

  render() {
    return (
      <div className="app">
        <h2>Welcome to your Todo App!</h2>
        <SearchForm handleChange={this.handleSearchChange}/>
        <TodoList 
          data={this.state.data}
          searchData={this.state.searchData} 
          toggleComplete={this.toggleComplete} 
        />
        <TodoForm 
          formData={this.formData} 
          handleChange={this.handleFormChange} 
          handleSubmit={this.handleFormSubmit} 
          clearCompleted={this.clearCompleted} 
        /> 
      </div>
    );
  }
}

export default App;
