import React, { useEffect } from 'react';
import { getAllScenicSpots } from '../api';

const Attraction = () => {
  useEffect(() => {
    const callApi = async () => {
      let searchParam = new URLSearchParams([
        ['$top', 30],
        ['format', 'JSON'],
      ]);
      let resp = await getAllScenicSpots(searchParam.toString());
      console.log(resp.data);
    };
    callApi();
  }, []);

  return (
    <div>Hello</div>
  );
};

export default Attraction;