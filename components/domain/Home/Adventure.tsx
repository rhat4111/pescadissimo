import React from 'react';
import { Row, Col } from 'react-bootstrap';

export const Adventure: React.FC = () => {
  return (
    <>
      <div className="adventure">
        <Row style={{ margin: 0 }}>
          <Col xl="4" lg="12" style={{ padding: '0' }}>
            <div className="div1">
              <Row style={{ margin: 0 }}>
                <Col xs="6" style={{ padding: 0 }}>
                  <div className="image">
                    <img src="/home/adv-8.png" />
                  </div>
                </Col>
                <Col xs="6" style={{ padding: 0 }}>
                  <div className="image">
                    <img src="/home/adv-5.png" />
                  </div>
                </Col>
                <Col xs="6" style={{ padding: 0 }}>
                  <div className="image hidden">
                    <img src="/home/adv-3.png" />
                  </div>
                </Col>
                <Col xs="6" style={{ padding: 0 }}>
                  <div className="image hidden">
                    <img src="/home/adv-4.png" />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xl="4" lg="12" style={{ padding: '0' }}>
            <div className="div2">
              <div>
                <p className="title">#Pescadissimocommunity</p>
                <p className="description">Únete a nuestra aventura</p>
                <button type="button">SÍGUENOS EN REDES SOCIALES</button>
              </div>
            </div>
          </Col>
          <Col xl="4" lg="12" style={{ padding: '0' }}>
            <div className="div3">
              <Row style={{ margin: 0 }}>
                <Col xs="6" style={{ padding: 0 }}>
                  <div className="image">
                    <img src="/home/adv-5.png" />
                  </div>
                </Col>
                <Col xs="6" style={{ padding: 0 }}>
                  <div className="image">
                    <img src="/home/adv-6.png" />
                  </div>
                </Col>
                <Col xs="6" style={{ padding: 0 }}>
                  <div className="image hidden">
                    <img src="/home/adv-6.png" />
                  </div>
                </Col>
                <Col xs="6" style={{ padding: 0 }}>
                  <div className="image hidden">
                    <img src="/home/adv-8.png" />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>

      <style jsx>
        {`
          .adventure .div1, .adventure .div3 {
            padding: 0!important;
          }

          .adventure .image {
            padding: 0;
          }

          .adventure .image img {
            width: 100%;
          }

          .adventure .div2 {
            padding: 84px 70px 88px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .adventure .div2 .title {
            font-family: Montserrat;
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 17px;
            text-align: center;
            color: #D61016;
            margin-bottom: 64px;
          }

          .adventure .div2 .description {
            font-family: Montserrat;
            font-style: normal;
            font-weight: 600;
            font-size: 22px;
            line-height: 27px;
            text-align: center;
            color: #000000;
            margin-bottom: 64px;
          }

          .adventure .div2 button {
            width: 100%;
            height: 44px;
            background: #D61016;
            border-radius: 13px;
            font-family: Montserrat;
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 20px;
            text-align: center;
            border: none;
            color: #FFFFFF;
          }

          .adventure .div2>div {
            display: flex;
            align-items: center;
            flex-direction: column;
          }

          @media(max-width: 1200px) {
            .hidden {
              display: none;
            }
          }

          @media(max-width: 1024px) {
            .adventure .div2 button {
              font-size: 14px;
              line-height: 17px;
            }
          }

          @media(max-width: 768px) {
            .adventure .div2 {
              padding: 36px 62px;
            }

            .adventure .div2 .title {
              font-size: 12px;
              line-height: 15px;
              margin-bottom: 35px;
            }

            .adventure .div2 .description {
              font-size: 18px;
              line-height: 22px;
              margin-bottom: 35px;
            }

            .adventure .div2 button {
              height: 36px;
              border-radius: 10px;
              font-size: 12px;
              line-height: 15px;
            }
          }
        `}
      </style>
    </>
  );
};