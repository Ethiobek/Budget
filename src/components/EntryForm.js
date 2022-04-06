import React, { Fragment } from "react";
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
    <Fragment>
      <Form.Group widths={3}>
        <Form.Input
          icon="tags"
          width={12}
          label="Description"
          placeholder="Name of the transaction"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <Form.Input
          icon="dollar"
          width={2}
          label="Value"
          placeholder="100.00"
          iconPosition="left"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </Form.Group>
      <Segment compact>
        <Checkbox
          value={isExpense}
          checked={isExpense}
          onChange={(event) => setisExpense((oldstate) => !oldstate)}
          toggle
          label="is expense"
        />
      </Segment>
    </Fragment>
  );
}

export default EntryForm;
