import React from 'react';
import { Row, Col } from 'react-bootstrap';

export const HowDoesWork: React.FC = () => {
  return (
    <>
      <div className="howdoeswork">
        <div className="title">
          ¿CÓMO FUNCIONA?
        </div>
        <div className="description">
          Es fácil empezar a vender online en Pescadissimo con solo 4 simples pasos
          </div>
        <Row>
          <Col xs="6">
            <div className="item">
              <img src="/become/howdoeswork-1.png" />
              <p className="title">
                1. Regístrate y crea tu propia tienda
              </p>
              <p className="description">
                Créate un perfil de forma fácil, rápida y gratuita. Nuestros asistentes validarán tu tienda y estarán encantados de ayudarte durante el proceso.
              </p>
            </div>
          </Col>
          <Col xs="6">
            <div className="item">
              <img src="/become/howdoeswork-2.png" />
              <p className="title">
                2. Añade productos a tu catálogo y recibe pedidos
              </p>
              <p className="description">
                Sube productos a tu propio catálogo.  Recibe pedidos y empieza a vender pescado y marisco.
              </p>
            </div>
          </Col>
          <Col xs="6">
            <div className="item">
              <img src="/become/howdoeswork-3.png" />
              <p className="title">
                3. Envío y empaquetado fácil
              </p>
              <p className="description">
                Preocúpate solo de preparar el pedido. Los pedidos serán recogidos y enviados por nuestra logística especial.
              </p>
            </div>
          </Col>
          <Col xs="6">
            <div className="item">
              <img src="/become/howdoeswork-4.png" />
              <p className="title">
                4. Recibe más ingresos y haz crecer tu negocio
              </p>
              <p className="description">
                Tus clientes tendrán a su disposición distintas formas de pago. Recibe pagos al instante y haz una contabilidad de tu negocio.
              </p>
            </div>
          </Col>
        </Row>
      </div>

      <style jsx>
        {`
          .howdoeswork {
            color: #FFF;
            border: 1px solid #FFF;
            padding: 44px 12px;
          }

          .howdoeswork>.title {
            font-weight: 600;
            font-size: 48px;
            line-height: 59px;
            text-align: center;
            color: #FFFFFF;
            margin-bottom: 32px;
          }

          .howdoeswork .description {
            font-weight: 500;
            font-size: 20px;
            line-height: 24px;
            text-align: center;
            color: #FFFFFF;
            margin-bottom: 48px;
          }

          .howdoeswork .item {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 36px;
          }

          .howdoeswork .item img {
            margin-bottom: 20px;
          }

          .howdoeswork .item .title {
            font-weight: 600;
            font-size: 14px;
            line-height: 17px;
            text-align: center;
            color: #FFFFFF;
            margin-bottom: 18px;
          }

          .howdoeswork .item .description {
            margin-bottom: 0;
            font-size: 14px;
            line-height: 17px;
            text-align: center;
            color: #FFFFFF;
          }

          @media(max-width: 1024px) {
            .howdoeswork {
              padding: 44px 12px;
            }

            .howdoeswork>.title {
              font-size: 36px;
              line-height: 44px;
              margin-bottom: 22px;
            }

            .howdoeswork .description {
              font-size: 20px;
              line-height: 24px;
              margin-bottom: 69px;
            }

            .howdoeswork .item img {
              height: 100px;
              margin-bottom: 10px;
            }

            .howdoeswork .item .title {
              font-size: 14px;
              line-height: 17px;
              margin-bottom: 23px;
            }

            .howdoeswork .item .description {
              font-size: 12px;
              line-height: 15px;
            }
          }

          @media(max-width: 768px) {
            .howdoeswork {
              padding: 37px 12px;
            }

            .howdoeswork>.title {
              font-size: 24px;
              line-height: 29px;
              margin-bottom: 18px;
            }

            .howdoeswork .description {
              font-size: 14px;
              line-height: 17px;
              margin-bottom: 52px;
            }

            .howdoeswork .item img {
              height: 36px;
              margin-bottom: 40px;
            }

            .howdoeswork .item .title {
              font-size: 12px;
              line-height: 15px;
              margin-bottom: 24px;
            }

            .howdoeswork .item .description {
              font-size: 12px;
              line-height: 15px;
            } 
          }
        `}
      </style>
    </>
  )
}