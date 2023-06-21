import React from 'react';

export const Banner: React.FC = () => {
  return (
    <>
      <div>
        <div className="banner"></div>
        <div className="title">CONVIERTETE EN VENDEDOR</div>
        <div className="description">Vende pescado y marisco online sin moverte de casa en Pescadissimo</div>
        <div className="banner1">
          <p className="title">¿CUÁNTO ME CUESTA SUSCRIBIRME A PESCADISSIMO?</p>
          <p className="description">
            ¡CREA TU PROPIA TIENDA ONLINE SIN COSTE ALGUNO!
          </p>
          <div className="underline"></div>
        </div>
      </div>

      <style jsx>
        {`
          .banner {
            width: 100%;
            height: 552px;
            background: url("/become/seller-bg.png");
            background-size: cover;
            background-position: center;
            margin-bottom: 54px;
          }

          .title {
            font-family: Montserrat;
            font-style: normal;
            font-weight: 800;
            font-size: 64px;
            line-height: 78px;
            text-align: center;
            color: #FFFFFF;
            margin-bottom: 12px;
          }

          .description {
            font-family: Montserrat;
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            line-height: 29px;
            text-align: center;
            color: #FFFFFF;
            margin-bottom: 107px;
          }

          .banner1 {
            width: 100%;
            height: 606px;
            background: url("/become/seller-bg-1.png");
            background-size: cover;
            background-position: right;
            margin-bottom: 94px;
            padding: 266px 0 0 52px;
          }

          .banner1 .title {
            max-width: 831px;
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 36px;
            text-align: left;
            line-height: 44px;
            color: #81737C;
            margin-bottom: 73px;
          }

          .banner1 .description {
            font-family: Montserrat;
            font-style: normal;
            text-align: left;
            font-weight: bold;
            font-size: 24px;
            line-height: 29px;
            color: #81737C;
            margin-bottom: 36px;
          }

          .banner1 .underline {
            width: 60px;
            height: 1px;
            background: #4A3D5A;
          }

          @media(max-width: 1024px) {
            .banner {
              margin: -92px -26px;
              width: calc(100% + 52px);
              height: 428px;
              margin-bottom: 38px;
            }

            .title {
              font-size: 36px;
              line-height: 44px;
              margin-bottom: 38px;
            }

            .description {
              font-size: 24px;
              line-height: 29px;
              margin-bottom: 68px;
            }

            .banner1 {
              height: 443px;
              margin-bottom: 76px;
              padding: 205px 0 0 21px;
            }

            .banner1 .title {
              max-width: 831px;
              width: 100%;
              font-size: 24px;
              line-height: 29px;
              margin-bottom: 52px;
            }

            .banner1 .description {
              font-size: 18px;
              line-height: 22px;
              margin-bottom: 36px;
            }

            .banner1 .underline {
              display: none;
            }
          }
          @media(max-width: 768px) {
            .banner {
              width: 100%;
              height: 324px;
              margin: 0 0 32px;
            }

            .title {
              font-size: 32px;
              line-height: 39px;
              margin-bottom: 16px;
            }

            .description {
              font-size: 12px;
              line-height: 15px;
              margin-bottom: 48px;
            }

            .banner1 {
              height: 324px;
              margin-bottom: 88px;
              padding: 135px 0 0 14px;
            }

            .banner1 .title {
              max-width: 891px;
              font-size: 18px;
              line-height: 22px;
              margin-bottom: 34px;
              color: #212121;
            }

            .banner1 .description {
              max-width: 891px;
              font-size: 18px;
              line-height: 22px;
            }

            .banner1 .underline {
              display: none;
            }
          }
        `}
      </style>
    </>
  );
};