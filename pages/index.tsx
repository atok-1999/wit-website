import * as React from 'react';
import Home from 'src/components/organisms/Home';

// import useFetchData from 'src/api/useFetchData';

const Index = () => {
  // const [data, setData] = useFetchData('news');

  return (
    <div>
      {/* {data.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <small>{item.date}</small>
          <p>{item.description}</p>
        </div>
      ))} */}
      <Home />
    </div>
  );
}

export default Index;