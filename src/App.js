import React from 'react';

import './App.css'

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
    }
  }
  addTask = (task) => {
    const newTask = {
      task: task,
      id: new Date().toISOString(),
      completed: false,
    }
    this.setState({
      tasks: [...this.state.tasks, newTask],
    });
  }
  toggleCompleted = (clicked) => {
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (task.id === clicked) {
          return {
            ...task,
            completed: !task.completed,
          };
        } else {
          return task;
        }
      }),
    })
  }
  deleteCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter((task) => !task.completed),
    })
  }
  render() {
    return (
      <div>
        <TodoForm addTask={this.addTask} deleteCompleted={this.deleteCompleted} tasks={this.state.tasks}/>
        <TodoList tasks={this.state.tasks} toggleCompleted={this.toggleCompleted}/>
      </div>
    );
  }
}

export default App;
