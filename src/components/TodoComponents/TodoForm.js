import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            taskName: ""
        };
    }

    handleChanges = e => {
        console.log("Typing");
        this.setState({
            taskName: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.taskName !== "") {
            this.props.addtask(this.state.taskName);
            this.setState({
                taskName: ""
            });
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    onChange={this.handleChanges}
                    type='text'
                    placeholder='Tasks'
                    name='task'
                    value={this.state.taskName}
                />
                <button type='submit'>Add</button>
            </form>
        );
    }
}

export default TodoForm;