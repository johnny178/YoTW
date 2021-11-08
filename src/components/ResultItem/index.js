import React from 'react';
import {
  DetailCont,
  Image,
  Item,
  Name,
  Content1,
  Content2
} from './style';

const ResultItem = React.forwardRef((props, ref) => {
  const { data, margin } = props;
  let description = data?.Description || data?.DescriptionDetail;
  description = description?.length > 50 ? (description?.slice(0, 50) ?? '') + '...' : description;

  return (
    <Item
      ref={ref}
      key={data.ID}
      to={data.ID}
      state={data}
      margin={margin ?? ''}
    >
      <Image src={data.Picture.PictureUrl1} alt={data.Picture.PictureDescription1} />
      <DetailCont>
        <Name>{data?.Name?.replaceAll('.', '')}</Name>
        <Content1 >{data?.Address}</Content1>
        <Content1 >{data?.Fax || data?.OpenTime}</Content1>
        <Content2 >{description}</Content2>
      </DetailCont>
    </Item>
  );
});
ResultItem.displayName = 'ResultItem';

export default ResultItem;
