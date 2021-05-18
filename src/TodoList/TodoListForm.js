import './TodoListForm.css';

import React, { useState } from 'react';


const TodoListForm = () => {
    const [ task, setTask ] = useState("")
    const [ taskList, setTaskList ] = useState([]);

    const onChangeHandler = (e) => {
        setTask(e.target.value)
    }

    const onSubmitHandler = () => {
        if(task !== "") {
            const taskDetails = {
                id: "AA" + Math.random(1, 9999),
                task: task,
                isCompleted: false
            };
            setTaskList([...taskList, taskDetails])
        }
    }

    const completeTask = (e, id) => {
        e.preventDefault()
        setTaskList(taskList.filter((task) => task.id !== id))
    }


    return (
        <div>
            <input 
                type="text" 
                placeholder="add a new todo..."
                onChange={onChangeHandler}
            />
            <button 
                type="submit"
                onClick={onSubmitHandler}
            >Add new task</button>
            <hr />
            
            {taskList.map(task => {
                return <div className="TodoItem" key={task.id}>
                    <label className="taskName" >{task.task}</label>
                    <button className="taskButton" onClick={(e) => completeTask(e, task.id)} >Complete</button>
                </div>
            })}
        </div>
    )
}

export default TodoListForm;