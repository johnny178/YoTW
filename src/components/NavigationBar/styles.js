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
  background: ${({ scrollNav, isDetailPage }) => (scrollNav || isDetailPage ? '#B2E4FF' : 'transparent')};
  transition: 800ms background-color ease;
  z-index: 99;

  @media (max-width: 600px) {
    padding: 0 3% 0 5%;
  }
`;

export const Logo = styled(NavLink)``;

export const Icon = styled.img`
  margin-top: 2px;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const NavBtnCont = styled.div`
  display: flex;
`;

export const NavBtn = styled(NavLink)`
  color: #4D8FB2;//
  font-size: 1.375rem;
  padding: 2px 0 2px;
  font-weight: 900;
  
  &:not(:last-child) {
    margin-right: 20px;
  }

  &.${({ activeclassname }) => activeclassname} {
    border-bottom: 3px solid #283880;
    color: #283880;
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
    
    &:not(:last-child) {
      margin-right: 12px;
    }
  }
`;