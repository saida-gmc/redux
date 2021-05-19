import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

const StatusTasks = () => {
  const tasks = useSelector((state) => state.task);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>
              List of not done tasks ({tasks.filter((el) => !el.isDone).length})
            </h1>

            {tasks
              .filter((el) => !el.isDone)
              .map((el, key) => (
                <h2 key={el.id}>{el.description}</h2>
              ))}
          </Col>
          <Col>
            {" "}
            <h1>
              List of done tasks ({tasks.filter((el) => el.isDone).length})
            </h1>
            {tasks
              .filter((el) => el.isDone)
              .map((el, key) => (
                <h2 key={el.id}>{el.description}</h2>
              ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StatusTasks;
