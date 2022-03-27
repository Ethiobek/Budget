import React from "react";
import { Statistic } from "semantic-ui-react";

function StatisticBalance({ align, label, size, value, color }) {
  return (
    <Statistic size={size} color={color}>
      <Statistic.Label style={{ textAlign: "left" }}>{label}</Statistic.Label>
      <Statistic.Value>{value}</Statistic.Value>
    </Statistic>
  );
}

export default StatisticBalance;
