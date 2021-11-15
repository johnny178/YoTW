import React, { useState, useEffect } from 'react';
import { Header, Icon, Icon2, Logo, NavBtn, NavBtnCont } from './styles';
import { useLocation } from 'react-router';
import IconSmall from '../../images/YOTW LOGO.png';
import IconMedium from '../../images/YOTW LOGO@2x.png';

import HeaderIconSmall from '../../images/header-YoTW.png';
import HeaderIconMedium from '../../images/header-YoTW@2x.png';

const NavigationBar = () => {
  const location = useLocation();
  let isDetailPage = location.pathname.includes(location?.state?.ID || '_');
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 100) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    if (!isDetailPage) {
      window.addEventListener('scroll', changeNav);
    }
  }, []);

  return (
    <Header scrollNav={scrollNav} isDetailPage={isDetailPage}>
      <Logo to='/'>
        <Icon2 isHide={true} src={IconSmall} srcSet={`${IconSmall} 1x, ${IconMedium} 2x`} />
        <Icon isHide={true} src={HeaderIconSmall} srcSet={`${HeaderIconSmall} 1x, ${HeaderIconMedium} 2x`} />
      </Logo>
      <NavBtnCont>
        <NavBtn to='/' activeclassname='active'>首頁</NavBtn>
        <NavBtn to='scenicSpots' activeclassname='active'>景點</NavBtn>
        <NavBtn to='restaurant' activeclassname='active'>餐飲</NavBtn>
        <NavBtn to='hotels' activeclassname='active'>旅宿</NavBtn>
        <NavBtn to='activities' activeclassname='active'>活動</NavBtn>
      </NavBtnCont>
    </Header>
  );
};

export default NavigationBar;