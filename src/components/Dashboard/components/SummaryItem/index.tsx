import React from 'react';

import { Container } from './styles';

interface SummaryItemProps {
  title: string;
  icon: string;
  currentValue: number;
}

const SummaryItem: React.FC<SummaryItemProps> = (props) => {
  const { title, icon, currentValue } = props;

  return (
    <Container>
        <header>
          <p>{title}</p>
          <img src={icon} alt={title} />
        </header>

        <strong>R$ {currentValue}</strong>
    </Container>
  )
}

export default SummaryItem;