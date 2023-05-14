import React from "react";

const Task = ({ title, description, deleteTask, index}) => {
  return (
    <div className="task">
      <div className="task-notes">
        <p>Title: {title}</p>
        <span>Description: {description}</span>
      </div>
      <button onClick={() => deleteTask(index)} className="task-button">Clear Notes</button>
    </div>
  );
};

export default Task;
