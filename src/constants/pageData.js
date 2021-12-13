export const PAGE_NUM = 30;

export const HOME_REGION = [
  '北部地區',
  '中部地區',
  '南部地區',
  '東部地區'
];

export const HOME_DETAIL = [
  '包括臺北市、新北市、基隆市、宜蘭縣、桃園市、新竹縣及新竹市等縣市。您可以從臺灣最高樓-臺北101俯瞰臺北美景；前往故宮博物院一窺歷史典藏文物瑰寶；或走進知名老街如：九份、淡水、鶯歌、三峽等感受古街風情記憶。',
  '包含苗栗縣、臺中市、彰化縣、南投縣及雲林縣等縣市，位於臺灣心臟地帶，常年氣候舒適，尤其是臺中市，四季氣溫宜人，非常適合旅行。中部地區擁有多處老少皆宜的渡假村及遊樂中心，值得深入欣賞。',
  '臺灣南部地區散發著濃厚的歷史文化，臺南市是全台歷史最悠久的文化古都，氣候四季如夏，位於屏東有「臺灣南洋」之稱的墾丁公園，得天獨厚，浮潛融入海中美景、暢玩水上新潮活動，再前往臺灣最南端的「鵝鑾鼻」，左看太平洋右覽臺灣海峽的壯碩景觀。',
  '包含花蓮縣及臺東縣2個縣市，東臨浩瀚太平洋，西倚中央山脈，擁有臨山面海的優越地理位置，東部地區擁有豐富的生態資源、悠久的農業文化和純樸善良的在地居民，是臺灣的「後花園」，非常適合慢活養生之旅，行走在這塊淨土上，放慢你的呼吸頻率，大口吸入甜甜的空氣香。'
];

export const INFO_TYPE = {
  TIME: 'time',
  ADDRESSTEXT: 'addressText',
  PHONENUM: 'phonenum',
  MONEY: 'money',
  CLASS: 'class',
  COMMENT: 'comment',
  OTHER: 'other',
  WEBSITE: 'website',
  ORGANIZE: 'Organize',
};

export const getBackgroundImg = (pathName, width) => {
  switch (pathName) {
    case 'scenicSpots':
      return {
        '全部地區': `https://images.unsplash.com/photo-1583395145517-1e3177037600?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${width}&q=80`,
        '北部': `https://images.unsplash.com/photo-1508248467877-aec1b08de376?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${width}&q=80`,
        '中部': `https://images.unsplash.com/photo-1606659102514-41ed411f3c13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=${width}&q=80`,
        '南部': `https://images.unsplash.com/photo-1606551507367-587a92192aff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=${width}&q=80`,
        '東部': `https://images.unsplash.com/photo-1564023967307-27f9d19d3474?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=${width}&q=80`,
        '離島': `https://images.unsplash.com/photo-1568110929146-c5e9854fc7a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=${width}&q=80`,
      };
    case 'hotels':
      return `https://images.unsplash.com/photo-1576354302919-96748cb8299e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${width}&q=80`;
    case 'activities':
      return `https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=${width}&q=80`;
    case 'restaurant':
      return `https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=${width}&q=80`;
    default:
      return `https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=${width}&q=80`;
  }
};