import React, { useState } from 'react';

import { GlobalStyle } from "./styles/global";

import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Modal from 'react-modal'

Modal.setAppElement('#root');

const App: React.FC = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleCloseOrOpenNewTransactionModal() {
    !isNewTransactionModalOpen
      ? setIsNewTransactionModalOpen(true)
      : setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <Header 
        onOpenNewTransactionModal={handleCloseOrOpenNewTransactionModal} 
      />

      <Dashboard />

      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseOrOpenNewTransactionModal}
      >
        <h2>Cadastrar nova transação</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
}

export default App;