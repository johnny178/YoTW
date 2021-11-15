import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DetailItem } from '..';
import { getAllActivities, getAllHotels, getAllRestaurant, getAllScenicSpots } from '../../api';
import { PAGE_NUM, INFO_TYPE } from '../../constants/pageData';
import {
  Container,
  Frame,
  DetailCont,
  Line,
  Title1,
  Title2,
  Paragraph,
  Img,
  RecommendCont,
  RecommendHeader,
  TravelCont,
  ItemsBlock,
  Icon,
  Tag,
  Url,
} from './styles';

import AddressSmall from '../../images/景介紹頁-locol icon.png';
import AddressMedium from '../../images/景介紹頁-locol icon@2x.png';

import PhoneSmall from '../../images/景介紹頁-phone icon.png';
import PhoneMedium from '../../images/景介紹頁-phone icon@2x.png';

import CommentSmall from '../../images/景介紹頁-long comment icon.png';
import CommentMedium from '../../images/景介紹頁-long comment icon@2x.png';

import BookSmall from '../../images/景介紹頁-book icon.png';
import BookMedium from '../../images/景介紹頁-book icon@2x.png';

import MoneySmall from '../../images/宿介紹-money icon-1.png';
import MoneyMedium from '../../images/宿介紹-money icon-1@2x.png';

import WebsiteSmall from '../../images/官網icon.png';
import WebsiteMedium from '../../images/官網icon@2x.png';

import OrganizerSmall from '../../images/單位icon.png';
import OrganizerMedium from '../../images/單位icon@2x.png';

import OtherSmall from '../../images/宿介紹-other icon.png';
import OtherMedium from '../../images/宿介紹-other icon@2x.png';

import TagSmall from '../../images/標籤icon.png';
import TagMedium from '../../images/標籤icon@2x.png';

