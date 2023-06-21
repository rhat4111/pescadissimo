import React from 'react';

interface Props {
  page?: String
}

const Footer: React.FC<Props> = ({
  page = 'login'
}) => {
  return (
    <>
      <div className="footer">
        <div className="divider"></div>
        <span className="title">{page === 'login' ? 'O inicia sesión con' : 'O regístrate con'}</span>
        <div className="external-links">
          <button type="button" className="facebook">
            <img src="/icons/facebook-lg.svg" />
          </button>
          <button type="button" className="google">
            <img src="/icons/facebook-lg.svg" />
          </button>
        </div>
      </div>

      <style jsx>
        {`
          .footer {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .footer .divider {
            max-width: 413px;
            width: 100%;
            height: 0.5px;
            background: #C4C4C4;
            margin-bottom: 30px;
          }

          .footer .title {
            font-family: Montserrat;
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
            margin-bottom: 43px;
            text-align: center;
            color: #000000;
          }
          
          .footer .external-links img {
            width: 81px;
            height: 81px;
          }

          .footer .external-links button {
            padding: 0;
            background: none;
            border: none;
          }

          .footer .external-links button.google {
            margin-left: 50px;
          }

          @media(max-width: 1024px) {
            .footer .divider {
              max-width: 330px;
              margin-bottom: 24px;
            }

            .footer .title {
              font-size: 20px;
              line-height: 24px;
              margin-bottom: 34px;
            }
            
            .footer .external-links img {
              width: 65px;
              height: 65px;
            }

            .footer .external-links button.google {
              margin-left: 40px!important;
            }
          }

          @media(max-width: 768px) {
            .footer .title {
              font-size: 14px;
              line-height: 17px;
              margin-bottom: 12px;
            }

            .footer .external-links img {
              width: 42px;
              height: 42px;
            }

            .footer .external-links button.google {
              margin-left: 32px!important;
            }
          }
        `}
      </style>
    </>
  );
};

export default Footer;