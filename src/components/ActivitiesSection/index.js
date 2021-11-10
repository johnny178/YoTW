import React, { useState, useRef, useCallback } from 'react';
import { ResultItem, SearchHeader } from '..';
import { getAllActivities, getSpecificActivities } from '../../api';
import { regionTaiwan, countryDic } from '../../constants/filterData';
import { PAGE_NUM } from '../../constants/pageData';
import useHttp from '../../hooks/useHttp';
import HeaderImage from '../../images/taipei-banner.png';
import {
  Container,
  GridCont,
} from './styles';

const ActivitiesSection = () => {
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
      resp = await getAllActivities(searchParam.toString());
    } else {
      resp = await getSpecificActivities(countryDic[countrySelect], searchParam.toString());
    }
    return resp;
  };

  const {
    data: activities,
    hasMore,
    loading,
    // error
  } = useHttp(searchValue, `${countrySelect},${regionSelect}`, pageNumber, callAPI);

  const observer = useRef();
  const lastActivitiesElementRef = useCallback(node => {
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

  // function parseIsoDatetime(dtstr) {
  //   var dt = dtstr.split(/[: T-]/).map(parseFloat);
  //   return `${dt[0]}/${dt[1]}/${dt[2]}`;
  // }

  const renderActivities = () => (
    activities.map((item, index) => {
      if (item?.Picture?.PictureUrl1.includes('210.69') ||
        item?.Picture?.PictureUrl1.includes('travel.nantou.gov.tw') ||
        item?.Picture?.PictureUrl1.includes('cloud.culture.tw') ||
        item?.Picture?.PictureUrl1.includes('northguan-nsa') ||
        item?.Name.includes('Test')
      )
        return;
      // let duration = `${parseIsoDatetime(item.StartTime)} ~ ${parseIsoDatetime(item.EndTime)}`;

      return (
        <ResultItem
          ref={activities.length - 3 === index ? lastActivitiesElementRef : null}
          key={index}
          data={item}
        />
      );
    })
  );

  return (
    <Container>
      <SearchHeader
        headerImage={HeaderImage}
        searchValue={searchValue}
        handleSearch={e => handleSearch(e)}
        regionSelect={regionSelect}
        regionFilter={regionSelected => regionFilter(regionSelected)}
        countrySelect={countrySelect}
        countryFilter={countrySelected => countryFilter(countrySelected)}
      />
      <GridCont>
        {renderActivities()}
      </GridCont>
    </Container>
  );
};

export default ActivitiesSection;
