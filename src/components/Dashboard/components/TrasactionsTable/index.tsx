import React from 'react';

import { Container } from './styles';

import { tableData, tableHeader } from './constants';

const TrasactionsTable: React.FC = () => {
  
  return (
    <Container>
      <table>
        <thead>
          <tr>
            {tableHeader.map(column => (
              <th>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map(launch => (
            <tr>
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