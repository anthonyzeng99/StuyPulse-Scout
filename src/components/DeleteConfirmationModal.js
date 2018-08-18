import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export default class DeleteConfirmationModal extends React.Component {
  constructor(props) {
    super(props);
  }

  handleConfirmDelete = () => {
    this.props.handleModalResponse(true);
  }

  handleCancelDelete = () => {
    this.props.handleModalResponse(false);
  }

  render() {
    return (
      <div className="static-modal">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Delete Confirmation</Modal.Title>
          </Modal.Header>

          <Modal.Body>Are you sure you want to delete match {this.props.match} of Team {this.props.teamNumber}?</Modal.Body>

          <Modal.Footer>
            <Button onClick={this.handleCancelDelete}>Cancel</Button>
            <Button onClick={this.handleConfirmDelete} bsStyle="danger">Delete</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    )
  }
}
