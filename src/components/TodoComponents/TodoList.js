import React, { Component } from 'react'

export class TodoList extends Component {
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
            } 
        }
    

    
    render() {
        const { id,title } = this.props.todo;
    return (
    <div style={this.getStyle()} onClick={this.props.markComplete.bind(this, id)}>
        <p> { title } </p>
    </div>
    )
  }
}


export default TodoList
