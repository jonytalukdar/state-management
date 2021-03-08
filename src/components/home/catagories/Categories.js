import React, { useContext, useEffect, useState } from 'react';
import { CatagoryContext } from '../../../App';
import CategoriesDetail from '../categoriesDetails/CategoriesDetail';

const allProducts = [
  { name: 'lenovo', category: 'laptop' },
  { name: 'dell', category: 'laptop' },
  { name: 'samsung', category: 'laptop' },
  { name: 'opp', category: 'phone' },
  { name: 'sony ', category: 'camera' },
  { name: 'cannon', category: 'camera' },
  { name: 'apple', category: 'phone' },
  { name: 'black-berry', category: 'mobile' },
  { name: 'asus', catergory: 'camera' },
];

const Categories = () => {
  const [category] = useContext(CatagoryContext);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const matchProducts = allProducts.filter(
      (pd) => pd.category === category.toLowerCase()
    );
    setProduct(matchProducts);
  }, [category]);
  return (
    <div>
      <h2>Select your category : {category}</h2>
      {product.map((pd) => (
        <CategoriesDetail key={pd.name} product={pd}></CategoriesDetail>
      ))}
    </div>
  );
};

export default Categories;
