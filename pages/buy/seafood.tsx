import React from 'react';
import { ProductList } from 'components/shared/Products';
import { Banner, Video } from 'components/domain/Buy/Seafood';
import { Opinion } from 'components/shared/Opinion';
import { Delivery } from 'components/shared/Delivery';
import { useProduct, useFilter } from 'store';
import Header from 'layouts/Header';

const Fish: React.FC = () => {
  const { filter } = useFilter();
  const { products } = useProduct();
  let jsonData = !!products && products.filter(item => {
    return item['productBase']['filters']['category'].indexOf('fish');
  });

  return (
    <>
      <Header textColor="white" logoColor="white" />
      <Banner />
      <div className="seafood-container">
        <div className="product-container">
          <ProductList filter={filter} ProductList={jsonData} />
        </div>
      </div>
      <Opinion />
      <Video />
      <Delivery />

      <style jsx>
        {`
          .seafood-container {
            padding: 56px;
          }

          @media(max-width: 1024px) {
           .seafood-container {
              padding: 32px;
            } 
          }

          @media(max-width: 768px) {
           .seafood-container {
              padding: 16px;
            } 
          }
        `}
      </style>
    </>
  );
};

export default Fish;