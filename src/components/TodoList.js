import React from 'react';

import Todo from './Todo';

class TodoList extends React.Component {
    render() {
        return (
            <React.Fragment>
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