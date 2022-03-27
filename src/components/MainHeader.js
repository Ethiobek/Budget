import React from "react";
import { Header } from "semantic-ui-react";

function MainHeader(propss) {
  const title = propss.title;
  const type = propss.type;
  return <Header as={type}>{title}</Header>;
}

export default MainHeader;
