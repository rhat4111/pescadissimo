import React, { useState } from 'react';
import { ProductList } from 'components/shared/Products';
import { Banner } from 'components/domain/Buy/Fish';
import { Opinion } from 'components/shared/Opinion';
import { Delivery } from 'components/shared/Delivery';
import { useProduct, useFilter } from 'store';
import Header from 'layouts/Header';

const Fish: React.FC = () => {
  const { filter } = useFilter();
  const { products } = useProduct();
  let jsonData = !!products && products.filter(item => {
    return item['productBase']['filters']['category'].indexOf('seafood');
  });

  return (
    <>
      <Header textColor="white" logoColor="white" />
      <Banner />
      <div className="fish-container">
        <div className="product-container">
          <ProductList filter={filter} ProductList={jsonData} />
        </div>
        <Opinion />
      </div>
      <Delivery />

      <style jsx>
        {`
          .fish-container {
            padding: 56px;
          }

          @media(max-width: 1024px) {
           .fish-container {
              padding: 32px;
            } 
          }

          @media(max-width: 768px) {
           .fish-container {
              padding: 16px;
            } 
          }
        `}
      </style>
    </>
  );
};

export default Fish;