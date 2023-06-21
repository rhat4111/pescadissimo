import React from 'react';

export const Community: React.FC = () => {
  return (
    <>
      <div className="community">
        <fieldset>
          <legend>COMUNIDAD</legend>
          <p className="title">
            ¿Quieres vender pescado o marisco online sin moverte de casa?
            </p>
          <p className="description">
            ¡Esta es tu oportunidad!
            </p>
        </fieldset>
        <div className="footer">
          <span>
            Te ayudamos
            <img src="/icons/long-arrow.png" />
          </span>
        </div>
      </div>

      <style jsx>
        {`
          .community {
            background: #DD3B40;
            padding: 74px 118px;
            color: #FFF;
          }

          .community fieldset {
            border: 1px solid #FFF;
            border-left: 0;
            border-right: 0;
            padding: 115px 0 105px;
          }

          .community legend {
            font-family: Montserrat;
            font-size: 16px;
            line-height: 20px;
            text-align: center;
            padding: 0 50px;
            width: auto;
          }

          .community .title {
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 48px;
            line-height: 59px;
            text-align: center;
            margin-bottom: 94px;
          }

          .community .description {
            font-family: Montserrat;
            font-style: normal;
            font-weight: 500;
            font-size: 36px;
            line-height: 44px;
            text-align: center;
          }

          .community .footer {
            display: flex;
            justify-content: flex-end;
            margin-top: 12px;
          }

          .community .footer span {
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 18px;
            line-height: 22px;
            text-align: right;
          }

          .community .footer span img {
            margin-left: 8px;
          }

          @media(max-width: 1024px) {
            .community {
              padding: 64px 81px;
            }

            .community fieldset {
              padding: 139px 0 107px;
            }

            .community legend {
              padding: 0 40px;
            }

            .community .title {
              font-size: 36px;
              line-height: 44px;
              margin-bottom: 68px;
            }

            .community .description {
              font-size: 24px;
              line-height: 29px;
            }

            .community .footer span {
              font-size: 16px;
              line-height: 20px;
            }

            .community .footer span img {
              margin-left: 8px;
            }
          }

          @media(max-width: 768px) {
            .community {
              padding: 40px 16.5px;
            }

            .community fieldset {
              padding: 88px 0 83px;
            }

            .community legend {
              padding: 0 20px;
              font-size: 10px;
              line-height: 12px;
            }

            .community .title {
              font-size: 18px;
              line-height: 22px;
              margin-bottom: 28px;
            }

            .community .description {
              font-size: 14px;
              line-height: 17px;
            }

            .community .footer span {
              font-size: 12px;
              line-height: 15px;
            }
          }
        `}
      </style>
    </>
  );
};