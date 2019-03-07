import React from 'react'

function TodoForm(props){

    return(
        <div>
            <form onSubmit={props.addTodo}>
            <input
                type="text"
                name="newTodo"
                placeholder="New Task"
                value={props.newTodo}
                onChange={props.changHandler}
                />
            <button type="submit" onClick={props.addTodo}>Add Todo</button>
            <button onClick={props.clear}>Clear Completed</button>
            </form>
        </div>
    );
}

    export default TodoForm;
