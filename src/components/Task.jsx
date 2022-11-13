import React from "react";


const Task = ( props ) => {

    return (
        <div className='task'
             style={{backgroundColor: props.completed ? "greenyellow" : "grey"}}
        >
            <h1 className='taskItem' style={
                {backgroundColor: props.completed ? "greenyellow" : "yellow " ,
                color: props.completed ? "white" : "black",
                borderStyle: props.completed ? "none" : "solid",
                opacity: props.completed ? "100%" : "70%"
                }
                }>{ props.taskName }</h1>
            <button className='taskItemButton' onClick={() => props.deleteTask(props.id)}> X </button>
            <button className='taskItemDone' onClick={() => props.completeTask(props.id)}
                style={{visibility: props.completed ? "none" : "visible", borderStyle: props.completed ? "none" : "solid"}}
            > Done </button>
        </div> 
    ) 
}

export default Task;
