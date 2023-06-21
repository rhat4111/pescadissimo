import React, { useState } from 'react';
import { Sellers as SellerContainer, Filter, Pagination } from 'components/domain/Sellers';
import { useSeller } from 'store';
import Header from 'layouts/Header';

const Sellers: React.FC = () => {
  const { sellers } = useSeller();
  console.log(sellers);
  const [page, setPage] = useState(1);
  const [sellersPerPage, setSellersPerPage] = useState(12);
  const pageSellers = !sellers ? [] : sellers.slice((page - 1) * sellersPerPage, page * sellersPerPage);

  return (
    <>
      <Header textColor="white" logoColor="white" />
      <div className="seller-container">
        <div className="banner">
          <div className="bg"></div>
          <p className="title">NUESTROS VENDEDORES</p>
          <p className="description">De dónde vienen nuestros productos</p>
        </div>
        <div className="venderCards">
          <Filter />
          <SellerContainer data={pageSellers} />
          <Pagination
            handlePagination={setPage}
            currentPage={page}
            totalPageCount={Math.ceil(sellers.length / sellersPerPage)}
          />
        </div>
      </div>
      <style jsx>
        {`
          .seller-container {
            margin-top: -92px;
            padding-top: 92px;
            background: #212121;
          }

          .seller-container .banner {
            padding: 20px 56px 85px 64px ;
          }

          .seller-container .venderCards {
            padding: 0 56px 180px 64px;
          }

          .banner .bg {
            width: 100%;
            height: 552px;
            background: url("/sellers/bg.png");
            background-size: cover;
            background-position: center;
          }

          .banner .title {
            margin: 54px 0 0;
            font-family: Montserrat;
            font-style: normal;
            font-weight: 800;
            font-size: 64px;
            line-height: 78px;
            text-align: center;
            color: #FFFFFF;
          }

          .banner .description {
            font-family: Montserrat;
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            line-height: 29px;
            text-align: center;
            color: #FFFFFF;
            margin-top: 12px;
          }

          @media(max-width: 1024px) {
            .seller-container .banner {
              padding: 20px 68px 61px;
            }

            .seller-container .venderCards {
              padding: 0 68px 155px ;
            }

            .banner .bg { 
              height: 841px;
            }

            .banner .title {
              font-size: 48px;
              line-height: 59px;
            }

            .banner .description {
              font-size: 18px;
              line-height: 22px;
              margin-top: 20px;
            }
          }

          @media(max-width: 500px) {
            .seller-container .banner {
              padding: 0px 25px 20px;
            }

            .seller-container .venderCards {
              padding: 0 22px 100px;
            }

            .banner .bg { 
              height: 324px;
            }

            .banner .title {
              font-size: 36px;
              line-height: 44px;
            }

            .banner .description {
              font-size: 14px;
              line-height: 17px;
              margin-top: 6px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Sellers;