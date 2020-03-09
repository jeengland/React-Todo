import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            text: '',
        }
    }
    handleChange = (event) => {
        this.setState({
            text: event.target.value,
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.text) {
            this.props.addTask(this.state.text);
            this.setState({ text: ' '});
        }
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' value={this.state.text} onChange={this.handleChange} placeholder='New task'/>
                <button type='submit'>Add Task</button>
                <button type='button' onClick={this.props.deleteCompleted}>Delete Completed</button>
            </form>
        )
    }
}

export default TodoForm;