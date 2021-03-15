import React from 'react';

import { Container, Summary } from './styles';

import SummaryItem from './components/SummaryItem';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import TrasactionsTable from './components/TrasactionsTable';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Summary>
        <SummaryItem title="Entradas" icon={incomeImg} currentValue={8000} />
        <SummaryItem title="Saídas" icon={outcomeImg} currentValue={-5000} />
        <SummaryItem title="Total" icon={totalImg} currentValue={3000} />
      </Summary>

      <TrasactionsTable />
    </Container>
  )
}

export default Dashboard;