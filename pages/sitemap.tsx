import React from 'react';
import Link from 'next/link';
import { Row, Col } from 'react-bootstrap';
import Header from 'layouts/Header';

const Sitemap: React.FC = () => {
  return (
    <>
      <Header />
      <div className="main">
        <div className="title">
          <span>MAPA DEL SITIO</span>
          <div className="underline"></div>
        </div>
        <div className="tip">Enlaces de nuestra web</div>
        <div className="links">
          <Row>
            <Col sm="12" md="6">
              <div className="item">
                <p className="title">ENLACES PRINCIPALES DE LA WEB</p>
                <div className="content">
                  <a><Link href="/">HOME</Link></a>
                  <a><Link href="/buy/fish">PESCADOS</Link></a>
                  <a><Link href="/buy/seafood">MARISCOS</Link></a>
                  <a><Link href="/sellers">NUESTROS VENDEDORES</Link></a>
                  <a><Link href="/become">CONVIÉRTETE EN VENDEDOR</Link></a>
                  <a><Link href="/about">QUIENES SOMOS</Link></a>
                </div>
              </div>
            </Col>
            <Col sm="12" md="6">
              <div className="item">
                <p className="title">ENLACES DE USUARIO</p>
                <div className="content">
                  <a><Link href="/auth">LOGIN</Link></a>
                  <a><Link href="/auth?type=register">REGISTRO</Link></a>
                  <a>PERFIL</a>
                </div>
              </div>
            </Col>
            <Col sm="12" md="6">
              <div className="item">
                <p className="title">ENLACES RÁPIDOS</p>
                <div className="content">
                  <a><Link href="/auth">LOGIN</Link></a>
                  <a><Link href="/auth?type=register">REGISTRO</Link></a>
                  <a>PERFIL</a>
                </div>
              </div>
            </Col>
            <Col sm="12" md="6">
              <div className="item">
                <p className="title">ENLACES A REDES SOCIALES</p>
                <div className="content">
                  <a>LINKEDIN</a>
                  <a>FACEBOOK</a>
                  <a>INSTAGRAM</a>
                  <a>TWITTER</a>
                  <a>YOUTUBE</a>
                  <a>MAIL</a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="map">
          <img src="/map1.png" />
          <p>
            ¡El arte de pescar tradicionalmente a través de una<br /> plataforma para todos!
          </p>
        </div>
      </div>

      <style jsx>
        {`
          .main {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 68px 164px;
          }

          .main .title {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .main .title span {
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 48px;
            line-height: 59px;
            text-align: center;
            color: #000000;
            margin-bottom: 32px;
          }

          .main .title .underline {
            width: 110px;
            height: 1px;
            background: #000;
            margin-bottom: 68px;
          }

          .main .tip {
            font-family: Montserrat;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 22px;
            text-align: center;
            color: #000000;
            margin-bottom: 80px;
          }

          .main .links {
            margin-bottom: 68px;
          }

          .main .links .item {
            margin-bottom: 50px;
          }

          .main .links .item .title {
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 24px;
            align-items: flex-start;
            line-height: 29px;
            margin-bottom: 36px;
            color: #000000;
          }

          .main .links .item .content {
            display: flex;
            flex-direction: column;
            font-family: Montserrat;
            font-style: normal;
            font-size: 16px;
            line-height: 18px;
            color: #000000;
          }

          .main .links .item .content a {
            margin-bottom: 12px;
          }

          .map {
            position: relative;
          }

          .map img {
            width: 795px;
          }

          .map p {
            font-family: Montserrat;
            font-style: italic;
            font-weight: 500;
            font-size: 18px;
            line-height: 22px;
            margin: 88px 0 0 110px;
            color: #000000;
          }

          @media(max-width: 1024px) {
            .main {
              padding: 68px 104px;
            }

            .main .title span {
              font-size: 36px;
              line-height: 44px;
              margin-bottom: 24px;
            }

            .main .title .underline {
              margin-bottom: 44px;
            }

            .main .tip {
              font-size: 14px;
              line-height: 17px;
              margin-bottom: 44px;
            }

            .main .links {
              margin-bottom: 0px;
            }

            .main .links .item {
              margin-bottom: 64px;
            }

            .main .links .item .title {
              font-size: 18px;
              line-height: 22px;
              margin-bottom: 16px;
            }

            .main .links .item .content {
              font-size: 14px;
              line-height: 17px;
            }

            .main .links .item .content a {
              margin-bottom: 12px;
            }

            .map {
              width: 100%;
              display: flex;
              justify-content: flex-start;
            }

            .map img {
              max-width: 561px;
              width: 100%;
            }

            .map p {
              position: absolute;
              font-size: 14px;
              line-height: 17px;
              right: 0;
              bottom: 50px;
            }
          }

          @media(max-width: 768px) {
            .main {
              padding: 16px;
            }

            .main .title span {
              font-size: 24px;
              line-height: 29px;
              margin-bottom: 14px;
            }

            .main .title .underline {
              margin-bottom: 24px;
            }

            .main .tip {
              margin-bottom: 32px;
            }

            .main .links .item {
              margin-bottom: 40px;
            }

            .main .links .item .title {
              font-size: 14px;
              line-height: 17px;
              margin-bottom: 16px;
            }

            .main .links .item .content {
              font-size: 12px;
              line-height: 14px;
            }

            .main .links .item .content a {
              margin-bottom: 10px;
            }

            .map {
              padding: 0 16px;
              display: flex;
              flex-direction: column;
            }

            .map p {
              position: relative;
              font-size: 12px;
              line-height: 15px;
              margin-left: 0;
              padding-bottom: 36px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Sitemap;