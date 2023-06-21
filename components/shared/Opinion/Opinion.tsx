import React from 'react';

export const Opinion: React.FC = () => {
  return (
    <>
      <div className="opinion">
        <p className="title">NUESTRAS OPINIONES</p>
        <div className="underline"></div>
        <div className="statue">
          <ul>
            <li className="active"></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="opinion-card">
          <div className="avatar">
            <img src="/avatar/1.png" alt="" />
            <span>MARÍA FERNANDEZ</span>
          </div>
          <div className="content">
            <div>
              <p>Quedé encantada con la calidad del producto, la rapidez y el servicio. Muy recomendable, ¡repetiré sin dudarlo!</p>
              <img src="/star.png" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .opinion {
            background: #FFF;
            padding: 88px 146px 164px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .opinion .title {
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 36px;
            line-height: 44px;
            text-align: center;
            color: #000000;
            margin-bottom: 24px;
          }

          .opinion .underline {
            width: 205px;
            height: 1px;
            background: #000;
            margin-bottom: 88px;
          }

          .opinion .statue {
            margin-bottom: 42px;
          }

          .opinion .statue ul {
            margin-left: -9px;
            padding-left: 0;
            margin-bottom: 0;
            display: flex;
          }

          .opinion .statue ul li {
            width: 12px;
            list-style-type: none;
            height: 12px;
            border-radius: 6px;
            border: 1px solid #D61016;
            background: #FFF;
            margin-left: 9px;
          }

          .opinion .statue ul li.active {
            background: #D61016;
          }

          .opinion .opinion-card {
            display: flex;
            width: 100%;
            height: 420px;
            background: #FFFFFF;
            box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
            border-radius: 24px;
          }

          .opinion .opinion-card .avatar {
            width: 345px;
            padding: 0 75px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .opinion .opinion-card .avatar span {
            font-family: Montserrat;
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 22px;
            text-align: center;
            margin-top: 32px;
            color: #000000;
          }

          .opinion .opinion-card .content {
            width: calc(100% - 345px);
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .opinion .opinion-card .content>div {
            border-left:  2px solid #C4C4C4;
            padding-left: 90px;
            padding-right: 75px;
          }

          .opinion .opinion-card .content>div p {
            font-family: Montserrat;
            font-style: normal;
            font-weight: 500;
            font-size: 22px;
            line-height: 27px;
            color: #000000;
          }

          @media(max-width: 1024px) {
            .opinion {
              padding: 85px 68px 98px;
            }

            .opinion .title {
              font-size: 32px;
              line-height: 39px;
              margin-bottom: 24px;
            }

            .opinion .underline {
              margin-bottom: 84px;
            }

            .opinion .statue {
              margin-bottom: 45px;
            }

            .opinion .opinion-card {
              width: 100%;
              height: 361px;
            }

            .opinion .opinion-card .avatar { 
              width: 265px;
              padding: 0 57px;
            }

            .opinion .opinion-card .avatar img {
              width: 88px;
            }

            .opinion .opinion-card .avatar span { 
              width: 150px;
              font-size: 14px;
              line-height: 17px;
              margin-top: 24px;
            }

            .opinion .opinion-card .content {
              width: calc(100% - 265px);
            }
            .opinion .opinion-card .content>div {
              border-left:  2px solid #C4C4C4;
              padding-left: 70px;
              padding-right: 58px;
            }

            .opinion .opinion-card .content>div p {
              font-size: 18px;
              line-height: 22px;
            }
          }

          @media(max-width: 796px) {
            .opinion {
              padding: 64px 16px 98px;
            }

            .opinion .title {
              font-size: 20px;
              line-height: 24px;
            }

            .opinion .underline {
              margin-bottom: 42px;
            }

            .opinion .statue {
              margin-bottom: 28px;
            }

            .opinion .opinion-card {
              width: 100%;
              flex-direction: column;
              align-items: center;
              padding: 44px 20px;
              min-height: 342px;
            }

            .opinion .opinion-card .avatar {
              margin-bottom: 35px;
            }

            .opinion .opinion-card .avatar img {
              width: 88px;
            }

            .opinion .opinion-card .content {
              width: 100%;
            }

            .opinion .opinion-card .content>div {
              padding: 0;
              border-left:  none;
              flex-direction: column;
              align-items: center;
              display: flex;
            }

            .opinion .opinion-card .content>div p {
              text-align: center;
              order: 2;
              font-size: 14px;
              line-height: 17px;
              margin-bottom: 0;
            }
            .opinion .opinion-card .content>div img {
              order: 1;
              margin-bottom: 20px;
            }
          }
        `}
      </style>
    </>
  );
};