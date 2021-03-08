import React, { useContext } from 'react';
import { CatagoryContext } from '../../../App';

const CategoriesDetail = (props) => {
  // const category = useContext(CatagoryContext);
  const { name } = props.product;
  return (
    <div>
      <h4>this is catagories details category : {name} </h4>
      <p> catagory :{name}</p>
    </div>
  );
};

export default CategoriesDetail;
