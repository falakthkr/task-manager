import React, { useState } from "react";
import {
  EditOutlined,
  CheckOutlined,
  DeleteOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Input, Button, Card } from "antd";

const TaskItem = ({ task, toggleComplete, editTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTask(task.id, newTitle);
    setIsEditing(false);
  };

  const actions = [
    !task.completed ? (
      <CheckOutlined onClick={() => toggleComplete(task.id)} key="completed" />
    ) : (
      <CloseOutlined onClick={() => toggleComplete(task.id)} key="completed" />
    ),
    <EditOutlined onClick={() => handleEdit()} key="edit" />,
    <DeleteOutlined onClick={() => deleteTask(task.id)} key="delete" />,
  ];

  return (
    <>
      {isEditing ? (
        <div style={{ display: "flex" }}>
          <Input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <Button onClick={() => handleSave()}>Save</Button>
        </div>
      ) : (
        <>
          <Card
            actions={actions}
            style={{
              minWidth: 300,
            }}
          >
            <Card.Meta
              title={
                <span
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                  }}
                >
                  {task.title}
                </span>
              }
            />
          </Card>
        </>
      )}
    </>
  );
};

export default TaskItem;
