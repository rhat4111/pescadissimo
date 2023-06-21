import React from 'react';

const SubscribeNewsLetter: React.FC = () => {
  return (
    <>
      <div className="news-container">
        <div className="title">
          Suscríbete a nuestra newsletter
        </div>
        <div className="main">
          <div className="form-container">
            <div className="form">
              <p className="title">
                Suscríbete y recibe las<br /> últimas ofertas y novedades
              </p>
              <input type="text" placeholder="Correo electrónico" />
              <div className="policy-accept">
                <input type="checkbox" />
                <p>
                  Acepto los Términos, <span>Aviso Legal</span>y <span>Política de privacidad</span>.
                </p>
              </div>
              <button className="subscribe">Suscribirme</button>
            </div>
          </div>
          <div className="image"></div>
        </div>
      </div>

      <style jsx>
        {`
          .news-container {
            padding: 64px 0 188px;
            background: #FFFCF4;
          }

          .news-container .title {
            padding-left: 67px;
            font-weight: bold;
            font-size: 36px;
            line-height: 44px;
            color: #D61016;
            padding-bottom: 44px;
          }

          .news-container .main {
            display: flex;
            width: 100%;
          }

          .news-container .main .form-container {
            position: relative;
            z-index: 10;
            width: 477px;
            padding-right: 82px;
            padding-left: 67px;
            display: flex;
            align-items: center;
          }

          .news-container .main .form-container .form {
            width: 100%;
          }

          .news-container .main .form-container .form .title {
            font-weight: 500;
            font-size: 22px;
            line-height: 27px;
            color: #000000;
            padding: 0;
            margin-top: 0;
            margin-bottom: 43px;
          }

          .news-container .main .form-container .form input {
            width: 100%;
            height: 44px;
            border-radius: 13px;
            background: #FFEEEE;
            text-align: center;
            border: none;
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
            color: #B08989;
            margin-bottom: 22px;
          }

          .news-container .main .form-container .form input::placeholder {
            color: #B08989;
          }

          .news-container .main .form-container .form .policy-accept {
            display: flex;
            margin-bottom: 35px;
          }

          .news-container .main .form-container .form .policy-accept input {
            width: 20px;
            height: 20px;
            margin: 0;
          }

          .news-container .main .form-container .form .policy-accept p {
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            margin: 0 0 0 8px;
          }

          .news-container .main .form-container .form .policy-accept p span {
            color: #D61016;
          }

          .news-container .main .form-container .form .subscribe {
            width: 100%;
            height: 44px;
            background: #D61016;
            border-radius: 13px;
            border: none;
            font-weight: 600;
            font-size: 16px;
            line-height: 20px;
            text-align: center;
            color: #FFFFFF;
          }

          .news-container .main .form-container .form .subscribe:focus {
            outline: none;
          }

          .news-container .main .image {
            width: calc(100% - 477px);
            height: 521px;
            background: url("/layouts/subscribe/bg.png");
            background-size: cover;
            background-position: right;
          }

          @media(max-width: 1024px) {
            .news-container .title {
              color: #000;
              font-size: 32px;
              line-height: 39px;
              padding-bottom: 109px;
            }

            .news-container .main .form-container {
              padding-right: 122px;
            }

            .news-container .main .form-container .form .title {
              font-size: 18px;
              line-height: 22px;
            }
          }

          @media(max-width: 880px) {
            .news-container {
              background: #FFAEAE;
              padding: 82px 0 0;
            }

            .news-container .main {
              flex-direction: column;
            }

            .news-container .main .form-container {
              width: 100%;
              display: flex;
              justify-content: center;
              padding-left: 36px!important;
              padding-right: 36px!important;
            }

            .news-container .main .form-container .form {
              max-width: 328px;
              width: 100%;
            }

            .news-container .main .image {
              width: 100%;
              margin-top: -35px;
            }
            .news-container .title {
              padding-left: 0;
              font-weight: bold;
              font-size: 18px!important;
              line-height: 22px!important;
              text-align: center;
              padding-bottom: 46px;
            }

            .news-container .main .form-container .form button {
              height: 40px;
            }
            .news-container .main .form-container .form .title {
              font-weight: 500;
              font-size: 14px!important;
              line-height: 17px!important;
              text-align: left;
            }
          }
        `}
      </style>
    </>
  )
}

export default SubscribeNewsLetter;