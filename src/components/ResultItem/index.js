import React from 'react';
import {
  DetailCont,
  Image,
  Item,
  Name,
  Content1,
  Content2,
  Line,
  Icon
} from './style';

import Address from '../../images/Hotel-locol icon.png';
import Phone from '../../images/Hotel-phone icon.png';
import { useLocation } from 'react-router-dom';

const ResultItem = React.forwardRef((props, ref) => {
  const { data, margin } = props;
  const location = useLocation();
  let description = data?.Description || data?.DescriptionDetail;
  description = description?.length > 50 ? (description?.slice(0, 50) ?? '') + '...' : description;
  let openTime = data?.OpenTime === 'Sun 24 hours；Mon 24 hours；Tue 24 hours；Wed 24 hours；Thu 24 hours；Fri 24 hours；Sat 24 hours' ?
    '全天候開放' : (data?.OpenTime ?? '查無時間資訊');


  return (
    <Item
      ref={ref}
      key={data.ID}
      to={data.ID}
      state={data}
      margin={margin ?? ''}
      isDetailPage={location.pathname.includes(location?.state?.ID)}
    >
      <Image
        src={data.Picture.PictureUrl1} alt={data.Picture.PictureDescription1}
        isDetailPage={location.pathname.includes(location?.state?.ID)}
      />
      <DetailCont isDetailPage={location.pathname.includes(location?.state?.ID)}>
        <Name>{data?.Name?.replaceAll('.', '')}</Name>
        <Line>
          <Icon src={Address} />
          <Content1 >{data?.Address}</Content1>
        </Line>
        <Line>
          <Icon src={Phone} />
          <Content1 >{data?.Fax || openTime}</Content1>
        </Line>
        <Content2 >{description}</Content2>
      </DetailCont>
    </Item>
  );
});
ResultItem.displayName = 'ResultItem';

export default ResultItem;
