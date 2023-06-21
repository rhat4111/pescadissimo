import React from 'react';
import { Filter } from 'components/shared/Filter';

export const Banner: React.FC = () => {
  return (
    <>
      <div className="banner">
        <div>
          <div className="title">
            ¿Deseas comprar
          <span className="red"> marisco </span>
          online?<br />
          ¡Esta es tu tienda!
         </div>
          <div className="description">
            En Pescadissimo podrás encontrar la mejor selección de marisco online
          <br />
            <b>¡Estamos siempre abiertos!</b>
            <br />
            <br />
          Nosotros hacemos posible que puedas comprar marisco fresco por internet.
        </div>
          <div className="filter-container">
            <Filter text="¿Qué te apetece hoy?" />
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .banner {
            padding-top: 100px;
            width: 100%;
            height: 606px;
            margin-top: -92px;
            background: url("/buy/seafood/bg.png");
            background-size: cover;
            background-position: center;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .banner .title {
            font-weight: 800;
            font-size: 48px;
            line-height: 59px;
            margin-bottom: 64px;
            text-align: center;
            color: #FFFFFF;
            text-align: center;
          }

          .banner .title .red {
            color: #D61016;
          }

          .banner .description {
            font-weight: 500;
            font-size: 18px;
            line-height: 22px;
            margin-bottom: 54px;
            text-align: center;
            color: #FFFFFF;
          }

          @media(max-width: 1024px) {
            .banner {
              padding-top: 50px;
              height: 529px;
            }

            .banner .title {
              font-size: 36px;
              line-height: 44px;
              margin-bottom: 35px;
            }

            .banner .description {
              font-size: 14px;
              line-height: 17px;
              margin-bottom: 54px;
            }
          }
          
          @media(max-width: 768px) {
            .banner {
              padding: 20px 100px;
              height: 526px;
            }

            .banner .title {
              font-size: 22px;
              line-height: 27px;
              margin-bottom: 22px;
              text-align: left;
            }

            .banner .description {
              margin-bottom: 48px;
              text-align: left;
            }
          }
        `}
      </style>
    </>
  );
};