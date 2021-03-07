import React, { useContext } from 'react';
import { CatagoryContext } from '../../../App';

const CategoriesDetail = () => {
  const category = useContext(CatagoryContext);
  return (
    <div>
      <h4>this is catagories details category : {category} </h4>
      <p> catagory :{category}</p>
    </div>
  );
};

export default CategoriesDetail;
