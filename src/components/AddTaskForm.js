import React, { useState } from "react";
import { Input, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const AddTaskForm = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      addTask(taskTitle);
      setTaskTitle("");
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Input
        type="text"
        placeholder="Add new task"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />
      <Button
        onClick={(e) => handleSubmit(e)}
        type="outlined"
        shape="circle"
        icon={<PlusOutlined />}
      />
    </div>
  );
};

export default AddTaskForm;
