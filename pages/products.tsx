import React from 'react';

import { Filter } from 'components/shared/Filter';
import { ProductList } from 'components/shared/Products';
import { useFilter, useProduct } from 'store';
import Header from 'layouts/Header';

const Products: React.FC = () => {
  const { products } = useProduct();
  const { filter } = useFilter();

  return (
    <>
      <>
        <Header logoColor="white" textColor="white" />
        <div className="banner">
          <div>
            <p className="title">Nuestros productos</p>
            <Filter text="¿Qué te apetece hoy?" />
          </div>
        </div>

        <div className="products-container">
          <p className="title">
            <span>La mejor selección de pescados y mariscos</span>
            <img src="/icons/filter-dark.svg" />
          </p>

          <ProductList filter={filter} ProductList={products} />

          {/* <ProductsFilter /> */}
          {/* <ProductContainer data={productList ? productList : []} /> */}
          {/* <Pagination /> */}
        </div>

        {/* <BestProducts products={props.products} /> */}
      </>
      <style jsx>
        {`
          .products-container {
            padding: 50px 56px 100px;
          }

          .products-container>.title {
            display: flex;
            justify-content: space-between;
            font-weight: bold;
            font-size: 18px;
            line-height: 22px;
            color: #000000;
            padding-bottom: 32px;
            border-bottom: 1px solid #000;
            margin-bottom: 0;
          }

          .banner {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 606px;
            background: url("/products/bg.png");;
            background-size: cover;
            background-position: center;
            margin-top: -92px;
          }

          .banner .title {
            margin-top: 50px;
            font-family: Montserrat;
            font-style: normal;
            font-weight: 800;
            font-size: 48px;
            line-height: 59px;
            text-align: center;
            color: #FFFFFF;
            margin-bottom: 74px;
          }

          .products-container>.title img {
            display: none;
          }

          @media(max-width: 1024px) {
            .products-container {
              padding: 44px 47px 148px;
            }

            .banner {
              height: 686px;
            }

            .banner .title {
              margin-top: 0;
              font-size: 36px;
              line-height: 44px;
              margin-bottom: 89px;
            }
          }

          @media(max-width: 912px) {
            .products-container {
              padding: 48px 17px 57px;
            }

            .products-container>.title img {
              display: block;
            }
          }

          @media(max-width: 768px) {
            .banner {
              height: 360px;
            }

            .banner .title {
              margin-top: 80px;
              font-size: 24px;
              line-height: 29px;
              margin-bottom: 80 px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Products;