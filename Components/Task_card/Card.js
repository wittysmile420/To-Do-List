import React, { useState } from 'react';
import './Card.css';

const Card = ({ task, list_num, handleToggleCompleted }) => {
  const [showDesc, setShowDesc] = useState(false);

  const toggleDescription = () => setShowDesc(!showDesc);

  let descriptionBlock = null;
  if (showDesc == true) {
    descriptionBlock = (
      <div className="task-desc">
        <p>{task.task_descp}</p>
      </div>
    );
  }

  return (
    <div className="task-card" onClick={toggleDescription}>
      <div className="task-top">
        <input type='checkbox' checked={task.completed} onChange={
            (e) => {
                handleToggleCompleted(task.id);
            }
        } />
        <h3>Task {list_num + 1}: {task.task} (ID: {task.id})</h3>
      </div>

      {descriptionBlock}

    </div>
  );
};

export default Card;
