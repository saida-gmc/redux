import React from "react";
import { useSelector } from "react-redux";

const TaskList = () => {
  const List = useSelector((state) => state.tasks);
  return (
    <div>
      <ul className="List">
        {List.map((el, key) => (
          <li key={el.id}>{el.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
