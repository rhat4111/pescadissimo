import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200
  res.json(
    [
      {
        _id: 1,
        title: '¿Qué es Pescadissimo?',
        content: `Pescadissimo es una plataforma fundada con el propósito de brindar el acceso virtual al mercado tradicional de productos del mar, para desee obtener calidad de producto y comodidad en su compra de pescado y marisco online.`
      },
      {
        _id: 2,
        title: '¿Cómo funciona Pescadissimo?',
        content: `Decide: Compara miles de productos procedentes de diferentes regiones de España, capturados y distribuidos por diversos profesionales del sector del pescado y marisco online. 
                  Pescamos: Para garantizar la máxima frescura trabajamos un modelo bajo demanda, es decir, una vez has decidido lo que deseas le mandamos el pedido al vendedor seleccionado y te lo prepara con los productos del día. 
                  Te lo llevamos: Operamos con una logística a la altura de nuestros clientes. Envíos en menos de 24 horas (desde que se ha capturado la especie hasta que lo recibes). Los pedidos son preparados especialmente para aislar la temperatura y siempre asegurando la cadena de frío en el proceso de reparto desde la lonja hasta tú domicilio.`
      },
      {
        _id: 3,
        title: 'Misión',
        content: `Nuestra misión se basa en conectar el mejor pescado y marisco fresco desde la lonja con tu domicilio. Contamos con grandes compañías de venta de pescado y marisco referentes en varias regiones de España, que se encargan de preparar tu pedido, asegurando el origen de los productos y a su gusto: vivo, cocido, eviscerado, fileteado o congelado. Todo ello para que obtengas una experiencia única y puedas decidir entre una amplia variedad en tu compra de pescado y marisco online.`
      },
      {
        _id: 4,
        title: 'Responsabilidad social corporativa',
        content: `Nuestra responsabilidad se basa principalmente en apoyar al sector tradicional de pescado y marisco, incentivando la compra y venta de pescado y marisco online, adaptándose a las nuevas necesidades. `
      },
      {
        _id: 5,
        title: 'Apoyo a profesionales',
        content: `Los productores pesqueros desempeñan su labor día a día en alta mar y para capturar los mejores productos con mucho esfuerzo, disciplina y dedicación. Además, el proceso de compra y distribución de pescado y marisco es muy complejo y requiere una gran dedicación. 
                    
                  Por ello, volcamos todo nuestro enfoque en los más expertos y profesionales. `
      },
      {
        _id: 6,
        title: '¿Cuál es nuestro objetivo?',
        content: `Conectar el sector unido a la práctica de pesca sostenible, ayudando a contribuir por la moderación de las especies marinas, es lo que nos mueve y apasiona. Creemos en la idea “bajo demanda” y rechazamos totalmente la producción masiva, por eso hemos diseñado este modelo de compra.  `
      },
      {
        _id: 7,
        title: 'Valores',
        content: `Siempre apoyando la pesca sostenible y la tradición, el arte de pescar tradicionalmente mediante tu dispositivo.  `
      },
      {
        _id: 8,
        title: `Decide, pescamos y te lo llevamos.
                Nuestra historia`,
        content: `Siendo una empresa de caracter digital, tenemos nuestra historia marcada por la tradición. Nuestro equipo desciende de pescaderos, de raíces curtidas por sacrificio y la incertidumbre del día a día. Como sabemos que la mayoría de consumidores prefieren comprar en lonjas tradicionales y que existen nuevos estilos de vida, nos adaptamos e ideamos Pescadissimo para ser vuestro mejor aliado.`
      }
    ]
  )
}
