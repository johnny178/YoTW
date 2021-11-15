import React from 'react';
import { Container, Frame, Icon, Text } from './styles';
import YotwSmall from '../../images/footer-YoTW.png';
import YotwMedium from '../../images/footer-YoTW@2x.png';

const Footer = () => {
  return (
    <Container>
      {
        window.innerWidth > 600 ?
          <>
            <Icon src={YotwSmall} srcSet={`${YotwSmall} 1x, ${YotwMedium} 2x`} />
            <Text>©2021, YoTW. All Rights Reserved.</Text>
            <Text isHidden={true}>Source：交通部PTX服務平臺</Text>
          </> :
          <Frame>
            <Icon src={YotwSmall} srcSet={`${YotwSmall} 1x, ${YotwMedium} 2x`} />
            <Text>©2021, YoTW. All Rights Reserved.</Text>
          </Frame>
      }
    </Container>
  );
};

export default Footer;