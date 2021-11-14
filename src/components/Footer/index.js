import React from 'react';
import { Container, Frame, Icon, Text } from './styles';
import YotwSmall from '../../images/YOTW LOGO.png';
import YotwMedium from '../../images/YOTW LOGO@2x.png';

const Footer = () => {
  return (
    <Container>
      <>
        <Frame>
          <Icon src={YotwSmall} srcSet={`${YotwSmall} 1x, ${YotwMedium} 2x`} />
          <Text>©2021, YoTW. All Rights Reserved.</Text>
        </Frame>
        {/* <Text>About me:
          <Url href="https://johnny178.github.io/portfolio/" target="_blank" rel='noreferrer'>Johnny Lin</Url>
        </Text> */}
        <Text isHidden={true}>Source：交通部PTX服務平臺</Text>
      </>
    </Container>
  );
};

export default Footer;