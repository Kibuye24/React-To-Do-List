import React from "react";


const Job = ( props ) => {

    return (
        <div className='task'>
            <h1 className='taskItem' style={{backgroundColor: props.completed ? "green" : "yellow"}}>{ props.taskName }</h1>
            <button className='taskItemButton'onClick={() => props.deleteTask(props.id)}> X </button>
            <button className='taskItemDone' style={{content: props.completed ? "Bravo" : "Done"}} onClick={() => props.completeTask(props.id)}> Done </button>
        </div> 
    ) 
}

export default Job;