import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Addtask } from "./Action";

const AddTask = () => {
  const dispatch = useDispatch();
  const [des, setDes] = useState("");
  const handleAdd = () => {
    dispatch(
      Addtask({
        id: Math.random(),
        description: des,
        isDone: false,
      })
    );
    empty();
  };
  const empty = () => ({
    Id: "",
    description: "",
    isDone: "",
  });
  const change = (e) => setDes(e.target.value);
  empty();

  const [newTask, SetNewTask] = useState({
    Id: Math.random(),
    description: "",
    isDone: false,
  });
  return (
    <div>
      <input onChange={change} type="text" />
      <button onClick={handleAdd}>add todo</button>
    </div>
  );
};
export default AddTask;
