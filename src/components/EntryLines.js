import React, { map } from "react";
import { Container } from "semantic-ui-react";
import ListHistory from "./ListHistory";

function EntryLines({ entries, deleteEntry }) {
  return (
    <Container>
      {entries.map((entry) => (
        <ListHistory key={entry.id} {...entry} deleteEntry={deleteEntry} />
      ))}
    </Container>
  );
}

export default EntryLines;
