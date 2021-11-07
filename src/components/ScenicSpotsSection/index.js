import React, { useState, useRef, useCallback } from 'react';
import { ResultItem, SelectFilter } from '..';
import { getAllScenicSpots, getSpecificScenicSpots } from '../../api';
import { countryDic, arrRegions, regionTaiwan } from '../../constants/filterData';
import { PAGE_NUM } from '../../constants/pageData';
import useHttp from '../../hooks/useHttp';
import FilterBtn from '../FilterBtn';
import {
  Container,
  FilterCont,
  FilterBtnCont,
  Searchbar,
  GridCont,
} from './styles';

const ScenicSpotsSection = () => {
  const [countrySelect, setCountrySelect] = useState('全台');
  const [regionSelect, setRegionSelect] = useState('全部地區');
  const [searchValue, setSearchValue] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const setFilterName = () => {
    let name = '';

    if ((regionSelect !== '全部地區' && countrySelect === '全台')) {
      name += searchValue.length !== 0 ? ` and contains(NAME,'${searchValue}') and (` : ' and (';
      regionTaiwan[regionSelect].slice(1).map((region, index) => {
        name += (index !== 0 ? ' or ' : '') + `contains(City,'${region}')`;
      });
      name += ')';
    } else {
      name += searchValue.length !== 0 ? ` and contains(NAME,'${searchValue}')` : '';
    }
    return name;
  };

  const callAPI = async (pageNumber) => {
    let resp = [];
    let filterName = setFilterName();
    let searchParam = new URLSearchParams([
      ['$top', PAGE_NUM],
      ['$filter', `Picture/PictureUrl1 ne null${filterName}`],
      ['$skip', (pageNumber - 1) * PAGE_NUM],
      ['$format', 'JSON'],
    ]);

    if (countrySelect === '全台') {
      resp = await getAllScenicSpots(searchParam.toString());
    } else {
      resp = await getSpecificScenicSpots(countryDic[countrySelect], searchParam.toString());
    }
    return resp;
  };

  const {
    data: scenicSpots,
    hasMore,
    loading,
    // error
  } = useHttp(searchValue, `${countrySelect},${regionSelect}`, pageNumber, callAPI);

  const observer = useRef();
  const lastScenicSpotsElementRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  const handleSearch = e => {
    setSearchValue(e.target.value);
    setPageNumber(1);
  };

  const regionFilter = selectRegion => {
    setCountrySelect('全台');
    setRegionSelect(selectRegion);
    setPageNumber(1);
  };

  const countryFilter = selectCountry => {
    setCountrySelect(selectCountry);
    setPageNumber(1);
  };


  const renderScenicSpots = () => (
    scenicSpots.map((item, index) => {
      if (item?.Picture?.PictureUrl1.includes('210.69') ||
        item?.Picture?.PictureUrl1.includes('travel.nantou.gov.tw') ||
        item?.Picture?.PictureUrl1.includes('cloud.culture.tw') ||
        item?.Picture?.PictureUrl1.includes('northguan-nsa') ||
        item?.Name.includes('Test')
      )
        return;
      return (
        <ResultItem
          ref={scenicSpots.length - 3 === index ? lastScenicSpotsElementRef : null}
          key={index}
          data={item}
        />
      );
    })
  );

  return (
    <Container>
      <FilterCont>
        <Searchbar type="text" value={searchValue} onChange={e => handleSearch(e)} />
        <SelectFilter currentItem={regionSelect} data={arrRegions} setFilterData={(regionSelected) => regionFilter(regionSelected)} />
      </FilterCont>
      <FilterBtnCont>
        {regionTaiwan[regionSelect].map((item, index) => {
          return (
            <FilterBtn
              key={index}
              data={item}
              currentItem={countrySelect}
              setFilterData={(countrySelected) => countryFilter(countrySelected)} />
          );
        })
        }
      </FilterBtnCont>
      <GridCont>
        {renderScenicSpots()}
      </GridCont>
    </Container>
  );
};

export default ScenicSpotsSection;
