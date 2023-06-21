import React from 'react';
import Header from 'layouts/Header';

const Cookies: React.FC = () => {
  return (
    <>
      <Header />
      <div className="main">
        <p className="title">POLÍTICA DE COOKIES</p>
        <p className="description brief">
          Si dejas un comentario en nuestro sitio puedes elegir guardar tu nombre, dirección de correo electrónico y web en cookies. Esto es para tu comodidad, para que no tengas que volver a rellenar tus datos cuando dejes otro comentario. Estas cookies tendrán una duración de un año.<br /><br />
          Si tienes una cuenta y te conectas a este sitio, instalaremos una cookie temporal para determinar si tu navegador acepta cookies. Esta cookie no contiene datos personales y se elimina al cerrar el navegador.<br /><br />
          Cuando inicias sesión, también instalaremos varias cookies para guardar tu información de inicio de sesión y tus opciones de visualización de pantalla. Las cookies de inicio de sesión duran dos días, y las cookies de opciones de pantalla duran un año. Si seleccionas “Recordarme”, tu inicio de sesión perdurará durante dos semanas. Si sales de tu cuenta, las cookies de inicio de sesión se eliminarán.<br /><br />
          Si editas o publicas un artículo se guardará una cookie adicional en tu navegador. Esta cookie no incluye datos personales y simplemente indica el ID del artículo que acabas de editar. Caduca después de 1 día.
        </p>

        <div className="item">
          <p className="subTitle">1. Cookies utilizadas en este sitio web</p>
          <p className="description">
            Siguiendo las directrices de la Agencia Española de Protección de Datos procedemos a detallar el uso de cookies que hace esta web con el fin de informarle con la máxima exactitud posible.<br /><br />
            <span className="bold red">Cookies propias</span><br />
            <span className="bold">Cookies de sesión</span>, para garantizar que los usuarios que escriban comentarios en el blog sean humanos y no aplicaciones automatizadas. De esta forma se combate el spam.<br /><br />
            <span className="bold red">Cookies de terceros:</span><br />
            <span className="bold">Google Analytics:</span> Almacena cookies para poder elaborar estadísticas sobre el tráfico y volumen de visitas de esta web. Al utilizar este sitio web está consintiendo el tratamiento de información acerca de usted por Google. Por tanto, el ejercicio de cualquier derecho en este sentido deberá hacerlo comunicando directamente con Google.<br /><br />
            <span className="bold">Redes sociales:</span> Cada red social utiliza sus propias cookies para que usted pueda pinchar en botones del tipo Me gusta o Compartir. En nuestro caso REDES.
          </p>
        </div>

        <div className="item">
          <p className="subTitle">2.-Desactivación o eliminación de cookies</p>
          <p className="description">
            En cualquier momento podrá ejercer su derecho de desactivación o eliminación de cookies de este sitio web. Estas acciones se realizan de forma diferente en función del navegador que esté usando.<br /><br />

            <span className="bold">Notas adicionales</span><br /><br />

          · Pescadissimo no se hace responsable ni del contenido ni de la veracidad de las políticas de privacidad que puedan tener los terceros mencionados en esta política de cookies.<br /><br />
          · Los navegadores web son las herramientas encargadas de almacenar las cookies y desde este lugar debe efectuar su derecho a eliminación o desactivación de las mismas. Ni esta web ni sus representantes legales pueden garantizar la correcta o incorrecta manipulación de las cookies por parte de los mencionados navegadores.<br /><br />
          · En algunos casos es necesario instalar cookies para que el navegador no olvide su decisión de no aceptación de las mismas.<br /><br />
          · En el caso de las cookies de Google Analytics, ​Esta página web utiliza Google Analytics, un servicio analítico web proporcionado por Google, Inc. (“Google“). Google Analytics utiliza las llamadas “cookies”, archivos de texto que se instalan en el ordenador y que hacen posible el análisis del comportamiento de los usuarios en Internet. La información que genera la cookie acerca del uso que realiza el usuario de la página web se transmite y se almacena generalmente en los servidores de Google de Estados Unidos. En caso de activar la opción de IP anónima en la página web, la dirección IP no aparecerá completa dentro de los países de la Unión Europea o en los demás países que así lo hayan acordado dentro del espacio económico de la Unión Europea. Solo excepcionalmente se transmitirá la dirección IP completa a un servidor de Google en Estados Unidos y una vez allí se acortará. Únicamente con autorización del usuario de la página, Google utilizará esta información con el fin de valorar el comportamiento del usuario en la página web, generar informes sobre las actividades de la web y ofrecer al dueño de la página servicios relacionados con el uso web y de Internet. La dirección IP transmitida por su navegador en el marco de Google Analytics no se asociará con otros datos de Google. El usuario puede evitar el almacenamiento de cookies configurando el navegador correspondientemente de manera que no se almacenen las cookies. Esta configuración puede afectar a la plena funcionalidad de la página web. Con el uso de esta web, el usuario está de acuerdo con el procesamiento de datos por Google de la forma anteriormente mencionada. El usuario también puede evitar el registro de los datos generados por las cookies y de los relacionados al uso de la página web (incluida la dirección IP), así como el procesamiento de los mismos descargando e instalando el siguiente plugin para el navegador disponible a través de este
            <span className="red bold"> Link</span>.<br /><br />
          · Si tiene alguna consulta sobre esta política de cookies, póngase en contacto con nosotros a través de la sección de
            <span className="red bold"> contacto.</span><br /><br />
            <span className="red">Pescadissimo</span>. Todos los derechos reservados.
          </p>
        </div>
      </div>

      <style jsx>
        {`
          .main {
            padding: 71px 164px;
          }

          .main .title {
            font-family: Montserrat;
            font-style: normal;
            margin-bottom: 17px;
            font-weight: bold;
            font-size: 48px;
            line-height: 59px;
            text-align: center;
            color: #000000;
          }

          .main .brief {
            margin-bottom: 114px;
          }

          .main .description {
            font-family: Montserrat;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 22px;
            color: #000000;
          }

          .main .subTitle {
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 24px;
            line-height: 29px;
            margin-bottom: 40px ;
            color: #000000;
          }
          
          .main .red {
            color: #D61016;
          }

          .main .bold {
            font-weight: bold;
          }

          .main .item {
            margin-bottom: 55px;
          }

          @media(max-width: 1024px) {
            .main { 
              padding: 71px 36px;
            }

            .main .title {
              margin-bottom: 11px;
              font-size: 36px;
              line-height: 44px;
            }

            .main .brief {
              margin-bottom: 49px;
            }

            .main .description {
              font-size: 14px;
              line-height: 17px;
            }

            .main .subTitle {
              font-size: 18px;
              line-height: 22px;
              margin-bottom: 50px ;
            }

            .main .item {
              margin-bottom: 50px;
            }
          }

          @media(max-width: 768px) {
            .main { 
              padding: 52px 16px;
            }

            .main .title {
              margin-bottom: 32px;
              font-size: 24px;
              line-height: 29px;
            }

            .main .brief {
              margin-bottom: 40px;
            }

            .main .subTitle {
              margin-bottom: 24px ;
            }

            .main .item {
              margin-bottom: 24px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Cookies;