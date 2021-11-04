import React, { useState, useRef, useCallback } from 'react';
import { getAllRestaurant, getSpecificRestaurant } from '../../api';
import { arrCountryName, countryDic } from '../../constants/filterData';
import useHttp from '../../hooks/useHttp';
import {
  Container,
  FilterCont,
  FilterForm,
  Searchbar,
  Select,
  Option,
  GridCont,
  Description,
  DetailCont,
  Image,
  Item,
  Name
} from './styles';

const RestaurantSection = () => {
  const [countrySelect, setCountrySelect] = useState('全台');
  const [searchValue, setSearchValue] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const callAPI = async (filterData, searchParam) => {
    let resp = [];

    if (filterData === '全台') {
      resp = await getAllRestaurant(searchParam.toString());
    } else {
      resp = await getSpecificRestaurant(countryDic[filterData], searchParam.toString());
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
      if (item?.Picture?.PictureUrl1.includes('210.69')) return;

      let description = item?.Description?.length > 50 ? (item?.Description?.slice(0, 50) ?? '') + '...' : item?.Description;

      return (
        <Item ref={restaurant.length - 3 === index ? lastRestaurantElementRef : null} key={item.ID}>
          <Image src={item.Picture.PictureUrl1} alt={item.Picture.PictureDescription1} />
          <DetailCont>
            <Name>{item?.Name?.replaceAll('.', '')}</Name>
            <Description >{description}</Description>
          </DetailCont>
        </Item>
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
