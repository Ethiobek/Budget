import "./App.css";
import React from "react";
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
import ListHistory from "./components/ListHistory";

function App() {
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
      <ListHistory message="Buy Toshiba Laptop" value="1,152.00" isExpense />
      <ListHistory message="Graphics Design" value="250.00" />
      <ListHistory message="Gaming Chair" value="450.00" isExpense />
      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;
