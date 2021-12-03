/* eslint-disable no-undef */
import axios from 'axios';
import jsSHA from 'jssha';

const getAuthorizationHeader = () => {
  let GMTString = new Date().toGMTString();
  let ShaObj = new jsSHA('SHA-1', 'TEXT');
  ShaObj.setHMACKey(process.env.REACT_APP_KEY, 'TEXT');
  ShaObj.update('x-date: ' + GMTString);
  let HMAC = ShaObj.getHMAC('B64');
  // eslint-disable-next-line no-useless-escape
  let Authorization = 'hmac username=\"' + process.env.REACT_APP_ID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';
  return { 'Authorization': Authorization, 'X-Date': GMTString };
};

//景點相關
const getScenicSpots = axios.create({
  baseURL: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot'
});

//旅宿相關
const getHotels = axios.create({
  baseURL: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel'
});

//活動相關
const getActivities = axios.create({
  baseURL: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity'
});

//餐飲相關
const getRestaurant = axios.create({
  baseURL: 'https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant'
});


//景點相關
export const getAllScenicSpots = searchParam => getScenicSpots.get(searchParam ? `?${searchParam}` : '', { headers: getAuthorizationHeader() });
export const getSpecificScenicSpots = (area, searchParam = '') => getScenicSpots.get(`/${area}?${searchParam}`, { headers: getAuthorizationHeader() });

//旅宿相關
export const getAllHotels = searchParam => getHotels.get(searchParam ? `?${searchParam}` : '', { headers: getAuthorizationHeader() });
export const getSpecificHotels = (area, searchParam = '') => getHotels.get(`/${area}?${searchParam}`, { headers: getAuthorizationHeader() });

//旅宿相關
export const getAllActivities = searchParam => getActivities.get(searchParam ? `?${searchParam}` : '', { headers: getAuthorizationHeader() });
export const getSpecificActivities = (area, searchParam = '') => getActivities.get(`/${area}?${searchParam}`, { headers: getAuthorizationHeader() });

//餐飲相關
export const getAllRestaurant = searchParam => getRestaurant.get(searchParam ? `?${searchParam}` : '', { headers: getAuthorizationHeader() });
export const getSpecificRestaurant = (area, searchParam = '') => getRestaurant.get(`/${area}?${searchParam}`, { headers: getAuthorizationHeader() });