import React from 'react';
import { SelectFilter } from '..';
import { arrRegions, regionTaiwan } from '../../constants/filterData';
import FilterBtn from '../FilterBtn';
import { FilterBtnCont, HeaderBackgroundImg, HeaderCont, Searchbar, Title } from './styles';

const SearchHeader = ({
  headerImage,
  searchValue = '',
  isFilterMenuOpen = false,
  setIsFilterMenuOpen = () => { },
  handleSearch = () => { },
  regionSelect = false,
  regionFilter = () => { },
  countrySelect = false,
  countryFilter = () => { }
}) => {
  return (
    <HeaderCont>
      <HeaderBackgroundImg src={headerImage} alt={'headerImage'} />
      <Title>Where you</Title>
      <Searchbar
        type="text"
        value={searchValue}
        placeholder={'搜尋'}
        onChange={e => handleSearch(e)}
      />
      <SelectFilter
        currentItem={regionSelect}
        data={arrRegions}
        setFilterData={(regionSelected) => regionFilter(regionSelected)}
        isOpen={isFilterMenuOpen}
        setIsOpen={prevIsFilterOpen => setIsFilterMenuOpen(prevIsFilterOpen)}
      />
      <FilterBtnCont>
        {
          regionTaiwan[regionSelect].map((item, index) => {
            return (
              <FilterBtn
                key={index}
                data={item}
                currentItem={countrySelect}
                setFilterData={(countrySelected) => countryFilter(countrySelected)}
                isFilterMenuOpen={isFilterMenuOpen}
              />
            );
          })
        }
      </FilterBtnCont>
    </HeaderCont>
  );
};

export default SearchHeader;