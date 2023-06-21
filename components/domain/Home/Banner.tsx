import React from 'react';
import { Filter } from 'components/shared/Filter';

export const Banner: React.FC = () => {
  return (
    <>
      <div className="banner">
        <p className="heading">
          Tu tienda de compra y venta de pescado y marisco online
          </p>
        <div className="filter-container">
          <Filter text="¿Qué te apetece hoy?" />
        </div>
      </div>

      <style jsx>
        {`
          .banner {
            width: 100%;
            height: 711px;
            background: url('/home/bg.png');
            background-size: cover;
            background-position: center;
            margin-top: -108px;
            position: relative;
            z-index: 10;
          }

          .banner .heading {
            position: absolute;
            width: 665px;
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 48px;
            line-height: 59px;
            color: #FFFFFF;
            top: 158px;
            left: 167px;
          }

          .banner .filter-container {
            position: absolute;
            display: flex;
            justify-content: center;
            width: 100%;
            bottom: 160px;
          }

          @media(max-width: 1024px) {
            .banner .heading {
              max-width: 550px;
              font-weight: bold;
              font-size: 36px;
              line-height: 44px;
              top: 198px;
              left: 67px;
            }
          }

          @media(max-width: 768px) {
            .banner {
              height: 562px;
            }
            .banner .heading {
              max-width: 287px;
              font-weight: bold;
              font-size: 24px;
              line-height: 29px;
              top: 166px;
              left: 36px;
            }
          }
        `}
      </style>
    </>
  );
}