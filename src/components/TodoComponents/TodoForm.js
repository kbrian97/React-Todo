import React, { Component } from 'react'

export default class TodoForm extends Component {
    
    state = {
        title: ''
    }

    onchange = (e) => {
        //set the title to what ever the user types in
        this.setState({ [e.target.name]: e.target.value })
    }

    submit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' })
      }

    render() {
    return (
      <div>
        <form onSubmit={this.submit}>
            <input 
                type="text"
                name="title"
                placeholder="New Todo"
                value={this.state.title}
                onChange={this.onchange}/>
            <button type="submit">Add</button>
            <button onClick={this.props.clear}>Clear</button>
        </form>
      </div>
    )
  }
}

