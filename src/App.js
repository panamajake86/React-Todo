import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: DataTransferItem,
      otherState: "this other state"
    };
    this.toggleDone = this.toggleDone.bind(this);
  }

  toggleDone(itemId) {
    console.log('toggleDone: ', itemId);

    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === itemId){
        return {
          ...itemId,
          done: !item.done
        };
      }
      return item;
      })
    });
  }

  clearDone = () => {
    console.log("clearDone");
    this.setState({
      todos: this.state.todos.filter(item => {
        return !item.done;
      })
    });
  };

  addItem = itemName => {
    console.log("add item: ", itemName);

    this.setState({
      todos: [
        ...this.state.todos,
        {
          name: itemName,
          id: Date.now(),
          purchased: false
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
            addItem={this.addItem}
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
