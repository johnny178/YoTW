import React from 'react';
import { Header, Logo, NavBtn, NavBtnCont } from './styles';

const NavigationBar = () => {
  return (
    <Header>
      <Logo to='/YoTW'>YoTW</Logo>
      <NavBtnCont>
        <NavBtn to='scenicSpots' /*target="_blank" */>景點</NavBtn>
        <NavBtn to='/restaurant'>餐飲</NavBtn>
        <NavBtn to='hotels'>旅宿</NavBtn>
        <NavBtn to='/activities'>活動</NavBtn>
      </NavBtnCont>
    </Header>
  );
};

export default NavigationBar;