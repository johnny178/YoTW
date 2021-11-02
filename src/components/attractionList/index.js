/* eslint-disable no-unused-vars */
import React from 'react';
import { Container, Description, DetailCont, Image, Item, Name } from './styles';

const AttractionList = ({ data }) => {
  return (
    <Container>
      {
        data.map(item => {
          if (!item?.Picture?.PictureUrl1) return;

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
      }
    </Container>
  );
};

export default AttractionList;