import React from "react";
import { Checkbox, Form, Segment } from "semantic-ui-react";

function EntryForm({
  description,
  value,
  isExpense,
  setDescription,
  setValue,
  setisExpense,
}) {
  return (
    <Segment>
      <Form.Group>
        <Form.Input
          icon="tag"
          width={12}
          label="Description"
          placeholder="Name of the transaction"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <Form.Input
          icon="dollar"
          width={4}
          label="Value"
          placeholder="100.00"
          iconPosition="left"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </Form.Group>
      <Segment>
        <Checkbox
          value={isExpense}
          onChange={(event) => setisExpense((oldstate) => !oldstate)}
          toggle
          label="is expense"
        />
      </Segment>
    </Segment>
  );
}

export default EntryForm;
