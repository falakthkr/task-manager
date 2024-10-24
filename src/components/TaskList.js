import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, toggleComplete, editTask, deleteTask }) => {
  return (
    <ul>
      {tasks.length === 0 ? (
        <p>No tasks yet!</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            editTask={editTask}
            deleteTask={deleteTask}
          />
        ))
      )}
    </ul>
  );
};

export default TaskList;
