import React, { useEffect, useState } from 'react';
import {
  DetailCont,
  Image,
  Item,
  Name,
  Content1,
  Line,
  Icon,
  ClassCont,
  TagCont,
  Tag,
} from './style';

import AddressSmall from '../../images/景介紹頁-locol icon.png';
import AddressMedium from '../../images/景介紹頁-locol icon@2x.png';

import BookSmall from '../../images/景介紹頁-book icon.png';
import BookMedium from '../../images/景介紹頁-book icon@2x.png';

const ResultItem = React.forwardRef((props, ref) => {
  const { data, margin } = props;
  const {
    Picture,
    Address,
    Class,
    Class1,
    Class2,
    Class3,
    StartTime,
    EndTime
  } = data;
  const [arrClass, setArrClass] = useState([]);

  let openTime = data?.OpenTime === 'Sun 24 hours；Mon 24 hours；Tue 24 hours；Wed 24 hours；Thu 24 hours；Fri 24 hours；Sat 24 hours' ?
    '全天候開放' : (data?.OpenTime?.length > 30 ? (data?.OpenTime?.slice(0, 30) ?? '') + '...' : data?.OpenTime ?? '');

  useEffect(() => {
    let classes = []; //類別
    Class && classes.push(Class);
    Class1 && classes.push(Class1);
    Class2 && classes.push(Class2);
    Class3 && classes.push(Class3);
    setArrClass(classes);
  }, []);

  const parseIsoDatetime = dtstr => {
    var dt = dtstr.split(/[: T-]/).map(parseFloat);
    return `${dt[0]}/${dt[1]}/${dt[2]}`;
  };
  let duration = (StartTime && EndTime) ? `${parseIsoDatetime(StartTime)} ~ ${parseIsoDatetime(EndTime)}` : '';

  return (
    <Item
      ref={ref}
      key={data.ID}
      to={data.ID}
      state={data}
      margin={margin ?? ''}
    >
      <Image src={Picture?.PictureUrl1} alt={Picture?.PictureDescription1} />
      <DetailCont >
        <Name>{data?.Name?.replaceAll('.', '')}</Name>
        {
          Address &&
          <Line>
            <Icon src={AddressSmall} srcSet={`${AddressSmall} 1x, ${AddressMedium} 2x`} />
            <Content1 >{Address}</Content1>
          </Line>
        }
        {
          (openTime || duration) &&
          <Line>
            <Icon src={BookSmall} srcSet={`${BookSmall} 1x, ${BookMedium} 2x`} />
            <Content1>{openTime || duration}</Content1>
          </Line>
        }
        {
          arrClass.length > 0 &&
          <ClassCont>
            <Icon src={BookSmall} srcSet={`${BookSmall} 1x, ${BookMedium} 2x`} />
            <TagCont>

              {
                arrClass.map((item, index) => (
                  <Tag key={index}>{item}</Tag>
                ))
              }
            </TagCont>
          </ClassCont>
        }
      </DetailCont>
    </Item>
  );
});
ResultItem.displayName = 'ResultItem';

export default ResultItem;