import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  padding: 0 12% 0 5%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  position: fixed;
  background: ${({ scrollNav }) => (scrollNav ? '#B2E4FF' : 'transparent')};
  transition: 800ms background-color ease;
`;

export const Logo = styled(NavLink)`
  color: white;
  font-size: 20px;
`;

export const Image = styled.img``;

export const NavBtnCont = styled.div`
  display: flex;
`;

export const NavBtn = styled(NavLink)`
  color: white;
  font-size: 20px;
  padding: 2px 0;
  
  &:not(:last-child) {
    margin-right: 20px;
  }

  &.${({ activeclassname }) => activeclassname} {
    border-bottom: 3px solid #FFFF6F;
    color: #FFFF6F;
  }
`;