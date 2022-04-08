import React from "react";
import { Button, Icon, Modal } from "semantic-ui-react";
import EntryForm from "./EntryForm";

function ModalEdit({
  isOpen,
  setIsOpen,
  setDescription,
  setValue,
  setisExpense,
  description,
  isExpense,
  value,
}) {
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit transaction</Modal.Header>
      <Modal.Content>
        <EntryForm
          setDescription={setDescription}
          setValue={setValue}
          setisExpense={setisExpense}
          description={description}
          value={value}
          isExpense={isExpense}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setIsOpen(false)} primary>
          <Icon name="save"></Icon>
          Save
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalEdit;
