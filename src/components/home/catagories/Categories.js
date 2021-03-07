import React from 'react';
import CategoriesDetail from '../categoriesDetails/CategoriesDetail';

const Categories = (props) => {
  const { count } = props;
  return (
    <div>
      <h2>Select your catagory</h2>
      <CategoriesDetail count={count}></CategoriesDetail>
    </div>
  );
};

export default Categories;
