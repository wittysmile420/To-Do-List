"use client"

import React, { use, useState } from 'react'

import './Header.css'

const Header = (properties) => {

    const [task, settask] = useState("");
    const [task_descp, settask_descp] = useState("");
    const [id, setid] = useState("");
    const [completed, setcompleted] = useState(false);

  return (
    <>
        <form onSubmit={
            (event_obj) => {
                event_obj.preventDefault();
                const btn_id = event_obj.nativeEvent.submitter.id

                for(let i = 0 ; i < properties.Tasks.length ; i++){
                    if(properties.Tasks[i].id == id && btn_id == "add"){
                        alert("ID already exists, please enter a unqiue ID");

                        return;
                    }
                }

                if(btn_id == "remove" && !id){
                    alert("Please enter the task ID to remove");
                    return;
                }

                if(task && task_descp && id  && btn_id == "add"){
                    properties.setTasks(
                        [...properties.Tasks, { id: id, task: task, task_descp: task_descp, completed: completed}]
                    );
                    settask("");
                    settask_descp("");
                    setid("");
                    setcompleted(false);
                }
                else if(id && btn_id == "remove"){
                    properties.setTasks(
                        properties.Tasks.filter( (task_obj) => {
                            if(task_obj.id != id) return true;
                            else return false;
                        })
                    );
                    settask("");
                    settask_descp("");
                    setid("");
                    setcompleted(false);
                }
                else{
                    alert("Please fill in all the fields");
                }
            }
        }>
            <input type="text" placeholder='Enter Task' value={task} onChange={
                (event_obj) => {
                    settask(event_obj.target.value);
                }
            } />
            <input type="text" placeholder='Enter Task Description' value={task_descp} onChange={
                (event_obj) => {
                    settask_descp(event_obj.target.value);
                }
            } />
            <input type="number" placeholder='Create Unique id(nums only)' value={id} onChange={
                (event_obj) => {
                    event_obj.target.value = parseInt(event_obj.target.value);
                    setid(event_obj.target.value);
                }
            }/>
            <button type="submit" id='add'>Add Task</button>
            <button type='submit' id='remove'> Remove task</button>
        </form>

    </>
  )
}

export default Header