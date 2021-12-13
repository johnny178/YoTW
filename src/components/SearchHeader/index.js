import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { SelectFilter } from '..';
import { arrRegions, regionTaiwan } from '../../constants/filterData';
import { getBackgroundImg } from '../../constants/pageData';
import FilterBtn from '../FilterBtn';
import { FilterBtnCont, HeaderBackgroundImg, HeaderCont, Searchbar, Title } from './styles';

const SearchHeader = ({
  searchValue = '',
  handleSearch = () => { },
  regionSelect = false,
  regionFilter = () => { },
  countrySelect = false,
  countryFilter = () => { }
}) => {
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const pathName = useLocation().pathname.slice(1);

  const getTitle = () => {
    switch (pathName) {
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

  return (
    <HeaderCont>
      {
        pathName === 'scenicSpots' ?
          <HeaderBackgroundImg src={getBackgroundImg(pathName, 600)[regionSelect]} srcSet={`${getBackgroundImg(pathName, 600)[regionSelect]} 600w, ${getBackgroundImg(pathName, 768)[regionSelect]} 768w, ${getBackgroundImg(pathName, 1000)[regionSelect]} 1000w`} alt={pathName} /> :
          <HeaderBackgroundImg src={getBackgroundImg(pathName, 600)} srcSet={`${getBackgroundImg(pathName, 600)} 600w, ${getBackgroundImg(pathName, 768)} 768w, ${getBackgroundImg(pathName, 1000)} 1000w`} alt={pathName} />
      }
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