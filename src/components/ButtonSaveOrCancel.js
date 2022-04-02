import React from "react";
import { Button } from "semantic-ui-react";
function ButtonSaveOrCancel({
  cancelMessage = "Cancel",
  okMessage = "Ok",
  cancelColor = "red",
  addEntry,
  description,
  value,
  isExpense,
}) {
  return (
    <Button.Group style={{ marginTop: 10 }}>
      <Button color={cancelColor}>{cancelMessage}</Button>
      <Button.Or />
      <Button primary onClick={() => addEntry(description, value, isExpense)}>
        {okMessage}
      </Button>
    </Button.Group>
  );
}

export default ButtonSaveOrCancel;
