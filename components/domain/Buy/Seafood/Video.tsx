import React from 'react';

export const Video: React.FC = () => {
  return (
    <>
      <div className="video-container">
        <p className="title">¿Cómo funciona el proceso de compra?</p>
        <video className="video" src="/buy/seafood/1.mp4" controls></video>
        <div className="description-container">
          <p className="description">
            Para los amantes del buen marisco, de los productos recién capturados, de la mejor calidad y maxima frescura, colaboran con nosotros loe mejores vendedores de marisco y pescado fresco provenientes de los principales puertos pesqueros españoles. Gracias a ellos, podrás comprar marisco fresco online en todas sus variedades.<br />
          Nuestro objetivo es que la compra de marisco a domicilio sea una experiencia única, para que disfrutes de la calidad y comodidad que solo ofrece <span className="red">Pescadissimo</span>.
        </p>
        </div>
      </div>

      <style jsx>
        {`
          .title {
            text-align: center;
            padding: 0 133px 48px;
            font-weight: bold;
            font-size: 36px;
            line-height: 44px;
            color: #D61016;
          }

          .video {
            width: 100%;
          }

          .description-container {
            padding: 52.5px 133px;
            background: #FFF8F8;
          }

          .description {
            border-top: 1px solid #000;
            border-bottom: 1px solid #000;
            padding: 168px 0;
            font-size: 20px;
            line-height: 24px;
            text-align: center;
            color: #000000;
          }

          @media(max-width: 1024px) {
            .title {
              padding: 0 75px 81px 103px;
              font-size: 32px;
              line-height: 39px;
            }

            .description-container {
              padding: 67px 75px 67px 103px;
            }

            .description {
              padding: 83px 0;
              font-size: 18px;
              line-height: 22px;
            }
          }

          @media(max-width: 768px) {
            .title {
              padding: 0 30px 32px;
              font-size: 20px;
              line-height: 24px;
            }

            .description-container {
              padding: 25px;
            }

            .description {
              padding: 24px 0;
              font-size: 12px;
              line-height: 15px;
            }
          }
        `}
      </style>
    </>
  );
};