import React from 'react';
import { Header, Logo, NavBtn, NavBtnCont } from './styles';

const NavigationBar = () => {
  return (
    <Header>
      <Logo to='/'>YoTW</Logo>
      <NavBtnCont>
        <NavBtn to='scenicSpots' /*target="_blank" */ activeClassName='active'>景點</NavBtn>
        <NavBtn to='restaurant' activeClassName='active'>餐飲</NavBtn>
        <NavBtn to='hotels' activeClassName='active'>旅宿</NavBtn>
        <NavBtn to='activities' activeClassName='active'>活動</NavBtn>
      </NavBtnCont>
    </Header>
  );
};

export default NavigationBar;