import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './styles.css';

const data = [
  {
    task: '',
    id: 0,
    done: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: data,
      otherState: "this other state"
    };
    this.toggleDone = this.toggleDone.bind(this);
  }

  toggleDone(taskId) {
    console.log('toggleDone: ', taskId);

    this.setState({
      todos: this.state.todos.map(task => {
        if (task.id === taskId){
        return {
          ...task,
          done: !task.done
        };
      }
      return task;
      })
    });
  }

  clearDone = () => {
    console.log("clearDone");
    this.setState({
      todos: this.state.todos.filter(task => {
        return !task.done;
      })
    });
  };

  addtask = taskName => {
    console.log("add task: ", taskName);

    this.setState({
      todos: [
        ...this.state.todos,
        {
          task: taskName,
          id: Date.now(),
          done: false
        }
      ]
    });
  };

  render() {
    return (
      <div>
        <div className=''>
          <h1>ToDo List</h1>
          <TodoForm
            addtask={this.addtask}
          />
        </div>
        <TodoList
          todos={this.state.todos}
          toggleDone={this.toggleDone}
          clearDone={this.clearDone}
        />
      </div>
    );
  }
}

export default App;
