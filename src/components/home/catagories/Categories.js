import React, { useContext } from 'react';
import { CatagoryContext } from '../../../App';
import CategoriesDetail from '../categoriesDetails/CategoriesDetail';

const Categories = () => {
  const category = useContext(CatagoryContext);
  return (
    <div>
      <h2>Select your category : {category}</h2>
      <CategoriesDetail></CategoriesDetail>
    </div>
  );
};

export default Categories;
