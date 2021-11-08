import React, { useState, useEffect } from 'react';
import { Header, Logo, NavBtn, NavBtnCont } from './styles';

const NavigationBar = () => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 100) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  return (
    <Header scrollNav={scrollNav}>
      <Logo to='/'>YoTW</Logo>
      <NavBtnCont>
        <NavBtn to='scenicSpots' /*target="_blank" */ activeclassname='active'>景點</NavBtn>
        <NavBtn to='restaurant' activeclassname='active'>餐飲</NavBtn>
        <NavBtn to='hotels' activeclassname='active'>旅宿</NavBtn>
        <NavBtn to='activities' activeclassname='active'>活動</NavBtn>
      </NavBtnCont>
    </Header>
  );
};

export default NavigationBar;