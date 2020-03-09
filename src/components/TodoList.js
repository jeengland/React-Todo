import React from 'react';

import './TodoList.css';

import Todo from './Todo';

class TodoList extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Todo List</h1>
                <ul>
                    {this.props.tasks.map((task) => {
                        return (
                            <Todo task={task} toggleCompleted={this.props.toggleCompleted}/>
                        )
                    })}
                </ul>
            </React.Fragment>
        )
    }
}

export default TodoList;