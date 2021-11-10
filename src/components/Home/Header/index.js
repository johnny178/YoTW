import React from 'react';
import { HeaderBackgroundImg, HeaderCont, Title } from './styles';

import HeaderImage from '../../../images/taipei-banner.png';

const Header = () => {
  return (
    <HeaderCont>
      <HeaderBackgroundImg src={HeaderImage} alt={'headerImage'} />
      <Title>Enjoy your trip with </Title>
    </HeaderCont>
  );
};

export default Header;