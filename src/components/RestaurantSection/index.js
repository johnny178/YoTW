import React, { useState, useRef, useCallback } from 'react';
import { ResultItem } from '..';
import { getAllRestaurant, getSpecificRestaurant } from '../../api';
import { arrCountryName, countryDic } from '../../constants/filterData';
import { PAGE_NUM } from '../../constants/pageData';
import useHttp from '../../hooks/useHttp';
import {
  Container,
  FilterCont,
  FilterForm,
  Searchbar,
  Select,
  Option,
  GridCont,
} from './styles';

const RestaurantSection = () => {
  const [countrySelect, setCountrySelect] = useState('全台');
  const [searchValue, setSearchValue] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const setFilterName = () => {
    let name = '';

    name += searchValue.length !== 0 ? ` and contains(NAME,'${searchValue}')` : '';
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
      resp = await getAllRestaurant(searchParam.toString());
    } else {
      resp = await getSpecificRestaurant(countryDic[countrySelect], searchParam.toString());
    }
    return resp;
  };

  const {
    data: restaurant,
    hasMore,
    loading,
    // error
  } = useHttp(searchValue, countrySelect, pageNumber, callAPI);

  const observer = useRef();
  const lastRestaurantElementRef = useCallback(node => {
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

  const handleFilter = e => {
    setCountrySelect(e.target.value);
    setPageNumber(1);
  };

  const renderRestaurant = () => (
    restaurant.map((item, index) => {
      if (item?.Picture?.PictureUrl1.includes('210.69') ||
        item?.Picture?.PictureUrl1.includes('travel.nantou.gov.tw') ||
        item?.Picture?.PictureUrl1.includes('cloud.culture.tw') ||
        item?.Picture?.PictureUrl1.includes('northguan-nsa') ||
        item?.Name.includes('Test')
      )
        return;

      return (
        <ResultItem
          ref={restaurant.length - 3 === index ? lastRestaurantElementRef : null}
          key={index}
          data={item}
        />
      );
    })
  );

  return (
    <Container>
      <FilterCont>
        <FilterForm >
          <Searchbar type="text" value={searchValue} onChange={e => handleSearch(e)} />
          <Select value={countrySelect} onChange={e => handleFilter(e)}>
            {arrCountryName.map((item, index) => <Option key={index} value={item}>{item}</Option>)}
          </Select>
        </FilterForm>
      </FilterCont>
      <GridCont>
        {renderRestaurant()}
      </GridCont>
    </Container>
  );
};

export default RestaurantSection;
