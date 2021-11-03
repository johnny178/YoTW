import { useEffect, useState } from 'react';

const PAGE_NUM = 30;
export default function useHttp(query, filterData, pageNumber, callAPI) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setData([]);
  }, [query, filterData]);

  useEffect(() => {
    setLoading(true);
    setError(false);

    let filterName = query.length !== 0 ? ` and contains(NAME,'${query}')` : '';
    let searchParam = new URLSearchParams([
      ['$top', PAGE_NUM],
      ['$filter', `Picture/PictureUrl1 ne null${filterName}`],
      ['$skip', (pageNumber - 1) * PAGE_NUM],
      ['$format', 'JSON'],
    ]);

    const updateData = async () => {
      try {
        let resp = await callAPI(filterData, searchParam);

        setData(prevData => { return [...prevData, ...resp.data]; });
        setHasMore(resp.data.length === PAGE_NUM);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    const delay = setTimeout(() => {
      updateData();
    }, 500);

    return () => {
      clearTimeout(delay);
    };
  }, [query, filterData, pageNumber]);

  return { loading, error, data, hasMore };
}
