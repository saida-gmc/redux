import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Edittask } from "./Action";

import { Modal, Button } from "react-bootstrap";
const ListTask = () => {
  const tasks = useSelector((state) => state.task);
  console.log(tasks[1]);

  const [newText, setNewText] = useState(tasks.description);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const dispatch = useDispatch();
  console.log(newText);

  const change = (e) => {
    setNewText(e.target.value);
  };
  console.log(tasks.id);
  const handleEdit = () => {
    dispatch(Edittask(tasks.id, newText));
    handleClose();
  };

  return (
    <div>
      <ul className="List">
        {tasks.map((el, key) => (
          <li key={el.id}>
            {el.description}
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListTask;
