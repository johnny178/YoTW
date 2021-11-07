import styled from 'styled-components/macro';

//Select
export const Container = styled.div`
  position: relative;
  margin-left: 10px;
`;

export const SelectBtn = styled.button`
  background-color: white;
  color: black;
  text-align: center;
  padding: 0 20px;
`;

//DropDownMenu
export const Menu = styled.div`
  position: absolute;
  top: 100%;
`;

export const DropdownItem = styled.button`
  background-color: ${({ isActive }) => isActive ? 'lightblue' : 'white'};
  color: black;
  text-align: center;
  width: 100%;

  &:hover {
    background-color: lightgray;
  }
`;