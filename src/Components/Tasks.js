import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Edittask, Delete, Editdone } from "./Action";
import { Modal, Button } from "react-bootstrap";

const Tasks = ({ task }) => {
  console.log(task);
  // const [newText, setNewText] = useState(task.description);
  // const [show, setShow] = useState(false);
  // const handleShow = () => setShow(true);
  // const handleClose = () => setShow(false);
  // const dispatch = useDispatch();
  // console.log(newText);

  // const change = (e) => {
  //   setNewText(e.target.value);
  // };
  // console.log(task.id);
  // const handleEdit = () => {
  //   dispatch(Edittask(task.id, newText));
  //   handleClose();
  // };
  // const handleDelete = () => {
  //   dispatch(Delete(task.id));
  // };
  // const handleDone = () => {
  //   dispatch(Editdone(task.id));
  // };
  return (
    <div>
      {/* <h1>{task.description}</h1>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header>
          <Modal.Title>please enter the new task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input value={newText} onChange={change} type="text" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <button variant="primary" onClick={handleDelete}>
        Delete
      </button>
      <input type="checkbox" onClick={handleDone} /> */}
    </div>
  );
};

export default Tasks;
