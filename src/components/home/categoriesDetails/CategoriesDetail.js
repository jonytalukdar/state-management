import React, { useContext } from 'react';
import { CatagoryContext } from '../../../App';

const CategoriesDetail = () => {
  const count = useContext(CatagoryContext);
  return (
    <div>
      <h4>this is catagories details count : {count} </h4>
      <p> catagory :{count}</p>
    </div>
  );
};

export default CategoriesDetail;
