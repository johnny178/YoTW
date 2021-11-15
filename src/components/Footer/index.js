import React from 'react';
import { Container, Icon, Text } from './styles';
import YotwSmall from '../../images/footer-YoTW.png';
import YotwMedium from '../../images/footer-YoTW@2x.png';

const Footer = () => {
  return (
    <Container>
      <>
        <Icon src={YotwSmall} srcSet={`${YotwSmall} 1x, ${YotwMedium} 2x`} />
        <Text>©2021, YoTW. All Rights Reserved.</Text>
        <Text isHidden={true}>Source：交通部PTX服務平臺</Text>
      </>
    </Container>
  );
};

export default Footer;