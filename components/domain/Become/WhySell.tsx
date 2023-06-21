import React from 'react';
import { Row, Col } from 'react-bootstrap';

export const WhySell = () => {
  return (
    <>
      <div className="whysell">
        <div className="title">¿POR QUÉ VENDER EN PESCADISSIMO?</div>
        <Row>
          <Col sm="12" md="4">
            <div className="item">
              <img className="avatar" src="/become/whysell-1.png" />
              <p className="title">Tarifas Bajas</p>
              <p className="description">
                Publicar tus productos es totalmente gratuito, solo cobraremos un pequeño porcentaje por venta.
              </p>
            </div>
          </Col>
          <Col sm="12" md="4">
            <div className="item">
              <img className="avatar" src="/become/whysell-2.png" />
              <p className="title">Aseguramos el pago</p>
              <p className="description">
                Aseguramos todas las transacciones de tus ventas e inresaremos el dinero en tu cuenta en menos de 2 días.
              </p>
            </div>
          </Col>
          <Col sm="12" md="4">
            <div className="item">
              <img className="avatar" src="/become/whysell-3.png" />
              <p className="title">Herramientas Innovadoras</p>
              <p className="description">
                Disponemos de herramientas que facilitan la gestión y promoción de tus productos, con la finalidad de hacer crecer tu negocio.
              </p>
            </div>
          </Col>
        </Row>
      </div>

      <style jsx>
        {`
          .whysell {
            color: #FFF;
            border-bottom: 1px solid #FFF;
            margin-bottom: 42px;
            padding-bottom: 118px;
          }

          .whysell>.title {
            font-family: Montserrat;
            font-style: normal;
            font-weight: 600;
            font-size: 48px;
            line-height: 59px;
            text-align: center;
            color: #FFFFFF;
            padding-bottom: 44px;
            border-bottom: 1px solid #FFF;
            margin-bottom: 118px;
          }

          .whysell .item {
            display: flex;
            padding: 0 30px;
            align-items: center;
            flex-direction: column;
          }

          .whysell .item img {
            margin-bottom: 36px;
          }

          .whysell .item .title {
            font-family: Montserrat;
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 17px;
            text-align: center;
            color: #FFFFFF;
            margin-bottom: 21px;
          }

          .whysell .item .description {
            font-family: Montserrat;
            text-align: center;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 17px;
            color: #FFFFFF;
            margin-bottom: 0;
            text-overflow: clip;
          }

          @media(max-width: 1024px) {
            .whysell {
              margin-bottom: 64px;
              padding-bottom: 66px;
            }

            .whysell>.title {
              font-size: 36px;
              line-height: 44px;
              padding-bottom: 52px;
              margin-bottom: 47px;
            }

            .whysell .item {
              padding: 0 30px;
            }

            .whysell .item img {
              margin-bottom: 23px;
            }

            .whysell .item .title {
              font-size: 14px;
              line-height: 17px;
              margin-bottom: 16px;
            }

            .whysell .item .description {
              font-size: 12px;
              line-height: 15px;
              margin-bottom: 0;
            }
          }

          @media(max-width: 768px) {
            .whysell {
              margin-bottom: 45px;
              padding-bottom: 52px;
            }

            .whysell>.title {
              font-size: 24px;
              line-height: 29px;
              padding-bottom: 24px;
              margin-bottom: 44px;
            }

            .whysell .item {
              margin-bottom: 24px;
              padding: 0 30px;
            }

            .whysell .item img {
              margin-bottom: 17px;
              height: 36px;
            }
          }
        `}
      </style>
    </>
  );
};