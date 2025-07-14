"use client"

import React, { useEffect, useState } from 'react'
import Header from '../Components/Header/Header'
import Card from '../Components/Task_card/Card'

const page = () => {

  const [Tasks, setTasks] = useState([]);

  // Update values from previoou session to the new session if available in local storage
  // Thiss will only run on the one time on every new session
  useEffect(
    () => {
      if(typeof window != "undefined"){
        let saved_Tasks = localStorage.getItem("saved_Tasks");
        if(saved_Tasks){
          setTasks(JSON.parse(saved_Tasks));
        }
      }
    }, []
  );
  // Locally save tasks whenever it is changed
  useEffect(
    () => {
      if( typeof window != "undefined"){
        localStorage.setItem("saved_Tasks", JSON.stringify(Tasks) );
      }
    }, [Tasks]
  );

  function handleToggleCompleted(id) {
    // Create a copy of the Tasks array
    const updatedTasks = [...Tasks];
    // Use a for loop to find and toggle the completed status
    for (let i = 0; i < updatedTasks.length; i++) {
      if (updatedTasks[i].id === id) {
        updatedTasks[i].completed = !updatedTasks[i].completed;
        break; // Stop after finding the task
      }
    }
    setTasks(updatedTasks);
  }

  return (
    <>

      <Header Tasks={Tasks} setTasks={setTasks} />

      <div className="tasks-container">

        {
          Tasks.map(
            (task_obj, index) => {
              return <Card key={task_obj.id} task={task_obj} list_num={index} handleToggleCompleted={handleToggleCompleted} />
            }
          )
        }

      </div>

    </>
  )
}

export default page