import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { SelectFilter } from '..';
import { arrRegions, regionTaiwan } from '../../constants/filterData';
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

  const getImg = () => {
    switch (pathName) {
      case 'scenicSpots':
        return {
          '全部地區': [
            'https://images.unsplash.com/photo-1583395145517-1e3177037600?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1583395145517-1e3177037600?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80',
            'https://images.unsplash.com/photo-1583395145517-1e3177037600?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
          ],
          '北部': [
            'https://images.unsplash.com/photo-1508248467877-aec1b08de376?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1508248467877-aec1b08de376?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80',
            'https://images.unsplash.com/photo-1508248467877-aec1b08de376?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
          ],
          '中部': [
            'https://images.unsplash.com/photo-1606659102514-41ed411f3c13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1606659102514-41ed411f3c13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80',
            'https://images.unsplash.com/photo-1606659102514-41ed411f3c13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80'
          ],
          '南部': [
            'https://images.unsplash.com/photo-1606551507367-587a92192aff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1606551507367-587a92192aff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80',
            'https://images.unsplash.com/photo-1606551507367-587a92192aff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1173&q=80'
          ],
          '東部': [
            'https://images.unsplash.com/photo-1564023967307-27f9d19d3474?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1564023967307-27f9d19d3474?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80',
            'https://images.unsplash.com/photo-1564023967307-27f9d19d3474?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80'],
          '離島': [
            'https://images.unsplash.com/photo-1568110929146-c5e9854fc7a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1568110929146-c5e9854fc7a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80',
            'https://images.unsplash.com/photo-1568110929146-c5e9854fc7a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80'
          ],
        };
      case 'hotels':
        return [
          'https://images.unsplash.com/photo-1576354302919-96748cb8299e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80',
          'https://images.unsplash.com/photo-1576354302919-96748cb8299e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80',
          'https://images.unsplash.com/photo-1576354302919-96748cb8299e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80'
        ];
      case 'activities':
        return [
          'https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
          'https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80',
          'https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
        ];
      case 'restaurant':
        return [
          'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
          'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80',
          'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80'
        ];
      default:
        return [
          'https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
          'https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80',
          'https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
        ];
    }
  };

  return (
    <HeaderCont>
      {
        pathName === 'scenicSpots' ?
          <HeaderBackgroundImg src={getImg()[regionSelect][2]} srcSet={`${getImg()[regionSelect][0]} 600w, ${getImg()[regionSelect][1]} 768w, ${getImg()[regionSelect][2]} 1000w`} alt={pathName} /> :
          <HeaderBackgroundImg src={getImg()[2]} srcSet={`${getImg()[0]} 600w, ${getImg()[1]} 768w, ${getImg()[2]} 1000w`} alt={pathName} />
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