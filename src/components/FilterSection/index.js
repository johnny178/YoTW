/* eslint-disable no-unused-vars */
import React, { useState, useRef, useCallback } from 'react';
import { getAllScenicSpots, getSpecificScenicSpots } from '../../api';
import { arrCountryName, countryDic, arrRegions, regionTaiwan } from '../../constants/filterData';
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
  Description,
  DetailCont,
  Image,
  Item,
  Name
} from './styles';

const FilterSection = () => {
  const [countrySelect, setCountrySelect] = useState('全台');
  const [regionSelect, setRegionSelect] = useState('全部地區');
  const [searchValue, setSearchValue] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const setFilterName = () => {
    let name = '';

    if ((regionSelect !== '全部地區' && countrySelect === '全台')) {
      name += searchValue.length !== 0 ? ` and contains(NAME,'${searchValue}') and (` : ' and (';
      regionTaiwan[regionSelect].slice(1, -1).map((region, index) => {
        name += (index !== 0 ? ' or ' : '') + `contains(Address,'${region}')`;
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
    error
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

  const regionFilter = e => {
    setCountrySelect('全台');
    setRegionSelect(e.target.value);
    setPageNumber(1);
  };

  const countryFilter = e => {
    setCountrySelect(e.target.value);
    setPageNumber(1);
  };


  const renderScenicSpots = () => (
    scenicSpots.map((item, index) => {
      if (item?.Picture?.PictureUrl1.includes('210.69') || item?.Name.includes('Test')) return;
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
          <Select value={regionSelect} onChange={e => regionFilter(e)}>
            {arrRegions.map((item, index) => <Option key={index} value={item}>{item}</Option>)}
          </Select>
          <Select value={countrySelect} onChange={e => countryFilter(e)}>
            {regionTaiwan[regionSelect].map((item, index) => <Option key={index} value={item !== '縣市' ? item : '全台'}>{item}</Option>)}
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
