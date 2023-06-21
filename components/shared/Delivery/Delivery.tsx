import React, { useState } from 'react';
import Carousel, { consts } from 'react-elastic-carousel';

export const Delivery: React.FC = () => {
  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? 'left' : 'right'
    return (
      <img src={`/home/icons/arrow-${pointer}.svg`} onClick={onClick} />
    );
  };

  return (
    <>
      <div className="delivery-container">
        <Carousel renderArrow={myArrow}>
          <div className="item">
            <div>
              <p className="title">¿Cómo enviaremos pescado a tu destino preferido?</p>
              <p className="description">
                <span className="bold">Comprar pescado fresco online </span>es una novedad que muchos de nuestros
                usuarios están adoptando con gran satisfacción.

                Además de asegurarnos la procedencia y zona de captura sin intermediarios, la forma en que nuestros vendedores preparan el pedido para que ustedes lo recibáis en condiciones óptimas para su consumo nos hace superarnos día a día.

                Cada vendedor es un experto del sector y para ellos es un honor que podáis comprar pescado fresco.
              </p>
            </div>
            <img src="/shared/delivery/1.png" />
          </div>
          <div className="item">
            <div>
              <p className="title">Comprar pescado al gusto</p>
              <p className="description">
                También al comprar pescado online lo puede hacer al gusto: por piezas, raciones o peso. Solicita en tu proceso de compra de que manera deseas la presentación y limpieza del producto.

                Nosotros le enviaremos toda la información detallada y lista para que el vendedor seleccionado prepare tu pedido con mucho amor y profesionalidad.
            </p>
            </div>
            <img src="/shared/delivery/2.png" />
          </div>
          <div className="item">
            <div>
              <p className="title">
                Pescado Congelado
              </p>
              <p className="description">
                Si alguien se plantea no consumir directamente los productos o prefiere
                comprar pescado congelado, también tenemos la opción de comprarlo
                y recibirlo totalmente refrigerado a 20º.

                El pescado congelado también se consume bastante en los hogares y
                hostelería española, ya que la mayoría al ser capturados se congelan a
                bordo manteniendo las propiedades intactas y pudiendo conservarse
                por mucho tiempo.
                Además, suele ser más económico que el fresco y no existe problema de
                que pueda perecer.
            </p>
            </div>
            <img src="/shared/delivery/3.png" />
          </div>
          <div className="item">
            <div>
              <p className="title">
                Logística y envíos
              </p>
              <p className="description">
                Los envíos se preparan en cajas aislantes de la temperatura, hechas con material de poliespán que sirven de gran utilidad para esta necesidad. Por último, en el interio se le añade hielo seco  para que en el proceso de envío a domicilio sea posible manener el frío.
                Contamos con servicio de logística urgente y en menos de 24 horas tendrás los productos solicitados en tu domicilio.
              </p>
            </div>
            <img src="/shared/delivery/4.png" />
          </div>
        </Carousel>
      </div>

      <style jsx>
        {`
          .delivery-container {
            width: 100%;
            height: 704px;
            background: #FFF8F8; 
            padding: 62px 64px;
          }

          .delivery-container .item {
            position: relative;
            height: 580px;
          }

          .delivery-container .item>div {
            position: relative;
            z-index: 100;
          }

          .delivery-container .item .title {
            font-weight: bold;
            font-size: 36px;
            line-height: 44px;
            color: #D61016;
            margin-bottom: 80px;
          }

          .delivery-container .item .description {
            font-weight: 500;
            font-size: 20px;
            line-height: 24px;
            color: #000000;
          }

          .delivery-container .item .description .bold {
            font-weight: 800;
          }

          .delivery-container .item img {
            position: absolute;
            bottom: 0;
            z-inde: 10;
            right: 0;
            max-width: 100%;
          }

          @media(max-width: 1024px) {
            .delivery-container {
              height: 900px;
            }

            .delivery-container .item {
              padding: 50px;
              display: flex;
              flex-direction: column;
              position: relative;
              height: 700px;
            }

            .delivery-container .item .title {
              font-size: 32px;
              line-height: 39px;
              margin-bottom: 42px;
            }

            .delivery-container .item .description {
              font-size: 20px;
              line-height: 24px;
            }

            .delivery-container .item img {
              position: relative;
            }
          }

          @media(max-width: 768px) {
            .delivery-container {
              padding: 10px;
              height: 700px;
            }

            .delivery-container .item {
              padding: 10px;
              display: flex;
              flex-direction: column;
              position: relative;
              height: 550px;
            }

            .delivery-container .item .title {
              font-size: 18px;
              line-height: 22px;
              margin-bottom: 42px;
            }

            .delivery-container .item .description {
              font-size: 12px;
              line-height: 15px;
              margin-bottom: 48px;
            }

            .delivery-container .item img {
              position: relative;
            }
          }
        `}
      </style>
    </>
  );
};