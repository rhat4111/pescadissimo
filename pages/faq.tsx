import React from 'react';
import { useFAQ } from 'store';
import { Accordion } from 'components/shared/Accordion';
import Header from 'layouts/Header';

const FAQ: React.FC = () => {
  const faqClients = [
    {
      title: "¿Cómo es el proceso de compra?",
      content:
        "Decide entre los productos que más te gusten de nuestros vendedores ubicados en diferentes puntos de España. Te aconsejamos comprar por cercanía para reducir tiempos, coste e impacto ambiental. Una vez tengas tu cesta lista, elige fecha y tipo de envío (a domicilio o recogida). El vendedor se encargará de seleccionar los mejores productos de la lonja, prepararlos, empaquetarlos y enviarlos. No te preocupes por nada, lo recibirás ¡listo para degustar!.",
    },
    {
      title: "¿Cuánto tiempo dura el proceso?",
      content:
        "Decide, pescamos y !lo llevamos!. Una vez has confirmado tu pedido, nuestros vendedores seleccionan los mejores productos al siguiente día hábil y te lo preparan. Recién pescado y una vez preparado la compañía logística se encargará de que en menos de 24 horas te llegue. Si eliges compra local, ¡te llegará el mismo día!. ",
    },
    {
      title:
        "¿Puedo encargar pescado y marisco para cualquier fecha?",
      content:
        "Sí, puedes encargar el pescado y marisco que necesites en un plazo de 7 días. Somos transparentes, el precio del pescado del día que encargues, dependerá del precio de las subastas de lonjas de ese día. No obstante, podrás establecer el precio máximo que estarías dispuesto a pagar para no llevarte sorpresas y que los vendedores compren solo si está dentro de lo indicado.",
    },

    {
      title: "¿Cuánto cuesta los gastos de envío?",
      content:
        "Actualmente, los gastos de envío son gratis para pedidos superiores a 49 €. Los costes de envío son de 4,99€ para pedidos en la misma ciudad y el mismo día. Y de 9,99€ para el resto de España (entrega urgente en 24h, preferentemente en horario de mañana). Si pide a más de un vendedor, los gastos de envío serán por separado. Ya que la logística opera por entrega y recogida.",
    },

    {
      title: "¿Puedo recibir mi pedido limpio?",
      content:
        "Nuestros vendedores pueden preparar tus productos vivos, cocidos, eviscerados, cortados o sin manipular listos para su envío. Cada vendedor ofrece sus propias formas de preparación. *Nota: Ten en cuenta que al cocerlo y/o limpiarlo se pierde peso debido a la cocción y/o vísceras.",
    },
    {
      title: "¿Cuáles son las formas de pago disponibles?",
      content:
        "Somos transparentes: Al hacer su pedido, en base al precio estimado, lo tratamos como una reserva y preautorizamos el 115% en su cuenta de crédito, pero no cobramos nada. Es justo al pesar su pedido, cuando le informamos del peso y precio exacto con el ticket del vendedor y procederemos a cobrar el importe final exacto. En el caso de hacer un pedido a más de un vendedor, retenemos en su tarjeta el importe calculado por cada uno de ellos.",
    },
    {
      title: "¿Cómo es el embalaje de mi pedido?",
      content:
        "Enviamos manteniendo la cadena de frío. En cajas isotérmicas de poliespan especiales para aislar la temperatura y acumuladores de frío, garantizando que los productos lleguen en plenas condiciones para disfrutar de una experiencia única.",
    },
    {
      title: "¿Cómo es el transporte del producto?",
      content:
        "Siempre enviamos con servicio urgente. Para largas distancias, el pedido perfectamente embalado y preparado, tarda menos de 24 horas en llegar desde que sale del destino. ",
    },
    {
      title:
        "¿Es seguro comprar productos perecederos por internet?",
      content:
        "Trabajamos día a día para que todo el proceso sea perfecto, cuidando hasta el mínimo detalle. Seleccionamos los mejores vendedores, los concienciamos para gestionar, preparar y  empaquetar eficientemente los pedidos, para que los productos lleguen tan frescos como lo han pescado. Además, disponemos de los mejores servicios de logística para mantener la temperatura y que el envío sea ultrarrápido. No se preocupe: En caso de que el producto o embalaje lleguen en mal estado y no estés conforme, procederemos a la devolución de tu dinero.",
    },
    {
      title:
        "¿En qué se basa la garantía y política de devoluciones al ser productos perecederos?",
      content:
        "Una vez entregado el pedido, tienes dos horas para realizarnos una reclamación respecto a un producto en mal estado. Para ello, será necesario adjuntar foto y vídeo al correo pedidos@pescadissimo.com. Analizaremos el caso y si realmente no ha llegado en buen estado, le devolveremos su dinero.",
    },

    {
      title: "¿Cómo sé que es un producto fresco o congelado?",
      content:
        "En la web se dividen y diferencian perfectamente los productos frescos y congelados. Además recibirá su pedido el estado deseado y con la temperatura adecuada: fresco o congelado.",
    },
    {
      title:
        "Falsas creencias sobre comprar y vender marisco online",
      content:
        "Al ser un producto perecedero muchos usuarios tienen dudas sobre cómo les llegarán sus pedidos. Nosotros nos encargamos de cuidar cada detalle asegurando la trazabilidad,  mantenimiento de la cadena de frío y embalados en cajas especiales para estos productos. Además, los envíos son urgentes. Es el mismo proceso que el habitual pero teniendo la opción de comprar a cualquier hora los mejores productos de cualquier punto de España, sin moverte de casa. No obstante, si tiene alguna duda o problema, contacte con Pescadissimo directamente, estamos encantados de atenderle y ayudarle.",
    },
  ];
  const { faq } = useFAQ();
  console.log(faq);

  return (
    <>
      <Header />
      <div className="main">
        <div className="title">¿Tienes dudas?</div>
        <div className="description">
          Consulta nuestras preguntas frecuentes. Si aún tienes dudas, puedes <span className="red">consultarnos</span>.
        </div>
        <div className="item">
          <div className="title">FAQS Vendedores</div>
          {
            faq &&
            faq.map((item, index) => {
              return (
                <Accordion
                  key={index}
                  color="black"
                  opened={false}
                  title={item.title.es}
                  content={item.description.es}
                />
              )
            })
          }
        </div>
        <div className="item">
          <div className="title">FAQS Clientes</div>
          {
            faqClients.map((item, index) => {
              return (
                <Accordion
                  key={index}
                  color="black"
                  opened={false}
                  {...item} />
              )
            })
          }
        </div>
      </div>

      <style jsx>
        {`
          .main {
            padding: 25px 118px;
          }

          .main .title {
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 48px;
            line-height: 59px;
            text-align: center;
            color: #000000;
            margin-bottom: 25px;
          }

          .main .description {
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 24px;
            line-height: 29px;
            text-align: center;
            color: #000000;
            margin-bottom: 80px;
          }

          .main .description .red {
            color: #D61016;
          }

          .main .item {
            margin-bottom: 100px;
          }

          .main .item .title {
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 36px;
            line-height: 44px;
            text-align: center;
            color: #000000;
            margin-bottom: 80px;
          }

          @media(max-width: 1024px) {
            .main {
              padding: 17px 55px;
            }

            .main .title {
              font-size: 36px;
              line-height: 44px;
              margin-bottom: 17px;
            }

            .main .description {
              font-size: 18px;
              line-height: 22px;
              margin-bottom: 73px;
            }

            .main .item {
              margin-bottom: 27px;
            }

            .main .item .title {
              font-size: 36px;
              line-height: 44px;
              margin-bottom: 22px;
            }
          }

          @media(max-width: 768px) {
            .main {
              padding: 40px 16px;
            }

            .main .title {
              font-size: 24px;
              line-height: 29px;
              margin-bottom: 20px;
            }

            .main .description {
              font-size: 14px;
              line-height: 17px;
              margin-bottom: 40px;
            }

            .main .item {
              margin-bottom: 32px;
            }

            .main .item .title {
              font-size: 18px;
              line-height: 22px;
              margin-bottom: 40px;
            }
          }
        `}
      </style>
    </>
  );
};

export default FAQ;