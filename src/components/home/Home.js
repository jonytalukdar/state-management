import React from 'react';
import Categories from './catagories/Categories';

const Home = (props) => {
  const { count } = props;
  return (
    <div style={{ border: '1px solid purple' }}>
      <h1>this is home count : {count}</h1>
      <Categories count={count}></Categories>
    </div>
  );
};

export default Home;
