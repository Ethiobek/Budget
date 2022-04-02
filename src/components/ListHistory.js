import React, { useState } from "react";
import { Segment, Grid, Icon, Button } from "semantic-ui-react";
import ModalEdit from "./ModalEdit";
function ListHistory({
  id,
  description,
  value,
  isExpense = false,
  deleteEntry,
}) {
  const [isOpen, setIsOpen] = useState(false);
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
              <Icon name="edit" onClick={() => setIsOpen(true)} bordered />
              <Icon name="trash" onClick={() => deleteEntry(id)} bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <ModalEdit isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default ListHistory;
