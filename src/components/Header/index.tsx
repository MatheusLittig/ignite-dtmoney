import React from 'react';

import { Container, NewButton, Content } from './styles';

import logoImg from '../../assets/logo.svg'

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Dt Money" />

        <NewButton>Nova transação</NewButton>
      </Content>
    </Container>
  )
}

export default Header;