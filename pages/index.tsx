import React from 'react';
import useFetchData from '../src/api/useFetchData';

export default function Home() {
  const [data, setData] = useFetchData('news');

  return (
    <div>
      {data.map((item) => (
        <div>
          <h2>{item.title}</h2>
          <small>{item.date}</small>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}
