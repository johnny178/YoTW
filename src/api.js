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

//景點相關
const getScenicSpots = axios.create({
  baseURL: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot',
  headers: getAuthorizationHeader(),
});

//旅宿相關
const getHotels = axios.create({
  baseURL: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel',
  headers: getAuthorizationHeader(),
});

//活動相關
const getActivities = axios.create({
  baseURL: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity',
  headers: getAuthorizationHeader(),
});

//餐飲相關
const getRestaurant = axios.create({
  baseURL: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant',
  headers: getAuthorizationHeader(),
});


//景點相關
export const getAllScenicSpots = searchParam => getScenicSpots.get(searchParam ? `?${searchParam}` : '');
export const getSpecificScenicSpots = (area, searchParam = '') => getScenicSpots.get(`/${area}?${searchParam}`);

//旅宿相關
export const getAllHotels = searchParam => getHotels.get(searchParam ? `?${searchParam}` : '');
export const getSpecificHotels = (area, searchParam = '') => getHotels.get(`/${area}?${searchParam}`);

//旅宿相關
export const getAllActivities = searchParam => getActivities.get(searchParam ? `?${searchParam}` : '');
export const getSpecificActivities = (area, searchParam = '') => getActivities.get(`/${area}?${searchParam}`);

//餐飲相關
export const getAllRestaurant = searchParam => getRestaurant.get(searchParam ? `?${searchParam}` : '');
export const getSpecificRestaurant = (area, searchParam = '') => getRestaurant.get(`/${area}?${searchParam}`);