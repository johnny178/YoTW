import React, { useEffect, useState } from 'react';
import { Frame, GridCont, HeaderBackgroundImg, HeaderCont, Searchbar, SearchCont, SvgWrapper, Title } from './styles';

import HeaderImageSmall from '../../../images/HOME-banner.png';
import HeaderImageMedium from '../../../images/HOME-banner@2x.png';
import { getAllActivities, getAllHotels, getAllRestaurant, getAllScenicSpots } from '../../../api';
import { Loader, ResultItem } from '../..';
import { ReactComponent as Search } from '../../../images/svg/ico_search.svg';

const Header = (props) => {
  const [searchValue, setSearchValue] = useState('');
  const [pageData, setPageData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isNoData, setIsNoData] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  let arrApi = [
    {
      name: 'ScenicSpot',
      func: getAllScenicSpots
    },
    {
      name: 'Activity',
      func: getAllActivities
    },
    {
      name: 'Restaurant',
      func: getAllRestaurant
    },
    {
      name: 'Hotel',
      func: getAllHotels
    }
  ]

  const searchData = async (value) => {
    setLoading(true);
    let searchData = [];

    for (let i = 0; i < arrApi.length - 1; i++) {
      let searchParam = new URLSearchParams([
        ['$filter', `Picture/PictureUrl1 ne null and contains(${arrApi[i].name}NAME,'${value}')`],
        ['$format', 'JSON'],
      ]);
      let resp = await arrApi[i].func(searchParam.toString());
      if (resp.data.length !== 0) {
        searchData = [...searchData, ...resp.data];
      }
    }
    if (searchData.length !== 0) {
      setPageData(searchData);
      setIsNoData(false);
    } else {
      setIsNoData(true);
    }
    setLoading(false);
  };

  const handleSearch = (e, isButtonClick = false) => {
    if (e.key === 'Enter' || isButtonClick) {
      e.preventDefault();
      if (searchValue !== '') {
        searchData(searchValue);
      } else {
        setIsNoData(false);
        setPageData([]);
      }
    }
  };

  const renderSearchResult = () => (
    pageData.map((item, index) => {
      const name = item?.ScenicSpotName || item?.RestaurantName || item?.HotelName || item?.ActivityName;
      if (item?.Picture?.PictureUrl1?.includes('210.69') ||
        item?.Picture?.PictureUrl1?.includes('travel.nantou.gov.tw') ||
        item?.Picture?.PictureUrl1?.includes('cloud.culture.tw') ||
        item?.Picture?.PictureUrl1?.includes('northguan-nsa') ||
        name?.includes('Test')
      )
        return;
      return (
        <ResultItem
          key={index}
          data={item}
        />
      );
    })
  );

  const renderBody = () => {
    if (isNoData) {
      return (<div>????????????</div>);
    }

    if (pageData.length !== 0) {
      return (
        <Frame isLoading={loading}>
          {loading && <Loader />}
          <GridCont>
            {renderSearchResult()}
          </GridCont>
        </Frame>
      );
    } else {
      return props.children;
    }
  };

  return (
    <>
      <HeaderCont>
        <HeaderBackgroundImg src={HeaderImageSmall} srcSet={`${HeaderImageSmall} 1x, ${HeaderImageMedium} 2x`} alt={'headerImage'} />
        <Title>Enjoy your trip with </Title>
        <SearchCont>
          <Searchbar
            type='text'
            value={searchValue}
            placeholder={'??????'}
            onChange={e => setSearchValue(e.target.value)}
            onKeyDown={e => handleSearch(e)}
          />
          <SvgWrapper onClick={(e) => handleSearch(e, true)}>
            <Search />
          </SvgWrapper>
        </SearchCont>
      </HeaderCont>
      {renderBody()}
    </>
  );
};

export default Header;