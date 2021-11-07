import React from 'react';
import { Description, DetailCont, Image, Item, Name } from './style';

const ResultItem = React.forwardRef((props, ref) => {
  const { data } = props;
  let description = data?.Description || data?.DescriptionDetail;
  description = description?.length > 50 ? (description?.slice(0, 50) ?? '') + '...' : description;

  return (
    <Item
      ref={ref}
      key={data.ID}
      to={data.ID}
    >
      <Image src={data.Picture.PictureUrl1} alt={data.Picture.PictureDescription1} />
      <DetailCont>
        <Name>{data?.Name?.replaceAll('.', '')}</Name>
        <Description >{description}</Description>
      </DetailCont>
    </Item>
  );
});
ResultItem.displayName = 'ResultItem';

export default ResultItem;
