import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const DeleteConfirmationModal = (props) => (
  <div className="static-modal">
    <Modal.Dialog>
      <Modal.Header>
        <Modal.Title>Delete Confirmation</Modal.Title>
      </Modal.Header>

      <Modal.Body>Are you sure you want to delete match {props.match} of Team {props.teamNumber}?</Modal.Body>

      <Modal.Footer>
        <Button>Cancel</Button>
        <Button bsStyle="danger">Delete</Button>
      </Modal.Footer>
    </Modal.Dialog>
  </div>
);

export default DeleteConfirmationModal;
