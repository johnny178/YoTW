import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { SelectFilter } from '..';
import { arrRegions, regionTaiwan } from '../../constants/filterData';
import FilterBtn from '../FilterBtn';
import { FilterBtnCont, HeaderBackgroundImg, HeaderCont, Searchbar, Title } from './styles';

const SearchHeader = ({
  headerImage,
  searchValue = '',
  handleSearch = () => { },
  regionSelect = false,
  regionFilter = () => { },
  countrySelect = false,
  countryFilter = () => { }
}) => {
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname.slice(1)) {
      case 'scenicSpots':
        return 'GO';
      case 'hotels':
        return 'LIVE';
      case 'activities':
        return 'PLAY';
      case 'restaurant':
        return 'EAT';
      default:
        return 'YOTW';
    }
  };

  // const getImg = () => {
  //   switch (location.pathname.slice(1)) {
  //     case 'scenicSpots':
  //       return 'GO';
  //     case 'hotels':
  //       return 'LIVE';
  //     case 'activities':
  //       return 'PLAY';
  //     case 'restaurant':
  //       return 'EAT';
  //     default:
  //       return 'YOTW';
  //   }
  // }

  return (
    <HeaderCont>
      <HeaderBackgroundImg src={headerImage} alt={'headerImage'} />
      <Title value={getTitle()}>Where you</Title>
      <Searchbar
        type='text'
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