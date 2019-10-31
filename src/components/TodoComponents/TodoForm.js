import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            itemName: ""
        };
    }

    handleChanges = e => {
        this.setState({
            itemName: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.itemName !== "") {
            this.props.addItem(this.state.itemName);
            this.setState({
                itemName: ""
            });
        }
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    onChnage={this.handleChanges}
                    type='text'
                    name='item'
                    value={this.state.itemName}
                />
                <button>Add</button>
            </form>
        );
    }
}

export default TodoForm;