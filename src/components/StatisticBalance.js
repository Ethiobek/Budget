import React from "react";
import CurrencyFormat from "react-currency-format";
import { Statistic } from "semantic-ui-react";

function StatisticBalance({ align, label, size, value, color }) {
  return (
    <Statistic size={size} color={color}>
      <Statistic.Label style={{ textAlign: "left" }}>{label}</Statistic.Label>
      <Statistic.Value>
        <CurrencyFormat
          displayType={"text"}
          value={value}
          thousandSeparator={true}
          suffix={" Birr"}
        />
      </Statistic.Value>
    </Statistic>
  );
}

export default StatisticBalance;
