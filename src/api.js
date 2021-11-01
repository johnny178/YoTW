import axios from 'axios';
import jsSHA from 'jssha';

const getAuthorizationHeader = () => {
  //  填入自己 ID、KEY 開始
  let AppID = '79b1459ffeca4aabadd35e191c8fed59';
  let AppKey = 'zvSZkHtUt4JieFWkdnOyW4iGtt4';
  //  填入自己 ID、KEY 結束
  let GMTString = new Date().toGMTString();
  let ShaObj = new jsSHA('SHA-1', 'TEXT');
  ShaObj.setHMACKey(AppKey, 'TEXT');
  ShaObj.update('x-date: ' + GMTString);
  let HMAC = ShaObj.getHMAC('B64');
  // eslint-disable-next-line no-useless-escape
  let Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';
  return { 'Authorization': Authorization, 'X-Date': GMTString };
};

//觀光景點相關
const getScenicSpots = axios.create({
  baseURL: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot',
  headers: getAuthorizationHeader(),
});

//觀光景點相關
export const getAllScenicSpots = searchParam => getScenicSpots.get(searchParam ? `?${searchParam}` : '');
export const getSpecificScenicSpots = (area, searchParam = '') => getScenicSpots.get(`/${area}?${searchParam}`);