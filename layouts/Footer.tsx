import React from 'react';
import Link from 'next/link';
import { Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
  const links = ['facebook', 'instagram', 'linkedin',]
  return (
    <>
      <div className="footer">
        <div className="toolbar">
          <ul>
            <li>
              <img src="/layouts/footer/icons/facebook-sm.svg" />
            </li>
            <li>
              <img src="/layouts/footer/icons/instagram-sm.svg" />
            </li>
            <li>
              <img src="/layouts/footer/icons/linkedin-sm.svg" />
            </li>
            <li>
              <img src="/layouts/footer/icons/twitter-sm.svg" />
            </li>
            <li>
              <img src="/layouts/footer/icons/youtube-sm.svg" />
            </li>
            <li>
              <img src="/layouts/footer/icons/gmail-sm.svg" />
            </li>
          </ul>
        </div>
        <div className="title">Acceso vendedores</div>
        <Row style={{ margin: '0' }}>
          <Col lg="4" md="6">
            <div className="footer-link">
              <Link href="./cookie">
                Política de cookies
              </Link>
            </div>
          </Col>
          <Col lg="4" md="6">
            <div className="footer-link">Política de privacidad</div>
          </Col>
          <Col lg="4" md="6">
            <div className="footer-link">
              <Link href="/faq">Faqs</Link>
            </div>
          </Col>
          <Col lg="4" md="6">
            <div className="footer-link">Política de redes</div>
          </Col>
          <Col lg="4" md="6">
            <div className="footer-link">
              <Link href="/sitemap">
                Mapa del sitio
              </Link>
            </div>
          </Col>
        </Row>
        <div className="copyright">
          <Link href="./">
            <img src="/layouts/footer/copyright.png" />
          </Link>
        </div>
      </div>

      <style jsx>
        {`
          .footer {
            padding: 42px 117px 59px 67px;
            background: #FDF3F3;
          }

          .footer .toolbar {
            display: flex;
            justify-content: flex-end;
          }

          .footer .toolbar ul {
            margin-bottom: 0;
            display: flex;
            align-items: center;
          }

          .footer .toolbar ul li {
            margin-left: 16px;
            list-style-type: none;
          }

          .footer .title {
            font-weight: bold;
            font-size: 36px;
            line-height: 44px;
            color: #D61016;
            margin-bottom: 64px;
          }

          .footer .footer-link {
            font-weight: bold;
            font-size: 22px;
            line-height: 27px;
            color: #000000;
            margin-bottom: 54px;
          }

          .footer .copyright {
            margin-top: 231px;
            display: flex;
            justify-content: center;
          }

          .footer .copyright img {
            cursor: pointer;
          }

          @media(max-width: 1024px) {
            .footer {
              padding: 88px 117px 216px 67px;
            }
            .footer .toolbar {
              display: none;
            }
            .footer .copyright {
              margin-top: 58px;
            }
          }

          @media(max-width: 500px) {
            .footer {
              padding: 54px 36px 116px 16px;
            }
            .footer .toolbar {
              display: none;
            }
            .footer .copyright {
              margin-top: -7 px;
            }
            .footer .title {
              font-size: 20px;
              line-height: 24px;
              margin-bottom: 36px;
            }
            .footer .footer-link {
              font-size: 14px;
              line-height: 17px;
              margin-bottom: 44px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Footer;