const Detail = () => {
  const [scenicSpotsData, setScenicSpotsData] = useState([]);
  const [hotelsData, setHotelsData] = useState([]);
  const [activitiesData, setActivitieData] = useState([]);
  const [restaurantData, setRestaurantData] = useState([]);

  const location = useLocation();
  const {
    Name,
    Address,
    Phone,
    OpenTime,
    TicketInfo,
    Description,
    DescriptionDetail,
    Picture,
    TravelInfo,
    Position,
    StartTime,
    EndTime,
    ParkingInfo,
    Spec,
    Class,
    Class1,
    Class2,
    Class3,
    ServiceInfo,
    Cycle,
    WebsiteUrl,
    Organizer
  } = location.state || JSON.parse(localStorage.getItem('referrer'));

  const parseIsoDatetime = dtstr => {
    var dt = dtstr.split(/[: T-]/).map(parseFloat);
    return `${dt[0]}/${dt[1]}/${dt[2]}`;
  };

  let openTime = OpenTime === 'Sun 24 hours；Mon 24 hours；Tue 24 hours；Wed 24 hours；Thu 24 hours；Fri 24 hours；Sat 24 hours' ?
    '全天候開放' : (OpenTime ?? '');
  let duration = (StartTime && EndTime) ? `${parseIsoDatetime(StartTime)} ~ ${parseIsoDatetime(EndTime)}` : '';
  let backgroundColor = ['#FFD965', '#588310', '#DD5252'];
  let count = -1;

  let Infos = [
    { text: openTime || duration, icon: [BookSmall, BookMedium], type: INFO_TYPE.TIME },
    { text: Address, icon: [AddressSmall, AddressMedium], type: INFO_TYPE.ADDRESSTEXT },
    { text: Phone, icon: [PhoneSmall, PhoneMedium], type: INFO_TYPE.PHONENUM },
    { text: WebsiteUrl, icon: [WebsiteSmall, WebsiteMedium], type: INFO_TYPE.WEBSITE },
    { text: Organizer, icon: [OrganizerSmall, OrganizerMedium], type: INFO_TYPE.ORGANIZE },
    { text: ServiceInfo?.replaceAll('<br>', '') || Cycle, icon: [OtherSmall, OtherMedium], type: INFO_TYPE.OTHER },
    { text: TicketInfo || Spec, icon: [MoneySmall, MoneyMedium], type: INFO_TYPE.MONEY },
    { text: Description || DescriptionDetail, icon: [CommentSmall, CommentMedium], type: INFO_TYPE.COMMENT },
    { text: Class || Class1 || Class2 || Class3, icon: [TagSmall, TagMedium], type: INFO_TYPE.CLASS },
  ];

  useEffect(() => {
    window.scroll(0, 0);

    let searchParam = new URLSearchParams([
      ['$top', PAGE_NUM],
      ['$filter', 'Picture/PictureUrl1 ne null'],
      ['$format', 'JSON'],
      ['$spatialFilter', `nearby(${Position.PositionLat}, ${Position.PositionLon}, 1000)`]
    ]);

    location.pathname.split('/')[1] !== 'scenicSpots' && getNearByData(getAllScenicSpots, searchParam, setScenicSpotsData, 'scenicSpots');
    location.pathname.split('/')[1] !== 'hotels' && getNearByData(getAllHotels, searchParam, setHotelsData, 'hotels');
    location.pathname.split('/')[1] !== 'activities' && getNearByData(getAllActivities, searchParam, setActivitieData, 'activities');
    location.pathname.split('/')[1] !== 'restaurant' && getNearByData(getAllRestaurant, searchParam, setRestaurantData, 'restaurant');
  }, []);

  const getNearByData = async (getData, searchParam, setData, type) => {
    try {
      let resp = await getData(searchParam.toString());
      //如在該分類之詳細頁，將不顯示自身資料
      location.pathname.includes(type) ? setData(resp.data.slice(1)) : setData(resp.data);
    } catch (error) {
      console.log('nearBy data get error', error);
    }
  };

  const renderNearbySection = (data, text) => {
    count++;
    if (data.length > 0) {
      return (
        <RecommendCont backgroundColor={backgroundColor[count]}>
          <RecommendHeader >{text}</RecommendHeader>
          <ItemsBlock>
            {
              data.map((item, index) => {
                if (item?.Picture?.PictureUrl1.includes('210.69') ||
                  item?.Picture?.PictureUrl1.includes('travel.nantou.gov.tw') ||
                  item?.Picture?.PictureUrl1.includes('cloud.culture.tw') ||
                  item?.Picture?.PictureUrl1.includes('northguan-nsa') ||
                  item?.Name.includes('Test')
                )
                  return;

                return (
                  <DetailItem
                    key={index}
                    data={item}
                    margin={'0 40px 0 0'}
                  />
                );
              })
            }
          </ItemsBlock>
        </RecommendCont>
      );
    }
  };

  return (
    <Container>
      <Frame>
        <DetailCont>
          <Title1>{Name}</Title1>
          {
            Infos.map(item => {
              if (!item.text) return;

              return (
                <Line key={item.type}>
                  <Icon src={item.icon[0]} srcSet={`${item.icon[0]} 1x, ${item.icon[1]} 2x`} />
                  {
                    item.type === INFO_TYPE.CLASS ? <Tag>{item.text}</Tag> :
                      item.type === INFO_TYPE.WEBSITE ? <Url href={item.text} target='_blank'>點我前往</Url> :
                        item.type === INFO_TYPE.PHONENUM ? <Url href={`tel:${item.text}`}>{item.text}</Url> :
                          <Paragraph>{item.text}</Paragraph>
                  }
                </Line>
              );
            })
          }
        </DetailCont>
        <Img src={Picture.PictureUrl1} alt={Picture.PictureDescription1} />
      </Frame>

      {(TravelInfo || ParkingInfo) &&
        <TravelCont>
          <Title2>交通方式</Title2>
          <Paragraph>{TravelInfo}</Paragraph>
          <Paragraph>{ParkingInfo}</Paragraph>
        </TravelCont>
      }
      {renderNearbySection(scenicSpotsData, '看看附近的景點', '#FFD965')}
      {renderNearbySection(restaurantData, '看看附近的餐飲', '#FFD965')}
      {renderNearbySection(hotelsData, '看看附近的旅宿', '#588310')}
      {renderNearbySection(activitiesData, '看看附近的活動', '#DD5252')}
    </Container>
  );
};

export default Detail;
