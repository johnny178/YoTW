import React from 'react';
import { Button } from './styles';

const FilterBtn = ({ currentItem, data, setFilterData, isFilterMenuOpen }) => {
  const clickHandler = (e) => {
    let select = e.target.innerText;
    select !== '全部' ? setFilterData(e.target.innerText) : setFilterData('全台');
  };

  return (
    <Button
      onClick={e => clickHandler(e)}
      isActive={currentItem === data || (currentItem === '全台' && data === '全部')}
      isFilterMenuOpen={isFilterMenuOpen}
    >
      {data}
    </Button>
  );
};

export default FilterBtn;