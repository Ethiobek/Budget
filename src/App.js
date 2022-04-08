import "./App.css";
import React, { useEffect, useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Container, Grid, Segment, Statistic } from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import StatisticBalance from "./components/StatisticBalance";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";
import CurrencyFormat from "react-currency-format";
import CountSession from "./components/CountSession";
function App() {
  // States fot the system are hear
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setisExpense] = useState(false);
  const [entries, setEntries] = useState(intialEntry);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [totalExpenseValue, setTotalExpenseValue] = useState(0);
  const [totalIncomeValue, setTotalIncomeValue] = useState(0);
  const [balance, setBalance] = useState(0);

  //Updating the UI/UX -> calculating the totalExpense, totalIncome and Current balance
  useEffect(() => {
    let totalExpenses = 0;
    let totalIncomes = 0;
    entries.map((entry) => {
      if (entry.isExpense) {
        return (totalExpenses += Number(entry.value));
      }
      return (totalIncomes += Number(entry.value));
    });
    let balance = totalIncomes - totalExpenses;
    setBalance(balance);
    setTotalIncomeValue(totalIncomes);
    setTotalExpenseValue(totalExpenses);
  }, [entries]);

  function deleteEntry(id) {
    const result = entries.filter((entry) => entry.id !== id);
    console.log(`entries`, entries);
    console.log(`result`, result);
    setEntries(result);
  }

  function editEntry(id) {
    console.log(`edit entry ${id}`);
    if (id) {
      const index = entries.findIndex((entry) => entry.id === id);
      const entry = entries[index];
      setEntryId(entry.id);
      setDescription(entry.description);
      setValue(entry.value);
      setisExpense(entry.isExpense);
      setIsOpen(true);
      console.log(entries);
    }
  }
  // Edit list history from the previous entry
  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId);
      //For the specfic entry ID, update elements
      //index holds the specific element
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      //Updating the entry with the current updated values
      setEntries(newEntries);
      resetEntries(); // this helps to clear the previous entries in the text fields
    }
  }, [isOpen]);
  function addEntry() {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    });
    setEntries(result);
    resetEntries();
  }

  // Reseting the values of the entries to default value
  function resetEntries() {
    setDescription("");
    setValue("");
    setisExpense(true);
  }

  return (
    <Container>
      <MainHeader title="Budget App" />
      <CountSession />
      <Statistic size="small">
        <Statistic.Label>Your balance: </Statistic.Label>
        <Statistic.Value currency value={balance} balance={balance}>
          <CurrencyFormat
            value={balance}
            displayType={"text"}
            thousandSeparator={true}
            suffix={" Birr"}
          />
        </Statistic.Value>
      </Statistic>
      <Segment textAlign="center" color="grey">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <StatisticBalance
                size="tiny"
                color="green"
                label="Income:"
                value={totalIncomeValue}
                totalIncomeValue={totalIncomeValue}
              />
            </Grid.Column>
            <Grid.Column>
              <StatisticBalance
                size="tiny"
                color="red"
                label="Expenses:"
                value={totalExpenseValue}
                totalExpenseValue={totalExpenseValue}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <MainHeader type="h3" title="History" />
      <EntryLines
        entries={entries}
        editEntry={editEntry}
        deleteEntry={deleteEntry}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
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
      <ModalEdit
        addEntry={addEntry}
        isExpense={isExpense}
        description={description}
        value={value}
        setDescription={setDescription}
        setisExpense={setisExpense}
        setValue={setValue}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        entryId={entryId}
      />
    </Container>
  );
}

export default App;

const intialEntry = [
  {
    id: 1,
    description: "Salary from Remote Job",
    value: 6000,
    isExpense: false,
  },
  {
    id: 2,
    description: "Internet Cost for April month!",
    value: 1000,
    isExpense: true,
  },
  {
    id: 3,
    description: "Transport Cost to travel to Jordan!",
    value: 2536,
    isExpense: true,
  },
];
