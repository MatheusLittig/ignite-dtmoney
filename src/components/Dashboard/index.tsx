import React, { useContext } from "react";

import { Container, Summary } from "./styles";

import SummaryItem from "./components/SummaryItem";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import TrasactionsTable from "./components/TrasactionsTable";
import { useTransactions } from "../../hook/useTransactions";

const Dashboard: React.FC = () => {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.value;
        acc.total += transaction.value;
      } else {
        acc.debts += transaction.value;
        acc.total -= transaction.value;
      }

      return acc;
    },
    {
      deposits: 0,
      debts: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <Summary>
        <SummaryItem
          title="Entradas"
          icon={incomeImg}
          currentValue={new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.deposits)}
        />
        <SummaryItem
          title="Saídas"
          icon={outcomeImg}
          currentValue={new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.debts)}
        />
        <SummaryItem
          title="Total"
          icon={totalImg}
          currentValue={new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        />
      </Summary>

      <TrasactionsTable />
    </Container>
  );
};

export default Dashboard;
