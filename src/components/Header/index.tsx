import React from 'react';

import { Container, NewButton, Content } from './styles';

import logoImg from '../../assets/logo.svg'

interface HeaderProps {
  onOpenNewTransactionModal(): void
}

const Header: React.FC<HeaderProps> = ({ onOpenNewTransactionModal }) => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Dt Money" />

        <NewButton
          onClick={onOpenNewTransactionModal}
        >
          Nova transação
        </NewButton>
      </Content>
    </Container>
  )
}

export default Header;