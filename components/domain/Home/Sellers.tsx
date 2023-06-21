import React, { useState } from 'react';
import { Seller } from 'types';
import Carousel, { consts } from 'react-elastic-carousel';
import { SellerCard } from 'components/shared/SellerCard';

interface Props {
  data: Seller[];
}

export const Sellers: React.FC<Props> = ({ data }) => {
  const [breakPoints, setBreakPoints] = useState([
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 968, itemsToShow: 2 },
    { width: 1024, itemsToShow: 3 },
  ]);

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? 'left' : 'right'
    return (
      <img src={`/home/icons/arrow-${pointer}.svg`} onClick={onClick} />
    )
  };

  return (
    <>
      <div className="venders">
        <div className="title">NUESTROS VENDEDORES</div>
        <div className="description">
          Contamos con los mejores profesionales del sector, siendo expertos en vender pescado y marisco.<br /><br />
            Sabemos que tú también tienes experiencia en comprar pescado y marisco online. Recuerda que si decides comprar localmente
            <b>¡podrás recibir el pedido antes!</b>
        </div>
        <div className="sliderContainer">
          <Carousel
            breakPoints={breakPoints}
            renderArrow={myArrow}
            renderPagination={() => { return <></> }}
          >
            {
              data.map((item, index) => {
                return (
                  <div key={index} style={{ padding: '0 10px' }}>
                    <SellerCard {...item} />
                  </div>
                );
              })
            }
          </Carousel>
        </div>
        <div className="footer">
          <span>
            Todas las tiendas
              <img src="/icons/long-arrow.png" />
          </span>
        </div>
      </div>

      <style jsx>
        {`
          .venders {
            background: #212121;
            padding: 64px 118px 90px 68px;
            color: #FFF;
            font-family: Montserrat;
          }

          .venders .title {
            font-weight: 800;
            font-size: 36px;
            line-height: 44px;
            margin-bottom: 53px;
          }

          .venders .description {
            max-width: 577px;
            width: 100%;
            padding: 32px 20px;
            border-left: 1px solid #FFF;
            font-size: 18px;
            line-height: 22px;
            margin-bottom: 45px;
          }

          .venders .footer {
            margin-top: 47px;
            padding: 12px 0;
            border-top: 1px solid #FFF; 
            display: flex;
            justify-content: flex-end;
          }

          .venders .footer span {
            font-weight: bold;
            font-size: 16px;
            line-height: 20px;
          }

          .venders .footer span img {
            margin-left: 12px;
          }

          @media(max-width: 1024px) {
            .venders {
              padding: 57px 68px 90px 68px;
            } 

            .venders .title {
              font-size: 32px;
              line-height: 39px;
              margin-bottom: 48px;
            }

            .venders .description {
              padding: 35px 20px;
              border-left: 1px solid #FFF;
              font-size: 16px;
              line-height: 20px;
              margin-bottom: 51px;
            }
          }

          @media(max-width: 768px) {
            .venders {
              padding: 44px 14px 64px;
            } 

            .venders .title {
              font-size: 20px;
              line-height: 24px;
              margin-bottom: 32px;
            }

            .venders .description {
              padding: 20px;
              font-size: 14px;
              line-height: 16px;
              margin-bottom: 33px;
            }
            .venders .footer span {
              font-size: 16px;
              line-height: 20px;
            }
          }
        `}
      </style>
    </>
  )
}