import { NextApiRequest, NextApiResponse } from 'next';
export default (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.json(
    {
      sellers: [
        {
          _id: 1,
          title: '¿Qué necesito para crear una tienda en Pescadissimo?',
          content: 'Solo necesitas acreditar que eres un profesional del sector (personalidad física o jurídica), así sabemos que puedes vender pescado y marisco online. Una vez validados tus datos, podrás crear tu tienda y vender pescado online.'
        },
        {
          _id: 2,
          title: '¿Cómo puedo vender online en Pescadissimo?',
          content: 'Solo necesitas acreditar que eres un profesional del sector (personalidad física o jurídica), así sabemos que puedes vender pescado y marisco online. Una vez validados tus datos, podrás crear tu tienda y vender pescado online.'
        },
        {
          _id: 3,
          title: 'Falsas creencias sobre comprar y vender marisco online.',
          content: 'Solo necesitas acreditar que eres un profesional del sector (personalidad física o jurídica), así sabemos que puedes vender pescado y marisco online. Una vez validados tus datos, podrás crear tu tienda y vender pescado online.'
        },
        {
          _id: 4,
          title: '¿Cómo puedo acceder a mi perfil en Pescadissimo?',
          content: 'Solo necesitas acreditar que eres un profesional del sector (personalidad física o jurídica), así sabemos que puedes vender pescado y marisco online. Una vez validados tus datos, podrás crear tu tienda y vender pescado online.'
        },
        {
          _id: 5,
          title: '¿Cuáles son las ventajas de Pescadissimo?',
          content: 'Solo necesitas acreditar que eres un profesional del sector (personalidad física o jurídica), así sabemos que puedes vender pescado y marisco online. Una vez validados tus datos, podrás crear tu tienda y vender pescado online.'
        },
        {
          _id: 6,
          title: '¿Cuánto cuesta Pescadissimo?',
          content: 'Solo necesitas acreditar que eres un profesional del sector (personalidad física o jurídica), así sabemos que puedes vender pescado y marisco online. Una vez validados tus datos, podrás crear tu tienda y vender pescado online.'
        },
        {
          _id: 7,
          title: '¿Cuánto cuesta Pescadissimo?',
          content: 'Solo necesitas acreditar que eres un profesional del sector (personalidad física o jurídica), así sabemos que puedes vender pescado y marisco online. Una vez validados tus datos, podrás crear tu tienda y vender pescado online.'
        },
        {
          _id: 8,
          title: '¿Cómo Pescadissimo me conseguirá clientes?',
          content: 'Solo necesitas acreditar que eres un profesional del sector (personalidad física o jurídica), así sabemos que puedes vender pescado y marisco online. Una vez validados tus datos, podrás crear tu tienda y vender pescado online.'
        },
        {
          _id: 9,
          title: '¿Debo encargarme del reparto de pescado y marisco a domicilio?',
          content: 'Solo necesitas acreditar que eres un profesional del sector (personalidad física o jurídica), así sabemos que puedes vender pescado y marisco online. Una vez validados tus datos, podrás crear tu tienda y vender pescado online.'
        },
        {
          _id: 10,
          title: '¿Necesito tener un establecimiento para inscribirme como vendedor?',
          content: 'Solo necesitas acreditar que eres un profesional del sector (personalidad física o jurídica), así sabemos que puedes vender pescado y marisco online. Una vez validados tus datos, podrás crear tu tienda y vender pescado online.'
        },
        {
          _id: 11,
          title: '¿Cómo puedo conseguir opiniones positivas en Pescadissimo?',
          content: 'Solo necesitas acreditar que eres un profesional del sector (personalidad física o jurídica), así sabemos que puedes vender pescado y marisco online. Una vez validados tus datos, podrás crear tu tienda y vender pescado online.'
        },
        {
          _id: 12,
          title: '¿Qué hacer si recibo una opinión inadecuada sobre mis productos o tienda?',
          content: 'Solo necesitas acreditar que eres un profesional del sector (personalidad física o jurídica), así sabemos que puedes vender pescado y marisco online. Una vez validados tus datos, podrás crear tu tienda y vender pescado online.'
        },
        {
          _id: 13,
          title: '¿Cómo puedo destacar mis productos sobre los demás?',
          content: 'Solo necesitas acreditar que eres un profesional del sector (personalidad física o jurídica), así sabemos que puedes vender pescado y marisco online. Una vez validados tus datos, podrás crear tu tienda y vender pescado online.'
        }
      ],
      clients: [
        {
          _id: 1,
          title: '¿Cómo es el proceso de compra?',
          content: 'Decide entre los productos que más te gusten de nuestros vendedores ubicados en diferentes puntos de España. Te aconsejamos comprar por cercanía para reducir tiempos, coste e impacto ambiental. Una vez tengas tu cesta lista, elige fecha y tipo de envío (a domicilio o recogida). El vendedor se encargará de seleccionar los mejores productos de la lonja, prepararlos, empaquetarlos y enviarlos. No te preocupes por nada, lo recibirás ¡listo para degustar!'
        },
        {
          _id: 2,
          title: '¿Cuánto tiempo dura el proceso?',
          content: 'Decide entre los productos que más te gusten de nuestros vendedores ubicados en diferentes puntos de España. Te aconsejamos comprar por cercanía para reducir tiempos, coste e impacto ambiental. Una vez tengas tu cesta lista, elige fecha y tipo de envío (a domicilio o recogida). El vendedor se encargará de seleccionar los mejores productos de la lonja, prepararlos, empaquetarlos y enviarlos. No te preocupes por nada, lo recibirás ¡listo para degustar!'
        },
        {
          _id: 3,
          title: '¿Cuánto cuesta los gastos de envío?',
          content: 'Decide entre los productos que más te gusten de nuestros vendedores ubicados en diferentes puntos de España. Te aconsejamos comprar por cercanía para reducir tiempos, coste e impacto ambiental. Una vez tengas tu cesta lista, elige fecha y tipo de envío (a domicilio o recogida). El vendedor se encargará de seleccionar los mejores productos de la lonja, prepararlos, empaquetarlos y enviarlos. No te preocupes por nada, lo recibirás ¡listo para degustar!'
        },
        {
          _id: 4,
          title: '¿Cómo es el embalaje de mi pedido?',
          content: 'Decide entre los productos que más te gusten de nuestros vendedores ubicados en diferentes puntos de España. Te aconsejamos comprar por cercanía para reducir tiempos, coste e impacto ambiental. Una vez tengas tu cesta lista, elige fecha y tipo de envío (a domicilio o recogida). El vendedor se encargará de seleccionar los mejores productos de la lonja, prepararlos, empaquetarlos y enviarlos. No te preocupes por nada, lo recibirás ¡listo para degustar!'
        },
        {
          _id: 5,
          title: '¿Cómo es el transporte del producto?',
          content: 'Decide entre los productos que más te gusten de nuestros vendedores ubicados en diferentes puntos de España. Te aconsejamos comprar por cercanía para reducir tiempos, coste e impacto ambiental. Una vez tengas tu cesta lista, elige fecha y tipo de envío (a domicilio o recogida). El vendedor se encargará de seleccionar los mejores productos de la lonja, prepararlos, empaquetarlos y enviarlos. No te preocupes por nada, lo recibirás ¡listo para degustar!'
        },
        {
          _id: 6,
          title: '¿Es seguro comprar productos perecederos por internet?',
          content: 'Decide entre los productos que más te gusten de nuestros vendedores ubicados en diferentes puntos de España. Te aconsejamos comprar por cercanía para reducir tiempos, coste e impacto ambiental. Una vez tengas tu cesta lista, elige fecha y tipo de envío (a domicilio o recogida). El vendedor se encargará de seleccionar los mejores productos de la lonja, prepararlos, empaquetarlos y enviarlos. No te preocupes por nada, lo recibirás ¡listo para degustar!'
        },
        {
          _id: 7,
          title: '¿En qué se basa la garantía y política de devoluciones al ser productos perecederos?',
          content: 'Decide entre los productos que más te gusten de nuestros vendedores ubicados en diferentes puntos de España. Te aconsejamos comprar por cercanía para reducir tiempos, coste e impacto ambiental. Una vez tengas tu cesta lista, elige fecha y tipo de envío (a domicilio o recogida). El vendedor se encargará de seleccionar los mejores productos de la lonja, prepararlos, empaquetarlos y enviarlos. No te preocupes por nada, lo recibirás ¡listo para degustar!'
        },
        {
          _id: 8,
          title: '¿Cómo sé que es un producto fresco o congelado?',
          content: 'Decide entre los productos que más te gusten de nuestros vendedores ubicados en diferentes puntos de España. Te aconsejamos comprar por cercanía para reducir tiempos, coste e impacto ambiental. Una vez tengas tu cesta lista, elige fecha y tipo de envío (a domicilio o recogida). El vendedor se encargará de seleccionar los mejores productos de la lonja, prepararlos, empaquetarlos y enviarlos. No te preocupes por nada, lo recibirás ¡listo para degustar!'
        },
        {
          _id: 9,
          title: 'Falsas creencias sobre comprar y vender marisco',
          content: 'Decide entre los productos que más te gusten de nuestros vendedores ubicados en diferentes puntos de España. Te aconsejamos comprar por cercanía para reducir tiempos, coste e impacto ambiental. Una vez tengas tu cesta lista, elige fecha y tipo de envío (a domicilio o recogida). El vendedor se encargará de seleccionar los mejores productos de la lonja, prepararlos, empaquetarlos y enviarlos. No te preocupes por nada, lo recibirás ¡listo para degustar!'
        }
      ]
    }
  )
}