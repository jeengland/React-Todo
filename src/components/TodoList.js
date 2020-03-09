import React from 'react';

class TodoList extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ul>
                    {this.props.tasks.map((task) => {
                        return (
                            <li key={task.id} className={task.completed ? 'completed' : 'uncompleted'}>{task.task}</li>
                        )
                    })}
                </ul>
            </React.Fragment>
        )
    }
}

export default TodoList;