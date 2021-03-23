import React from "react";
import { useTransactions } from "../../../../hook/useTransactions";

import { Container } from "./styles";

const TrasactionsTable: React.FC = () => {
  const tableHeader = ["Título", "Valor", "Categoria", "Data"];

  const { transactions } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            {tableHeader.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {transactions.map((launch) => (
            <tr key={launch.id}>
              <td>{launch.name}</td>
              <td
                className={launch.type === "deposit" ? "deposit" : "withdraw"}
              >
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(launch.value)}
              </td>
              <td>{launch.category}</td>
              <td>
                {new Intl.DateTimeFormat("pt-BR").format(new Date(launch.date))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default TrasactionsTable;
