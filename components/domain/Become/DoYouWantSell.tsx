import React from 'react';
import { Row, Col } from 'react-bootstrap';

export const DoYouWantSell = () => {
  return (
    <>
      <div className="doyouwantsell">
        <Row className="sellContainer">
          <Col xs="12">
            <div className="title">
              ¿Quieres vender en pescadissimo?
            </div>
          </Col>
          <Col xs="12" md="6">
            <div className="textBox">
              <input type="email" placeholder="Dirección de email" />
            </div>
          </Col>
          <Col xs="12" md="6">
            <div className="textBox">
              <input type="text" placeholder="Teléfono" />
            </div>
          </Col>
          <Col xs="12" md="6">
            <div className="textBox">
              <input type="text" placeholder="Nombre" />
            </div>
          </Col>
          <Col xs="12" md="6">
            <div className="textBox">
              <input type="text" placeholder="Apellidos" />
            </div>
          </Col>
          <Col xs="12">
            <div className="policy">
              <input type="checkbox" />
              <span>Acepto los Términos, <span className="red">Aviso Legal </span>y<span className="red"> Política de privacidad</span>.</span>
            </div>
          </Col>
          <Col>
            <button type="button" className="button">Añadir al carrito</button>
          </Col>
        </Row>
      </div>

      <style jsx>
        {`
          .doyouwantsell {
            padding: 84px 118px;
            background: #FFF5F5;
          }

          .doyouwantsell .sellContainer {
            margin: 0;
            background: #FFF5F5;
            border-top: 1px solid #d61016;
            border-bottom: 1px solid #d61016;
            padding: 117px 0 96px ;
          }

          .doyouwantsell .title {
            font-weight: bold;
            font-size: 48px;
            margin-bottom: 49px;
            line-height: 59px;
            text-align: center;
            color: #D61016;
          }

          .doyouwantsell .textBox {
            padding: 32px 15px;
          }

          .doyouwantsell .textBox input {
            background: #FFFFFF;
            border-radius: 4px;
            height: 48px;
            border: none;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            width: 100%;
            color: #CD8F8F;
            padding-left: 12px;
          }

          .doyouwantsell .policy {
            margin-bottom: 31px;
            display: flex;
            align-items: center;
          }

          .doyouwantsell .policy input {
            width: 20px;
            height: 20px;
          }

          .doyouwantsell .policy>span {
            margin-left: 8px;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            color: #000000;
          }

          .doyouwantsell .policy .red {
            color: #D61016;
          }

          .doyouwantsell .button {
            width: 100%;
            height: 48px;
            background: #D61016;
            border-radius: 4px;
            font-weight: 600;
            font-size: 16px;
            line-height: 20px;
            text-align: center;
            color: #FFFFFF;
            border: none;
          }

          @media(max-width: 1024px) {
            .doyouwantsell {
              padding: 34px 55px;
            }

            .doyouwantsell .sellContainer {
              margin: 0;
              padding: 47px 0 65px ;
            }

            .doyouwantsell .title {
              font-size: 36px;
              margin-bottom: 44px;
              line-height: 23px;
            }

            .doyouwantsell .textBox {
              padding: 38px 15px;
            }

            .doyouwantsell .textBox input {
              height: 47px;
              font-size: 14px;
              line-height: 17px;
              padding-left: 9px;
            }

            .doyouwantsell .policy {
              margin-bottom: 31px;
              display: flex;
              align-items: center;
            }

            .doyouwantsell .policy input {
              width: 20px;
              height: 20px;
            }

            .doyouwantsell .policy>span {
              font-size: 14px;
              line-height: 17px;
            }

            .doyouwantsell .button {
              height: 37px;
              border-radius: 4px;
              font-size: 16px;
              line-height: 20px;
            }
          }

          @media(max-width: 768px) {
            .doyouwantsell {
              padding: 31px 22px;
            }

            .doyouwantsell .sellContainer {
              margin: 0;
              padding: 33px 0 31px ;
            }

            .doyouwantsell .title {
              font-size: 18px;
              margin-bottom: 22px;
              line-height: 14px;
            }

            .doyouwantsell .textBox {
              padding: 10px 15px;
            }

            .doyouwantsell .textBox input {
              height: 32px;
              font-size: 10px;
              line-height: 12px;
            }

            .doyouwantsell .policy {
              margin-bottom: 20px;
            }

            .doyouwantsell .policy input {
              width: 20px;
              height: 20px;
            }

            .doyouwantsell .policy>span {
              font-size: 9px;
              line-height: 11px;
            }

            .doyouwantsell .button {
              font-size: 14px;
              line-height: 17px;
            }
          }
        `}
      </style>
    </>
  )
}