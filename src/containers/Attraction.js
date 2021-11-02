import React, { useState, useEffect } from 'react';
import { getAllScenicSpots } from '../api';
import { AttractionList, FilterBar } from '../components';

const Attraction = () => {
  const [scenicSpotsData, setScenicSpotsData] = useState([]);

  useEffect(() => {
    const callApi = async () => {
      let searchParam = new URLSearchParams([
        ['$top', 30],
        ['format', 'JSON'],
      ]);
      let resp = await getAllScenicSpots(searchParam.toString());
      setScenicSpotsData(resp.data);
      console.log(resp.data);
    };
    callApi();
  }, []);



  return (
    <>
      <FilterBar />
      <AttractionList data={scenicSpotsData} />
    </>
  );
};

export default Attraction;