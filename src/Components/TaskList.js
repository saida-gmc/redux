import React from "react";
import { useSelector } from "react-redux";
import Tasks from "./Tasks";

const TaskList = () => {
  const List = useSelector((state) => state.task);
  return (
    <div>
      <ul className="List">
        {List.map((el, key) => (
          <Tasks key={el.id} tasktodo={el} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
