import React from 'react';

import {Container, Top, Logo, Title} from './styles';
import NubankLogo from '../../assets/images/Nubank_Logo.png';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = () => {
  return (
    <Container>
      <Top>
        <Logo source={NubankLogo} />
        <Title>Vinicius Arruda</Title>
      </Top>
      <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
    </Container>
  );
};

export default Header;
