import React from 'react';

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
      tasks: [...this.state.tasks, newTask]
    });
  }
  render() {
    return (
      <div>
        <TodoForm addTask={this.addTask}/>
        <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
