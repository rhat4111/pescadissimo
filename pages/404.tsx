import React from 'react';
import Header from 'layouts/Header';
import { Image } from 'components/shared/Image';

const Custom404: React.FC = () => {
  return (
    <>
      <Header />
      <div className="error-container">
        <p className="title">¡OH OH!</p>
        <div className="description">
          <p>
            Parece que has llegado a puerto desconocido. ¡Sigue<br />
            navegando hasta el siguiente embarcadero!
          </p>
          <Image />
        </div>
      </div>

      <style jsx>
        {`
          .error-container {
            margin-top: -92px;
            padding-top: 177px;
            padding-bottom: 50px;
            background: #FFFCF4;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .error-container .title {
            font-weight: 900;
            font-size: 64px;
            line-height: 78px;
            color: #D61016;
            margin-bottom: 37px;
          }

          .description {
            width: 100%;
            position: relative;
          }

          .description p {
            text-align: center;
            width: 100%;
            font-size: 36px;
            line-height: 44px;
            color: #D61016;
            position: absolute;
            top: 0;
          }
        `}
      </style>
    </>
  );
};

export default Custom404;