import React from 'react';
import { Row, Col } from 'react-bootstrap';

export const WhyChooseUs: React.FC = () => {
  return (
    <>
      <div className="whyChooseUS">
        <div className="title">¿POR QUÉ ELEGIR PESCADISSIMO?</div>
        <Row style={{ margin: 0 }}>
          <Col sm="12" md="6" style={{ padding: '0' }}>
            <div className="div1">
              <div>
                <p className="text1">
                  Estamos unidos a través de la pasión con todo profesional experto en vender marisco y pescado, contamos con un elevado grado de experiencia y tradición pesquera.
                </p>
                <p className="text2">
                  Somos especialistas en un sector aún con procesos obsoletos, nos reinventamos debido a la necesidad de innovación latente tanto para profesionales como para usuarios como tú.
                </p>
                <div className="underline">
                  Quienes somos
                   <img src="/icons/long-arrow-dark.png" />
                </div>
              </div>
            </div>
          </Col>
          <Col sm="12" md="6" style={{ padding: '0' }}>
            <div className="div2">
              <img src="/map.png" />
              <span>¡El arte de pescar tradicionalmente a través de una plataforma para todos!</span>
            </div>
          </Col>
          <Col sm="12" md="6" style={{ padding: '0' }}>
            <div className="div3">
              <div>
                <p className="title">
                  Descubre oportunidades increíbles para comprar y vender pescado y marisco online desde cualquier lugar.
                </p>
                <p className="description">
                  ¡Nuevas ofertas cada día!
                </p>
                <div className="underline"></div>
                <button type="button" className="sell">Quiero vender</button>
                <button type="button" className="buy">Quiero comprar</button>
              </div>
            </div>
          </Col>
          <Col sm="12" md="6" style={{ padding: '0' }}>
            <div className="div4"></div>
          </Col>
          <Col xs="12" style={{ padding: '0' }}>
            <div className="div5">
              <div>
                <p className="text1">
                  Siendo una empresa de carácter digital, tenemos nuestra historia marcada por la tradición.
                  <br /><br />
                  Nuestro equipo desciende de pescaderos, de raíces curtidas por el sacrificio y la incertidumbre del día a día.
                </p>
                <p className="text2">
                  Por lo tanto, somos y seremos el mejor aliado para crecer.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <style jsx>
        {`
          .whyChooseUS {
            background: #FFF ;
          }

          .whyChooseUS .title {
            padding: 68px 0 50px 68px;
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 36px;
            line-height: 44px;
            color: #D61016;
          }

          .whyChooseUS .div1 {
            display: flex;
            justify-content: center;
            align-items: center;
            padding-left: 68px;
            padding-bottom: 16px;
          }

          .whyChooseUS .div1>div {
            width: 457px;
          }

          .whyChooseUS .div1 .text1 {
            font-family: Montserrat;
            font-style: normal;
            font-weight: 500;
            font-size: 22px;
            line-height: 27px;
            color: #000000;
            margin-bottom: 50px;
          }

          .whyChooseUS .div1 .text2 {
            font-family: Montserrat;
            font-style: italic;
            font-weight: 400;
            font-size: 22px;
            margin-bottom: 0;
            line-height: 27px;
            color: #000000;
          }

          .whyChooseUS .div1 .underline {
            width: 234px;
            border-top: 1px solid #000;
            margin-top: 85px;
            padding-top: 12px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 18px;
            line-height: 22px;
            text-align: right;
            color: #000000;
          }

          .whyChooseUS .div1 .underline img {
            margin-left: 8px;
          }

          .whyChooseUS .div2 {
            padding-right: 37px;
            margin-bottom: 90px;
            position: relative;
          }

          .whyChooseUS .div2 img {
            width: 100%;
          }

          .whyChooseUS .div2 span {
            max-width: 473px;
            width: calc(100% - 71px);
            position: absolute;
            bottom: 0;
            right: 71px;
            font-family: Montserrat;
            font-style: italic;
            font-weight: 500;
            font-size: 18px;
            line-height: 22px;
            color: #000000;
          }

          .whyChooseUS .div3 {
            padding: 160px 0;
            background: #F5F5F5;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .whyChooseUS .div3>div {
            width: 328px;
          }

          .whyChooseUS .div3 .title {
            margin: 0;
            margin-bottom: 32px;
            padding: 0;
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 22px;
            line-height: 27px;
            color: #494949;
          }

          .whyChooseUS .div3 .description {
            font-family: Montserrat;
            font-style: italic;
            font-weight: 500;
            font-size: 22px;
            line-height: 27px;
            color: #494949;
            margin-bottom: 16px;
          }

          .whyChooseUS .div3 .underline {
            width: 122px;
            height: 1px;
            background: #FFFF;
            margin-bottom: 68px;
          }

          .whyChooseUS .div3 button {
            width: 100%;
            height: 44px;
            border-radius: 13px;
            border: 1px solid #D61016;
            font-family: Montserrat;
            font-size: 16px;
            font-weight: 500;
            line-height: 20px;
            text-align: center;
            color: #D61016;
            margin-bottom: 20px;
            background: none;
          }

          .whyChooseUS .div3 .buy {
            background: #D61016;
            color: #FFF;
          }

          .whyChooseUS .div4 {
            padding: 0;
            background: url("/home/why1.png");
            height: 100%;
            background-size: cover;
          }

          .whyChooseUS .div5 {
            padding: 0 118px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            width: 100%;
            height: 720px;
            background-size: cover;
            background: url("/home/why2.png");
          }

          .whyChooseUS .div5>div {
            background: #FFF;
            border-radius: 24px;
            width: 488px;
            height: 488px;
            padding: 94px 80px;
          }

          .whyChooseUS .div5 .text1 {
            font-family: Montserrat;
            font-style: italic;
            font-weight: 500;
            font-size: 18px;
            line-height: 22px;
            color: #000000;
            margin-bottom: 50px;
          }

          .whyChooseUS .div5 .text2 {
            font-family: Montserrat;
            font-weight: 700;
            font-size: 20px;
            line-height: 24px;
            color: #D61016;
            margin-bottom: 0px;
          }

          @media(max-width: 1024px) {
            .whyChooseUS .title {
              padding: 58px 0 68px 68px;
              font-size: 32px;
              line-height: 39px;
            }

            .whyChooseUS .div1 {
              display: block;
              padding-bottom: 30px;
            }

            .whyChooseUS .div1>div {
              max-width: 357px;
              width: 100%;
            }

            .whyChooseUS .div1 .text1 {
              font-size: 18px;
              line-height: 22px;
              margin-bottom: 40px;
            }

            .whyChooseUS .div1 .underline {
              margin-top: 32px;
            }

            .whyChooseUS .div2 {
              padding-right: 68px;
              margin-bottom: 82px;
            }

            .whyChooseUS .div2 span {
              max-width: 335px;
              width: calc(100% - 81px);
              right: 81px;
              font-size: 14px;
              line-height: 17px;
            }

            .whyChooseUS .div3 {
              padding: 90px 0;
            }

            .whyChooseUS .div3>div {
              width: 233px;
            }

            .whyChooseUS .div3 .title {
              margin-bottom: 12px;
              font-size: 16px;
              line-height: 20px;
            }

            .whyChooseUS .div3 .description {
              font-size: 14px;
              line-height: 17px;
              margin-bottom: 32px;
            }

            .whyChooseUS .div3 .underline {
              width: 87px;
              margin-bottom: 64px;
            }

            .whyChooseUS .div3 button {
              height: 35px;
              border-radius: 6px;
              margin-bottom: 16px;
            }

            .whyChooseUS .div4 {
              height: 515px;
              padding: 0;
            }

            .whyChooseUS .div5 {
              padding: 0 84px;
              height: 545px;
            }

            .whyChooseUS .div5>div {
              width: 348px;
              height: 348px;
              padding: 52px 58px;
            }

            .whyChooseUS .div5 .text1 {
              font-size: 14px;
              line-height: 17px;
              margin-bottom: 30px;
            }

            .whyChooseUS .div5 .text2 {
              font-size: 14px;
              line-height: 17px;
              margin-bottom: 0px;
            }
          }

          @media(max-width: 768px) {
            .whyChooseUS .title {
              padding: 64px 16px 32px 14px;
              font-size: 20px;
              line-height: 24px;
            }

            .whyChooseUS .div1 {
              display: block;
              padding: 16px;
            }

            .whyChooseUS .div1>div {
              max-width: 288px;
              width: 100%;
            }

            .whyChooseUS .div1 .text1 {
              font-size: 14px;
              line-height: 17px;
              margin-bottom: 20px;
            }

            .whyChooseUS .div1 .underline {
              margin-top: 38px;
            }

            .whyChooseUS .div1 .underline span {
              width: 14px;
              line-height: 17px;
            }

            .whyChooseUS .div2 {
              padding: 50px 53px 0;
              margin-bottom: 64px;
            }

            .whyChooseUS .div2 span {
              max-width: 282px;
              width: 100%;
              left: 18px;
              font-size: 12px;
              line-height: 15px;
            }
            .whyChooseUS .div3 {
              background: #FDF3F3;
              padding: 72px 62px;
            }

            .whyChooseUS .div3>div {
              width: 100%;
            }

            .whyChooseUS .div3 .title {
              margin-bottom: 36px;
              font-size: 14px;
              line-height: 17px;
            }

            .whyChooseUS .div3 .description {
              font-size: 12px;
              line-height: 15px;
              margin-bottom: 20px;
            }

            .whyChooseUS .div3 .underline {
              width: 87px;
              margin-bottom: 68px;
            }

            .whyChooseUS .div3 button {
              height: 36px;
              border-radius: 10px; 
              margin-bottom: 14px;
              font-size: 14px;
              line-height: 17px;
            }

            .whyChooseUS .div4 {
              display: none;
            }

            .whyChooseUS .div5 {
              padding: 0 40px;
              height: 441px;
            }

            .whyChooseUS .div5>div {
              width: 100%;
              padding: 46px 26px;
            }

            .whyChooseUS .div5 .text1 {
              font-size: 12px;
              line-height: 15px;
              margin-bottom: 30px;
            }
          }
        `}
      </style>
    </>
  )
}