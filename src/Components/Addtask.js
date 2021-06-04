import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Addtask } from "./Action";
import { Button } from "react-bootstrap";

const AddTask = () => {
  const dispatch = useDispatch();
  const [des, setDes] = useState("");
  // const empty = () => setDes("");
  const handleAdd = (e) => {
    e.preventDefault();
    des &&
      dispatch(
        Addtask({
          id: Math.random(),
          description: des,
          isDone: false,
        })
      );
    setDes("");
  };

  const change = (e) => setDes(e.target.value);

  return (
    <div class="add">
      <h1>ToDo Application</h1>
      <input onChange={change} type="text" />
      <Button variant="success" onClick={handleAdd}>
        add todo
      </Button>
    </div>
  );
};
export default AddTask;
