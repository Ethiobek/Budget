import "./App.css";
import React from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Button,
  Container,
  Form,
  FormGroup,
  FormInput,
  Grid,
  Header,
  Icon,
  Segment,
  Statistic,
} from "semantic-ui-react";
import MainHeader from "./components/MainHeader";

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
              <Statistic size="tiny" color="green">
                <Statistic.Label style={{ textAlign: "left" }}>
                  Incoming:
                </Statistic.Label>
                <Statistic.Value>1,045.50</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic size="tiny" color="red">
                <Statistic.Label style={{ textAlign: "left" }}>
                  Exspenses:
                </Statistic.Label>
                <Statistic.Value>623.50</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <MainHeader type="h3" title="History" />
      <Segment color="red">
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              Something
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              $10,00
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color="black">
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              Something else
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              $100,00
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color="green">
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              Something new
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              $20,00
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <MainHeader title="Add new transaction" type="h3" />
      <Form unstackable>
        <Form.Group>
          <Form.Input
            icon="tag"
            width={12}
            label="Description"
            placeholder="Name of the transaction"
          />
          <Form.Input
            icon="dollar"
            width={4}
            label="Value"
            placeholder="100.00"
            iconPosition="left"
          />
        </Form.Group>
        <Button.Group style={{ marginTop: 10 }}>
          <Button color="red">Cancel</Button>
          <Button.Or />
          <Button primary>Ok</Button>
        </Button.Group>
      </Form>
    </Container>
  );
}

export default App;
