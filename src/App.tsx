import React, { useState } from "react";

import { GlobalStyle } from "./styles/global";

import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import NewTransactionModal from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hook/useTransactions";

const App: React.FC = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
    false
  );

  function handleCloseOrOpenNewTransactionModal() {
    !isNewTransactionModalOpen
      ? setIsNewTransactionModalOpen(true)
      : setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <TransactionsProvider>
        <Header
          onOpenNewTransactionModal={handleCloseOrOpenNewTransactionModal}
        />

        <Dashboard />

        <NewTransactionModal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseOrOpenNewTransactionModal}
        />

        <GlobalStyle />
      </TransactionsProvider>
    </>
  );
};

export default App;
