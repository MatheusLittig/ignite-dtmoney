import React, { useEffect, useState } from 'react';

import { TransactionProps } from '../../../../interfaces/transactions';
import { api } from '../../../../services/api';

import { Container } from './styles';

const TrasactionsTable: React.FC = () => {
  const tableHeader = ["Título", "Valor", "Categoria", "Data"];
  const [transactions, setTransactions] = useState<TransactionProps[]>()

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data))
  }, [])
  
  return (
    <Container>
      <table>
        <thead>
          <tr>
            {tableHeader.map(column => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {transactions?.map(launch => (
            <tr key={launch.name}>
              <td>{launch.name}</td>
              <td className={launch.type === 'deposit'
                ? 'deposit' : 'withdraw'
              }>
                R$ {launch.type === 'debt'
                  ? `-${launch.value}` : `${launch.value}`
                }</td>
              <td>{launch.category}</td>
              <td>{launch.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}

export default TrasactionsTable;