import React from "react";
import { Segment, Grid, Icon } from "semantic-ui-react";
function ListHistory({
  segColor = "black",
  message,
  value,
  isExpense = false,
}) {
  return (
    <Segment color={isExpense ? "red" : "green"}>
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column width={10} textAlign="left">
            {message}
          </Grid.Column>
          <Grid.Column width={3} textAlign="right">
            {value}
          </Grid.Column>
          <Grid.Column width={3}>
            <Icon name="edit" bordered />
            <Icon name="trash" bordered />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default ListHistory;
