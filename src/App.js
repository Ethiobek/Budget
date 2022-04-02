import "./App.css";
import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Container, Grid, Segment, Statistic } from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import StatisticBalance from "./components/StatisticBalance";
import EntryLines from "./components/EntryLines";
function App({ addEntry }) {
  // Put every states hear
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setisExpense] = useState(false);

  const [entries, setEntries] = useState(intialEntry);

  function deleteEntry(id) {
    const result = entries.filter((entry) => entry.id !== id);
    console.log(`entries`, entries);
    console.log(`result`, result);
    setEntries(result);
  }

  function addEntry(description, value, isExpense) {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    });
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
      <NewEntryForm
        addEntry={addEntry}
        isExpense={isExpense}
        description={description}
        value={value}
        setDescription={setDescription}
        setisExpense={setisExpense}
        setValue={setValue}
      />
    </Container>
  );
}

export default App;

const intialEntry = [
  {
    id: 1,
    description: "Salary from Remote Job",
    value: "$6,000.00",
    isExpense: false,
  },
  { id: 2, description: "Internet Cost", value: "$67.00", isExpense: true },
  { id: 3, description: "Transport Cost", value: "$147.00", isExpense: true },
];
