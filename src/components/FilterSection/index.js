/* eslint-disable no-unused-vars */
import React, { useState, useRef, useCallback } from 'react';
import { getAllScenicSpots, getSpecificScenicSpots } from '../../api';
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

const FilterSection = () => {
  const [countrySelect, setCountrySelect] = useState('全台');
  const [searchValue, setSearchValue] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const callAPI = async (filterData, searchParam) => {
    let resp = [];

    if (filterData === '全台') {
      resp = await getAllScenicSpots(searchParam.toString());
    } else {
      resp = await getSpecificScenicSpots(countryDic[filterData], searchParam.toString());
    }
    return resp;
  };

  const {
    data: scenicSpots,
    hasMore,
    loading,
    error
  } = useHttp(searchValue, countrySelect, pageNumber, callAPI);

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

  const handleFilter = e => {
    setCountrySelect(e.target.value);
    setPageNumber(1);
  };

  const renderScenicSpots = () => (
    scenicSpots.map((item, index) => {
      if (item?.Picture?.PictureUrl1.includes('210.69')) return;
      return (
        <Item
          ref={scenicSpots.length - 3 === index ? lastScenicSpotsElementRef : null}
          key={item.ID}
          to={item.ID}
        >
          <Image src={item.Picture.PictureUrl1} alt={item.Picture.PictureDescription1} />
          <DetailCont>
            <Name>{item?.Name?.replaceAll('.', '')}</Name>
            <Description >{(item?.DescriptionDetail?.slice(0, 50) ?? '') + '...'}</Description>
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
        {renderScenicSpots()}
      </GridCont>
    </Container>
  );
};

export default FilterSection;
