import React, { useState } from 'react';
import { Product } from 'types';
import Carousel, { consts } from 'react-elastic-carousel';
import { ProductCard } from 'components/shared/ProductCard';

interface Props {
  data: Product[];
}

export const Products: React.FC<Props> = ({ data }) => {
  const [breakPoints, setBreakPoints] = useState([
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 968, itemsToShow: 2 },
    { width: 1024, itemsToShow: 2 },
    { width: 1440, itemsToShow: 2 },
  ]);

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? 'left' : 'right'
    return (
      <img src={`/home/icons/arrow-${pointer}.svg`} onClick={onClick} />
    )
  };

  return (
    <>
      <div className="products">
        <div className="header">
          <p className="title">
            Descubre nuestros productos frescos y congelados
          </p>
          <p className="description">
            ¡Nuevos productos cada semana!
          </p>
        </div>
        <div className="content">
          <Carousel
            breakPoints={breakPoints}
            renderArrow={myArrow}
            renderPagination={() => {
              return <></>;
            }}
          >
            {
              data.map((item, index) => {
                return <div key={index} style={{ padding: "0 10px" }}><ProductCard {...item} /></div>
              })
            }
          </Carousel>
        </div>
      </div>

      <style jsx>
        {`
          .products {
            display: flex;
            background: #FDF3F3;
            padding: 133px 0;
          }

          .products .header {
            max-width: 492px;
            width: 100%;
            padding: 0 65px;
            flex-direction: column;
            display: flex;
            justify-content: center;
          }

          .products .header .title {
            font-family: Montserrat;
            font-style: normal;
            font-weight: 800;
            font-size: 36px;
            line-height: 44px;
            color: #D61016;
            margin-bottom: 16px;
          }

          .products .header .description {
            font-family: Montserrat;
            font-style: italic;
            font-weight: 500;
            font-size: 24px;
            line-height: 29px;
            color: #D61016;
            margin-bottom: 0px;
          }

          .products .content {
            width: calc(100% - 492px);
          }

          @media(max-width: 968px) {
            .products {
              display: flex;
              flex-direction: column;
              padding: 44px 15px; 
            }

            .products .header {
              padding: 0;
            }

            .products .header .title {
              width: 100%;
              font-size: 20px;
              line-height: 24px;
              color: #D61016;
              margin-bottom: 20px;
            }

            .products .header .description {
              font-size: 14px;
              line-height: 17px;
              color: #D61016;
              margin-bottom: 32px;
            }
            
            .products .content {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  );
};