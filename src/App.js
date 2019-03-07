import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    constructor() {
      super();

      this.state = {
        todos: [],
        newTodo: ""
        }
    }

    addTodo = (event) => {
      event.preventDefault()
      this.setState({
        todos: [
          { task: this.state.newTodo, id: Date.now(), completed: false },
          ...this.state.todos
        ],
        newTodo: ""
      })
    }

    changeHandler = (event) => {
      this.setState({ [event.target.name]: event.target.value })
    }

  /*
    isCompleted = () => {
      this.setState({
        
      })
    })
  }*/

    render() {
    return (
      <div>
        <h1>
          To Do List
        </h1>
        <TodoForm 
          addTodo={this.addTodo}
          changeHandler={this.changeHandler}
          newTodo={this.state.newTodo}
          clear={this.clearCompleted}
        />
        <TodoList taskList={this.state.todos} isCompleted={this.isCompleted}/>
      </div>
    );
  }
}

export default App
