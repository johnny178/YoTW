import React, { useState } from 'react';
import { getAllScenicSpots, getSpecificScenicSpots } from '../../api';
import { arrCountryName, countryDic } from '../../constants/filterData';
import {
  Container,
  FilterForm,
  Searchbar,
  Select,
  Option,
  Submit,
} from './styles';

const FilterBar = () => {
  const [countrySelect, setCountrySelect] = useState('全台');

  const handleSubmit = async (e) => {
    e.preventDefault();
    let resp = [];
    let searchParam = new URLSearchParams([
      ['$top', 30],
      ['format', 'JSON'],
    ]);
    if (countrySelect === '全台') {
      resp = await getAllScenicSpots(searchParam.toString());
    } else {
      resp = await getSpecificScenicSpots(countryDic[countrySelect], searchParam.toString());
    }
    console.log('yotest', resp.data);
  };

  return (
    <Container>
      <FilterForm onSubmit={handleSubmit}>
        <Searchbar />
        <Select value={countrySelect} onChange={e => setCountrySelect(e.target.value)}>
          {arrCountryName.map((item, index) => <Option key={index} value={item}>{item}</Option>)}
        </Select>
        <Submit value='送出' type="submit" />
      </FilterForm>
    </Container>
  );
};

export default FilterBar;
