import React, { useContext, useState } from "react";

import Modal from "react-modal";
import { FormContainer, TransactionTypeContainer, RadioBox } from "./styles";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

import { useTransactions } from "../../hook/useTransactions";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose(): void;
}

Modal.setAppElement("#root");

const NewTransactionModal: React.FC<NewTransactionModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const { createTransaction } = useTransactions();

  const [name, setName] = useState("");
  const [value, setValue] = useState(0);
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");

  async function handleCreateNewTransaction(event: React.FormEvent) {
    event.preventDefault();

    await createTransaction({
      name,
      value,
      type,
      category,
    });

    setName("");
    setValue(0);
    setType("deposit");
    setCategory("");

    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <FormContainer onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar nova transação</h2>

        <input
          placeholder="Título"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            isActive={type === "deposit"}
            activeColor="green"
            type="button"
            onClick={() => setType("deposit")}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            isActive={type === "debt"}
            activeColor="red"
            type="button"
            onClick={() => setType("debt")}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </FormContainer>
    </Modal>
  );
};

export default NewTransactionModal;
