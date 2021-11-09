import styled from 'styled-components/macro';

//Select
export const Container = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  width: 30vw;

  @media (max-width: 992px) {
    width: 40vw;
  }
  @media (max-width: 768px) {
    width: 50vw;
  }
  @media (max-width: 600px) {
    width: 60vw;
  }
`;

export const SelectBtn = styled.button`
  background-color: white;
  box-shadow: inset -2px 1px 0px #00000015, -3px 3px 7px #0A4F8B;
  border-radius: 8px;
  letter-spacing: 0.4px;
  color: rgba(87, 87, 87, 0.4);
  text-align: center;
  padding: 7px 0;
  font-size: 1rem;
  cursor: pointer;

  &::before{
    content: '\\25BC';
    margin-right: 2rem;
  }

  &::after{
    content: '\\25BC';
    margin-left: 2rem;
  }
`;

//DropDownMenu
export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`;

export const DropdownItem = styled.button`
  cursor: pointer;
  background-color: ${({ isActive }) => isActive ? 'lightblue' : 'white'};
  color: black;
  text-align: center;
  box-shadow: inset -2px 1px 0px #00000015, -3px 3px 7px #0A4F8B;
  border-radius: 8px;
  letter-spacing: 0.4px;
  color: rgba(87, 87, 87, 0.4);
  padding: 7px 0;
  font-size: 1rem;

  &:not(:last-child) {
    margin-bottom: 5px;
  }

  @media(hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${({ isActive }) => isActive ? 'lightblue' : 'lightgray'};
    }
  }
`;