import { TransactionProps } from "../../interfaces/transactions";

export const initialTransactions: TransactionProps[] = [
  {
    id: 1,
    name: "Desenvolvimento de Website",
    value: 12000.99,
    category: "Desenvolvimento",
    date: new Date(),
    type: 'deposit'
  },
  {
    id: 2,
    name: "Energia do escritório",
    value: 345.68,
    category: "Empresa",
    date: new Date(),
    type: 'debt'
  },
  {
    id: 3,
    name: "Assinatura mensal clientes",
    value: 8923.67,
    category: "Aplicação",
    date: new Date(),
    type: 'deposit'
  },
  {
    id: 4,
    name: "SQL Server plano",
    value: 4300.56,
    category: "Desenvolvimento",
    date: new Date(),
    type: 'debt'
  }
]