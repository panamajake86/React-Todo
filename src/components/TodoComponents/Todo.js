import React from 'react';

const Todo = props => {
    let todoClass = "task";
    if (props.task.done) {
        todoClass = todoClass + " done";
    }

    const handleClick = () => {
        props.toggleDone(props.task.id);
    };

    return (
        <div onClick={handleClick} className={todoClass}>
            <p>{props.task.task}</p>
        </div>
    );
};

export default Todo;