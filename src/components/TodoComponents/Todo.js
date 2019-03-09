import React from "react";
import TodoList from './TodoList';

class Todo extends React.Component {
    render(){
        return( 
            this.props.todos.map((todo) => (
                <TodoList key={ todo.id } todo={ todo } markComplete={this.props.markComplete}/>
            )
            )
        )
    }
}
export default Todo