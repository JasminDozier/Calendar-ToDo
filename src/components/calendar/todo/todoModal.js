import React from "react";
import { Modal, Button } from "react-bootstrap";

class TodoModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  render() {
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          Show Todos
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Today's Todos</Modal.Title>
          </Modal.Header>
          <Modal.Body>1. Exercise 2. Wash Clothes</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Edit
            </Button>
            <Button variant="secondary" onClick={this.handleClose}>
              Delete
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default TodoModal;
