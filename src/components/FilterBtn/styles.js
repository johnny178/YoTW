import styled from 'styled-components/macro';

export const Button = styled.button`
  display: ${({ isFilterMenuOpen }) => !isFilterMenuOpen ? '' : 'none'};
  cursor: pointer;
  text-align: center;
  padding: 5px;
  font-size: 1rem;
  box-shadow: -3px 3px 6px #00000029;
  border-radius: 9px;
  background-color: ${({ isActive }) => isActive ? '#283880' : '#FFD965'};
  color: ${({ isActive }) => isActive ? 'white' : '#283880'};
  font-weight: 900;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: #283880;
      color: white;
    }
  }
`;