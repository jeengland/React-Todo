import React from 'react';
import './Todo.css'

class Todo extends React.Component {
    handleClick = (event) => {
        this.props.toggleCompleted(this.props.task.id);
    }
    render() {
        return (
            <li onClick={this.handleClick} key={this.props.task.id} className={this.props.task.completed ? 'completed' : 'uncompleted'}>{this.props.task.task}</li>
        )
    }
}

export default Todo;