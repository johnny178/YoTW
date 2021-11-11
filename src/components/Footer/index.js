import React from 'react';
import { Container, Frame, Text } from './styles';

const Footer = () => {
  return (
    <Container>
      <Text>© YOTW 2021</Text>
      <Frame>
        <Text>UI design: Michelle Liang</Text>
        <Text>Front-end: Johnny Lin</Text>
      </Frame>
      <Text>Source：交通部PTX服務平臺</Text>
    </Container>
  );
};

export default Footer;