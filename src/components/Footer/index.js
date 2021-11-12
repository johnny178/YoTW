import React from 'react';
import { Container, Text, Url } from './styles';

const Footer = () => {
  return (
    <Container>
      <Text>© YOTW 2021</Text>
      <Text>Contact me:
        <Url href="https://johnny178.github.io/portfolio/" target="_blank" rel='noreferrer'>Johnny Lin</Url>
      </Text>
      <Text>Source：交通部PTX服務平臺</Text>
    </Container>
  );
};

export default Footer;