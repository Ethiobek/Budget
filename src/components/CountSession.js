import React, { useEffect, useState } from "react";
import { Segment } from "semantic-ui-react";

function CountSession() {
  const [count, setCount] = useState(10);
  useEffect(() => {
    setTimeout(() => {
      if (count > 0) setCount(count - 1);
    }, 1000);
  });
  let status = ["Stop Working", "Keep Working"];
  return (
    <Segment compact>
      <h2>{count} Seconds Left</h2>
      <h1>{count === 0 ? status[0] : status[1]} </h1>
    </Segment>
  );
}

export default CountSession;
