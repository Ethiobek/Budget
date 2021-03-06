import React from "react";
import CurrencyFormat from "react-currency-format";
import { Segment, Grid, Icon } from "semantic-ui-react";
function EntryLine({
  id,
  description,
  value,
  isExpense = false,
  deleteEntry,
  editEntry,
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
              <CurrencyFormat
                value={value}
                displayType={"text"}
                thousandSeparator={true}
                suffix={" Birr"}
              />
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
