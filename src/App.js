import "./App.css";
import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Button,
  Container,
  Form,
  Grid,
  Header,
  Icon,
  Segment,
  Statistic,
} from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import StatisticBalance from "./components/StatisticBalance";
import EntryLines from "./components/EntryLines";
function App() {
  const [entries, setEntries] = useState(intialEntry);

  function deleteEntry(id) {
    const result = entries.filter((entry) => entry.id !== id);
    console.log(`entries`, entries);
    console.log(`result`, result);
    setEntries(result);
  }

  return (
    <Container>
      <MainHeader title="Budget App" />
      <Statistic size="small">
        <Statistic.Label>Your balance: </Statistic.Label>
        <Statistic.Value>5,854.78 </Statistic.Value>
      </Statistic>
      <Segment textAlign="center" color="grey">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <StatisticBalance
                size="tiny"
                color="green"
                label="Income:"
                value="10,458.50"
              />
            </Grid.Column>
            <Grid.Column>
              <StatisticBalance
                size="tiny"
                color="red"
                label="Expenses:"
                value="4,200.54"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <MainHeader type="h3" title="History" />
      <EntryLines entries={entries} deleteEntry={deleteEntry} />
      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;

const intialEntry = [
  {
    id: 1,
    message: "Salary from Remote Job",
    value: "$6,000.00",
    isExpense: false,
  },
  { id: 2, message: "Internet Cost", value: "$67.00", isExpense: true },
  { id: 3, message: "Transport Cost", value: "$147.00", isExpense: true },
];
