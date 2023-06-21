import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

export const Help: React.FC = () => {

  const [helpJSON, setHelpJSON] = useState(
    [
      {
        id: 1,
        heading: 'Paso 1',
        title: 'Decide',
        description: 'Elige tu pescado y marisco favorito cómodamente, en cualquier momento y sin moverte de casa. ¡Nosotros nos encargamos de faenar!',
      },
      {
        id: 2,
        heading: 'Paso 2',
        title: 'Pescamos',
        description: 'Operamos bajo demanda para garantizar la mayor frescura y contrubuir a la pesca sostenible.',
      },
      {
        id: 3,
        heading: 'Paso 3',
        title: '¡Lo llevamos!',
        description: 'Comprar pescado y marisco nunca antes había sido tan fácil, en cualquier momento y sin moverte de casa. Ponte el sombrero y espera tus productos cómodamente, los recibirás embalados especialmente para su mantenimiento.',
      }
    ]
  );

  return (
    <>
      <div className="help">
        <p className="title">¿Cómo funciona Pescadissimo?</p>
        <div className="slick">
          <div className="statue">
            <ul className="dots">
              {
                helpJSON.map((help, index) => {
                  return <li key={help.id} className={`dot ${index == 0 ? `active` : ``}`}></li>;
                })
              }
            </ul>
            <span className="current-page">Paso 1</span>
          </div>
          <div className="slick-container">
            <div className="arrow-left">
              <img src="/icons/arrow-right-slick.svg" />
            </div>
            <div className="items">
              {
                helpJSON.map((item, index) => {
                  return (
                    <div className="item" key={item.id}
                      style={{ display: index != 0 ? 'none' : 'block' }}>
                      <Row>
                        <Col md="12" lg="6">
                          <p className="heading">{item.heading}</p>
                          <div className="underline"></div>
                          <p className="title">{item.title}</p>
                          <p className="description">{item.description}</p>
                        </Col>
                        <Col md="12" lg="6">
                          <div className="img-container">
                            <img src={`/home/help-${item.id}.png`} />
                          </div>
                        </Col>
                        <Col sm="12">
                          <button type="button">Comenzar</button>
                        </Col>
                      </Row>
                    </div>
                  )
                })
              }
            </div>
            <div className="arrow-right">
              <img src="/icons/arrow-right-slick.svg" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .help {
            padding: 45px 15px;
          }

          .help .title {
            font-family: Montserrat;
            padding-left: 100px;
            font-style: normal;
            font-weight: bold;
            font-size: 36px;
            line-height: 44px;
            color: #000000;
          }

          .arrow-left, .arrow-right {
            cursor: pointer;
          }

          .help .slick-container {
            padding: 0 50px;
            display: flex;
            align-items: center;
          }

          .help .slick-container .items {
            margin: 5px 50px;
          }

          .help .slick-container .item {
            max-width: 100%;
            position: relative;
            padding: 45px 75px;
            min-height: 392px;
            background: #FFFFFF;
            box-shadow: 1px 2px 8px rgba(122, 122, 122, 0.33);
            border-radius: 20px;
          }

          .help .slick-container .item .heading {
            font-family: Montserrat;
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            line-height: 29px;
            color: #7A7A7A;
            margin-bottom: 8px;
          }

          .help .slick-container .item .underline {
            width: 47.5px;
            height: 1px;
            background: #7A7A7A;
            margin-bottom: 24px;
          }

          .help .slick-container .item .title {
            font-family: Montserrat;
            font-style: normal;
            padding-left: 0;
            font-weight: 800;
            font-size: 24px;
            line-height: 29px;
            color: #D61016;
            margin-bottom: 16px;
          }

          .help .slick-container .item .description {
            font-family: Montserrat;
            font-style: normal;
            font-weight: 300;
            font-size: 20px;
            line-height: 24px;
            color: #000000;
            margin-bottom: 24px;
          }

          .help .slick-container .item .img-container {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .help .slick-container .item .img-container img {
            max-width: 450px;
            width: 100%;
          }

          .help .slick-container .item button {
            max-width: 288px;
            width: 100%;
            height: 44px;
            background: #D61016;
            border-radius: 13px;
            font-family: Montserrat;
            font-style: normal;
            font-weight: 500;
            font-size: 16px; 
            line-height: 20px;
            text-align: center;
            color: #FFFFFF;
            border: none;
          }

          .help .slick .statue {
            margin-top: 27px;
            margin-bottom: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .help .slick .statue .dots {
            display: flex;
            padding-left: 0;
            margin-bottom: 0;
          }

          .help .slick .statue .dots .dot {
            list-style-type: none;
            cursor: pointer;
            width: 24px;
            height: 24px;
            border: 2px solid #D61016;
            background: #FFF;
            box-sizing: border-box;
            border-radius: 12px;
            margin-right: 20px;
          }

          .help .slick .statue .dots .dot.active {
            background: #D61016;
          }

          .help .slick .statue .dots .dot:hover {
            background: #D61016;
          }

          .help .slick .statue .current-page {
            font-family: Montserrat;
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 22px;
            color: #D61016;
            margin-left: 20px;
          } 

          .arrow-left img {
            transform: rotate(180deg);
            display: none;
          }

          @media(max-width: 1024px) {
            .help .slick-container .item {
              padding: 18px 60px;
            } 
            .help .title {
              padding-left: 18px;
              font-size: 32px;
              line-height: 39px;
            }
          }

          @media(max-width: 992px) {
            .help .slick-container {
              padding: 0;
            }
            .help .slick-container .items {
              margin: 0 10px;
            }
            .help .slick-container .item {
              padding: 32px 12px 16px;
            }
            .help .slick-container .item button {
              max-width: 100%;
            }

            .help .slick-container .item .heading {
              font-size: 18px;     
              line-height: 22px;
            }
            .help .slick-container .item .underline {
              margin-bottom: 16px;
            }
            .help .slick-container .item .title {
              font-size: 18px;
              line-height: 22px;
              margin-bottom: 20px;
            }
            .help .slick-container .item .description {
              font-size: 13px;
              line-height: 16px;
            }

            .help .slick-container .item button {
              height: 44px;
              font-size: 16px;
              line-height: 20px;
            }
          }

          @media(max-width: 768px) {
            .help .title {
              padding-left: 10px;
              font-weight: 600;
              font-size: 20px;
              line-height: 24px;
            }
          }
        `}
      </style>
    </>
  )
}