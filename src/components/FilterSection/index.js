import React, { useState, useEffect } from 'react';
import { getAllScenicSpots, getSpecificScenicSpots } from '../../api';
import { arrCountryName, countryDic } from '../../constants/filterData';
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
  const [scenicSpotsData, setScenicSpotsData] = useState([]);
  const [countrySelect, setCountrySelect] = useState('全台');
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const callApi = async () => {
      getScenicSpotsData();
    };
    callApi();
  }, [countrySelect]);

  useEffect(() => {
    const inputDelay = setTimeout(() => {
      console.log(searchValue);
      getScenicSpotsData(searchValue);
    }, 1000);

    return () => {
      clearTimeout(inputDelay);
    };
  }, [searchValue]);

  const getScenicSpotsData = async (searchValue = '') => {
    let filterName = searchValue.length !== 0 ? ` and contains(NAME,'${searchValue}')` : '';
    let searchParam = new URLSearchParams([
      ['$top', 50],
      ['$filter', `Picture/PictureUrl1 ne null${filterName}`],
      ['$format', 'JSON'],
    ]);

    // searchValue.length !== 0 && searchParam.set('$filter', `contains(NAME,'${searchValue}')`);
    let resp = countrySelect === '全台' ?
      await getAllScenicSpots(searchParam.toString()) :
      await getSpecificScenicSpots(countryDic[countrySelect], searchParam.toString());
    setScenicSpotsData(resp.data);
  };

  const renderScenicSpots = () => (
    scenicSpotsData.map(item => {
      if (item?.Picture?.PictureUrl1.includes('210.69')) return;
      return (
        <Item key={item.ID}>
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
          <Searchbar type="text" value={searchValue} onChange={e => setSearchValue(e.target.value)} />
          <Select value={countrySelect} onChange={e => setCountrySelect(e.target.value)}>
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
