import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Loader, ResultItem, SearchHeader } from '..';
import { getAllHotels, getSpecificHotels } from '../../api';
import { countryDic, regionTaiwan } from '../../constants/filterData';
import { PAGE_NUM } from '../../constants/pageData';
import useHttp from '../../hooks/useHttp';
import { Container, Frame, GridCont, } from './styles';

const HotelSection = () => {
  const [countrySelect, setCountrySelect] = useState('全台');
  const [regionSelect, setRegionSelect] = useState('全部地區');
  const [searchValue, setSearchValue] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  /**
   * 設定篩選地區名稱
   */
  const setFilterName = useCallback(() => {
    let name = '';

    if ((regionSelect !== '全部地區' && countrySelect === '全台')) {
      name += searchValue.length !== 0 ? ` and contains(HotelNAME,'${searchValue}') and (` : ' and (';
      regionTaiwan[regionSelect].slice(1).map((region, index) => {
        name += (index !== 0 ? ' or ' : '') + `contains(City,'${region}')`;
      });
      name += ')';
    } else {
      name += searchValue.length !== 0 ? ` and contains(HotelNAME,'${searchValue}')` : '';
    }
    return name;
  }, [countrySelect, regionSelect, searchValue]
  );

  const callAPI = useCallback(async (pageNumber) => {
    let resp = [];
    let filterName = setFilterName();
    let searchParam = new URLSearchParams([
      ['$top', PAGE_NUM],
      ['$filter', `Picture/PictureUrl1 ne null${filterName}`],
      ['$skip', (pageNumber - 1) * PAGE_NUM],
      ['$format', 'JSON'],
    ]);

    if (countrySelect === '全台') {
      resp = await getAllHotels(searchParam.toString());
    } else {
      resp = await getSpecificHotels(countryDic[countrySelect], searchParam.toString());
    }
    return resp;
  }, [countrySelect, setFilterName]
  );

  const {
    data: hotels,
    hasMore,
    loading,
  } = useHttp(searchValue, `${countrySelect},${regionSelect}`, pageNumber, callAPI);

  const observer = useRef();
  const lastHotelsElementRef = useCallback(node => {
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

  const renderHotels = () => (
    hotels.map((item, index) => {
      if (item?.Picture?.PictureUrl1?.includes('210.69') ||
        item?.Picture?.PictureUrl1?.includes('travel.nantou.gov.tw') ||
        item?.Picture?.PictureUrl1?.includes('cloud.culture.tw') ||
        item?.Picture?.PictureUrl1?.includes('northguan-nsa') ||
        item?.HotelName?.includes('Test')
      )
        return;

      return (
        <ResultItem
          ref={hotels.length - 3 === index ? lastHotelsElementRef : null}
          key={index}
          data={item}
        />
      );
    })
  );

  return (
    <Container>
      <SearchHeader
        searchValue={searchValue}
        handleSearch={e => handleSearch(e)}
        regionSelect={regionSelect}
        regionFilter={regionSelected => regionFilter(regionSelected)}
        countrySelect={countrySelect}
        countryFilter={countrySelected => countryFilter(countrySelected)}
      />
      <Frame isLoading={loading}>
        {loading && <Loader />}
        <GridCont>
          {renderHotels()}
        </GridCont>
      </Frame>
    </Container>
  );
};

export default HotelSection;
