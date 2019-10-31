import React from 'react';

const Todo = props => {
    let todoClass = "item";
    if (props.item.done) {
        todoClass = todoClass + " done";
    }

    const handleClick = () => {
        props.toggleDone(props.item.id);
    };

    return (
        <div onClick={handleClick} className={todoClass}>
            <p>{props.item.name}</p>
        </div>
    );
};

export default Todo;