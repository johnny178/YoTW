import React from 'react';
import { CentralImage, Container, Content, DetailCont, EeasternImage, Frame, Icon, NorthernImage, SouthernImage, Title } from './styles';
import { HOME_REGION, HOME_DETAIL } from '../../../constants/pageData';

import Northern from '../../../images/Home-northern.png';
import NorthernIcon from '../../../images/Home-northern-icon.png';

import Central from '../../../images/Home-central.png';
import CentralIcon from '../../../images/Home-central-icon.png';

import Southern from '../../../images/Home-southern.png';
import SouthernIcon from '../../../images/Home-southern-icon.png';

import Eeastern from '../../../images/Home-eastern.png';
import EeasternIcon from '../../../images/Home-central-icon.png';

const Region = () => {
  return (
    <Container>
      <Frame gridName={'img1'}>
        <NorthernImage src={Northern} alt={'northern'} />
      </Frame>

      <Frame gridName={'text1'}>
        <Icon top={'25%'} left={'0px'} src={NorthernIcon} alt={'northernIcon'} />
        <DetailCont top={'30%'} left={'40px'}>
          <Title>{HOME_REGION[0]}</Title>
          <Content>{HOME_DETAIL[0]}</Content>
        </DetailCont>
      </Frame>

      <Frame gridName={'text2'}>
        <Icon top={'10%'} left={'65px'} src={CentralIcon} alt={'northernIcon'} />
        <DetailCont top={'17%'} left={'105px'}>
          <Title>{HOME_REGION[1]}</Title>
          <Content>{HOME_DETAIL[1]}</Content>
        </DetailCont>
      </Frame>

      <Frame gridName={'img2'}>
        <CentralImage src={Central} alt={'central'} />
      </Frame>

      <Frame gridName={'img3'} >
        <SouthernImage src={Southern} alt={'central'} />
      </Frame>

      <Frame gridName={'text3'}>
        <Icon top={'25%'} left={'0px'} src={SouthernIcon} alt={'northernIcon'} />
        <DetailCont top={'30%'} left={'40px'} >
          <Title>{HOME_REGION[2]}</Title>
          <Content>{HOME_DETAIL[2]}</Content>
        </DetailCont>
      </Frame>

      <Frame gridName={'text4'}>
        <Icon top={'10%'} left={'60px'} src={EeasternIcon} alt={'northernIcon'} />
        <DetailCont top={'17%'} left={'100px'}>
          <Title>{HOME_REGION[3]}</Title>
          <Content>{HOME_DETAIL[3]}</Content>
        </DetailCont>
      </Frame>

      <Frame gridName={'img4'} >
        <EeasternImage src={Eeastern} alt={'central'} />
      </Frame>
    </Container>
  );
};

export default Region;