/* eslint-disable no-unused-vars */
import React from 'react';
import { useLocation } from 'react-router-dom';
import { ResultItem } from '..';
import { getAllHotels } from '../../api';
import { PAGE_NUM } from '../../constants/pageData';
import useHttp from '../../hooks/useHttp';
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
  ItemsBlock
} from './styles';

const Detail = () => {
  const {
    Name,
    Address,
    Phone,
    OpenTime,
    TicketInfo,
    DescriptionDetail,
    Picture,
    TravelInfo,
    Position
  } = useLocation().state;

  let Infos = [
    { text: Name },
    { text: Address },
    { text: Phone },
    { text: OpenTime },
    { text: TicketInfo },
    { text: DescriptionDetail },
  ];

  let test = [1, 2, 3, 4, 5, 6, 7,];
  // console.log(useLocation().state);

  const callAPI = async (pageNumber) => {
    let resp = [];
    let searchParam = new URLSearchParams([
      ['$top', PAGE_NUM],
      ['$filter', 'Picture/PictureUrl1 ne null'],
      ['$skip', (pageNumber - 1) * PAGE_NUM],
      ['$format', 'JSON'],
      ['$spatialFilter', `nearby(${Position.PositionLat}, ${Position.PositionLon}, 3000)`]
    ]);

    resp = await getAllHotels(searchParam.toString());
    return resp;
  };

  const {
    data: hotels,
    hasMore,
    loading,
    // error
  } = useHttp('', '', 1, callAPI);
  console.log(hotels)

  return (
    <Container>
      <Frame>
        <DetailCont>
          <Title1>{Name}</Title1>
          {
            Infos.map((item, index) => (
              <Line key={index}>
                <Paragraph>{item.text}</Paragraph>
              </Line>
            ))
          }
        </DetailCont>
        <Img src={Picture.PictureUrl1} alt={Picture.PictureDescription1} />
      </Frame>
      {TravelInfo &&
        <TravelCont>
          <Title2>交通方式</Title2>
          <Paragraph>{TravelInfo}</Paragraph>
        </TravelCont>
      }
      <RecommendCont>
        <RecommendHeader>推薦旅宿</RecommendHeader>
        <ItemsBlock>
          {
            hotels.map((item, index) => (
              <ResultItem
                key={index}
                data={item}
                margin={'0 40px 0 0'}
              />
            ))
          }
        </ItemsBlock>
      </RecommendCont>

    </Container>
  );
};

export default Detail;
