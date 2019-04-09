import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm';
import Todo from './components/TodoComponents/Todo';
import uuid from 'uuid'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
      state = {
        todos: [
            {
              id: uuid.v4(),
              title:'Finish Homework',
              completed: false
            },
            {
              id: uuid.v4(),
              title:'Excercise',
              completed: false
            },
            {
              id: uuid.v4(),
              title:'Buy Groceries',
              completed: false
            }
        ]
      }


      addTodo = (title) => {
        const newTodo = {
          id: uuid.v4(),
          title,
          completed: false
        }
        this.setState({ todos: [...this.state.todos, newTodo]
        })
      }

      markComplete = (id) => {
        this.setState({ todos: this.state.todos.map(todo => {
          //if current todo is ea
          if(todo.id === id) {
            todo.completed = !todo.completed
          }
          return todo;
        })})
      }

      clearTask = () => {
        this.setState({ todos: [...this.state.todos.filter(todo => todo.completed !== true)] })
      }

    render() {
    return (
      <div>
        <h1>
          To Do List
        </h1>
        <Todo todos={this.state.todos} markComplete={this.markComplete} />
        <TodoForm clear={this.clearTask} addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App
