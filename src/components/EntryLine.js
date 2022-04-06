import React, { useState } from "react";
import { Segment, Grid, Icon, Button } from "semantic-ui-react";
import ModalEdit from "./ModalEdit";
function EntryLine({
  id,
  description,
  value,
  isExpense = false,
  deleteEntry,
  editEntry,
  isOpen,
  setIsOpen,
}) {
  return (
    <>
      <Segment color={isExpense ? "red" : "green"}>
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              {description}
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              {value}
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" onClick={() => editEntry(id)} bordered />
              <Icon name="trash" onClick={() => deleteEntry(id)} bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
}

export default EntryLine;
