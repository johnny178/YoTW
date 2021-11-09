import React from 'react';
import { Menu, DropdownItem, SelectBtn, Container } from './styles';

const SelectFilter = ({ currentItem, data, setFilterData, isOpen, setIsOpen }) => {
  const handleClick = selectedItem => {
    setIsOpen(prevIsOpen => !prevIsOpen);
    setFilterData(selectedItem);
  };

  return (
    <Container>
      <SelectBtn onClick={() => setIsOpen(prevIsOpen => !prevIsOpen)}>{currentItem}</SelectBtn>
      {isOpen &&
        <Menu>
          {
            data.map((item, index) =>
              <DropdownItem
                key={index}
                onClick={e => handleClick(e.target.innerText)}
                isActive={currentItem === item}
              >
                {item}
              </DropdownItem>
            )
          }
        </Menu>
      }
    </Container>
  );
};

export default SelectFilter;