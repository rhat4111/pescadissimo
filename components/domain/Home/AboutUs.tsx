import React from 'react';
import { Row, Col } from 'react-bootstrap';

export const AboutUs: React.FC = () => {
  return (
    <>
      <div className="aboutUs">
        <Row style={{ margin: '0' }}>
          <Col md="3" xs="6">
            <div className="item">
              <img src="/home/about-1.svg" />
              <span className="title">Envío urgente</span>
              <span className="description">
                Gratis en pedidos<br /> superiores a 49€
                </span>
            </div>
          </Col>
          <Col md="3" xs="6">
            <div className="item">
              <img src="/home/about-2.svg" />
              <span className="title">Pago seguro</span>
              <span className="description">
                Gestión con tecnología<br /> avanzada
                </span>
            </div>
          </Col>
          <Col md="3" xs="6">
            <div className="item">
              <img src="/home/about-3.svg" />
              <span className="title">Garantía</span>
              <span className="description">
                Política de devoluciones
                </span>
            </div>
          </Col>
          <Col md="3" xs="6">
            <div className="item">
              <img src="/home/about-4.svg" />
              <span className="title">Certificado de<br /> origen</span>
              <span className="description">
                Trazabilidad y<br /> temperatura controlada
              </span>
            </div>
          </Col>
        </Row>
      </div>

      <style jsx>
        {`
          .aboutUs {
            padding: 28px 200px;
            border: 1px solid #E5E5E5;
            border-radius: 4px;
          }

          .aboutUs .item {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .aboutUs .item .title {
            margin-top: 13px;
            font-family: Montserrat;
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 17px;
            text-align: center;
            color: #000000;
          }

          .aboutUs .item .description {
            margin-top: 20px;
            font-family: Montserrat;
            font-style: normal;
            font-weight: normal;
            font-size: 10px;
            line-height: 12px;
            text-align: center;
            color: #7A7A7A;
          }

          @media(max-width: 1024px) {
            .aboutUs {
              padding: 28px 100px;
            }
          }

          @media(max-width: 768px) {
            .aboutUs {
              padding: 28px 0;
            }

            .aboutUs>div {
              padding: 0 16px;
            }
            .aboutUs>div>div {
              margin-bottom: 12px;
              padding: 16px;
            } 
            .aboutUs .item {
              min-height: 170px;
              padding: 36px 0px 20px;
              box-shadow: 1px 2px 4px rgba(122, 122, 122, 0.23);
              border-radius: 12px;
            }

            .aboutUs .item img {
              width: 30px;
              height: 30px;
            }

            .aboutUs .item .title {
              margin-top: 15px;
              font-size: 12px;
              line-height: 15px;
            }

            .aboutUs .item .description {
              margin-top: 8px;
              font-size: 10px;
              line-height: 12px;
            }
          }
        `}
      </style>
    </>
  );
}