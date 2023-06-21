import React from 'react';
import { Accordion } from 'components/shared/Accordion';

type Sellers = {
  _id: number;
  title: string;
  content: string;
};

interface Props {
  data: Sellers[];
}

export const FAQ: React.FC<Props> = ({ data }) => {
  return (
    <>
      <div className="faq">
        <div className="title">¿Tienes dudas?</div>
        <div className="description">
          Consulta nuestras preguntas frecuentes. Si aún tienes dudas, puedes
          <span className="red"> consultarnos</span>.
        </div>
        <div className="sub-title">FAQS Vendedores</div>
        <div className="item">
          {
            data.map((item, index) => {
              return (
                <Accordion
                  opened={false}
                  key={index}
                  {...item} color="white"
                />
              );
            })
          }
        </div>
      </div>

      <style jsx>
        {`
          .faq {
            padding: 18px 118px 172px;
          }

          .faq .title {
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 48px;
            line-height: 59px;
            text-align: center;
            color: #FFFFFF;
            margin-bottom: 25px;
          }

          .faq .description {
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 24px;
            line-height: 29px;
            text-align: center;
            color: #FFFFFF;
            margin-bottom: 39px;
          }

          .faq .sub-title {
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 36px;
            line-height: 44px;
            text-align: center;
            color: #FFFFFF;
            margin-bottom: 92px;
          }

          @media(max-width: 1024px) {
            .faq {
              padding: 76px 60 px 12px;
            }

            .faq .title {
              font-size: 36px;
              line-height: 44px;
              margin-bottom: 41px;
            }

            .faq .description {
              font-size: 18px;
              line-height: 22px;
              margin-bottom: 40px;
            }

            .faq .sub-title {
              font-size: 36px;
              line-height: 44px;
              margin-bottom: 62px;
            }
          }

          @media(max-width: 768px) {
            .faq {
              padding: 40px 16px 32px;
            }

            .faq .title {
              font-size: 24px;
              line-height: 29px;
              margin-bottom: 32px;
            }

            .faq .description {
              font-size: 14px;
              line-height: 17px;
              margin-bottom: 40px;
            }

            .faq .sub-title {
              font-size: 24px;
              line-height: 29px;
              margin-bottom: 56px;
            }
          }
        `}
      </style>
    </>
  );
};