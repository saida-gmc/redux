import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Edittask, Editdone } from "./Action";
import { Modal, Button } from "react-bootstrap";

const Tasks = ({ tasktodo }) => {
  /* console.log(tasktodo);*/
  const [newText, setNewText] = useState(tasktodo.description);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const dispatch = useDispatch();
  // console.log(newText);

  const change = (e) => {
    setNewText(e.target.value);
  };

  const handleEdit = () => {
    dispatch(Edittask(tasktodo.id, newText));
    handleClose();
  };

  const handleDone = () => {
    dispatch(Editdone(tasktodo.id));
  };

  return (
    <div className="todo">
      <h1>{tasktodo.description}</h1>
      <Button variant="primary" onClick={handleShow}>
        Edit Task
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

      <input type="checkbox" className="input" onClick={handleDone} />
    </div>
  );
};

export default Tasks;
