import React from "react";


const Todo = props => {
    return (
        <h3 
            onClick={() => props.isCompleted(props)}
            className={props.task.completed === true ? "completed" : ""}
        >
        {props.task.task}</h3>
    )
}

export default Todo