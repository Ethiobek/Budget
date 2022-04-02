import React from "react";
import { Button, Modal, Segment } from "semantic-ui-react";
import EntryForm from "./EntryForm";

function ModalEdit({ isOpen, setIsOpen }) {
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit transaction</Modal.Header>
      <Modal.Content>
        <EntryForm />
      </Modal.Content>
      <Modal.Actions>
        <Button close onClick={() => setIsOpen(false)}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalEdit;
