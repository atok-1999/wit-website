import { useState, useEffect, Dispatch } from 'react';

const useFetchData = (collection: string) => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    fetchData(collection, setData);
  }, [collection]);

  return [data, setData];
};

const fetchData = async (collection: string, setData: Dispatch<any>) => {
  const res = await fetch(`http://localhost:1337/${collection}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  setData(await res.json());
};

export default useFetchData;
