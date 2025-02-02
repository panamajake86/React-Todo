// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className='todo-list'>
            {props.todos.map(task => (
                <Todo
                    key={task.id}
                    task={task}
                    toggleDone={props.toggleDone}
                />
            ))}
            <button className='clear-btn' onClick={props.clearDone}>
                Clear Done
            </button>
        </div>
    );
};

export default TodoList;