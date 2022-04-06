import React from "react";
import { Button } from "semantic-ui-react";
function ButtonSaveOrCancel({ addEntry }) {
  return (
    <Button.Group style={{ marginTop: 10 }}>
      <Button>Cancel</Button>
      <Button.Or />
      <Button primary onClick={() => addEntry(addEntry)}>
        Add
      </Button>
    </Button.Group>
  );
}

export default ButtonSaveOrCancel;
