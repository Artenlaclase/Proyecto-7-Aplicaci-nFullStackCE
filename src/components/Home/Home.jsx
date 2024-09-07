import React, {useContext, useEffect} from 'react'
import ProductContext from '../../contexts/product/ProductContext';
import Products from './ProductList';

export const Home = () => {

  const { products, getProducts } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div>
        <Products 
          products={products} 
        />
      </div>
    </div>
  );
}

export default Home;