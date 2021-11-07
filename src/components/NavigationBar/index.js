import React from 'react';
import { Header, Logo, NavBtn, NavBtnCont } from './styles';

const NavigationBar = () => {
  return (
    <Header>
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