import React from 'react';
import { Filter } from 'components/shared/Filter';

export const Banner: React.FC = () => {
  return (
    <>
      <div className="banner">
        <div>
          <p className="title">
            ¿Deseas comprar<span className="red"> pescado </span>online?
          <br />
          ¡Esta es tu tienda!
        </p>
          <p className="description">
            Comprar pescado en cualquier tipo de pescadería de España sin moverte de casa nunca antes había sido tan fácil. En cualquier momento y desde cualquier lugar puedes hacer tu pedido:

          <b>¡Estamos siempre abiertos!</b>
          </p>
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
            font-weight: bold;
            font-size: 48px;
            line-height: 59px;
            text-align: center;
            color: #FFFFFF;
            margin-bottom: 64px;
          }

          .banner .title .red {
            color: #D61016;
          }

          .banner .description {
            font-weight: 500;
            font-size: 18px;
            line-height: 22px;
            text-align: center;
            color: #FFFFFF;
            max-width: 1040px;
            margin-bottom: 47px;
          }

          @media(max-width: 1024px) {
            .banner {
              height: 529px;
            }

            .banner .title {
              font-size: 36px;
              line-height: 44px;
              margin-bottom: 15px;
            }

            .banner .description {
              font-size: 14px;
              line-height: 17px;
              max-width: 672px;
              margin-bottom: 77px;
            }
          }

          @media(max-width: 768px) {
            .banner {
              height: 526px;
              padding: 0 20px;
            }

            .banner>div {
              width: 100%;
            }

            .banner .title {
              font-size: 22px;
              width: 100%
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