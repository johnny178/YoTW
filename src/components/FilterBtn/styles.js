import styled from 'styled-components/macro';

export const Button = styled.button`
  text-align: center;
  padding: 5px 10px;
  font-size: 14px;
  background-color: ${({ isActive }) => isActive ? 'red' : 'lightyellow'};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${({ isActive }) => isActive ? 'red' : 'pink'};
    }
  }
`;