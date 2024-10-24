import React from "react";
import { Button } from "antd";

const TaskFilters = ({ setFilter, currentFilter }) => {
  return (
    <div className="task-filters">
      <Button
        variant="outlined"
        onClick={() => setFilter("all")}
        className={currentFilter === "all" ? "active" : ""}
      >
        All
      </Button>
      <Button
        variant="outlined"
        onClick={() => setFilter("completed")}
        className={currentFilter === "completed" ? "active" : ""}
      >
        Completed
      </Button>
      <Button
        variant="outlined"
        onClick={() => setFilter("incomplete")}
        className={currentFilter === "incomplete" ? "active" : ""}
      >
        Incomplete
      </Button>
    </div>
  );
};

export default TaskFilters;
