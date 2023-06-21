import React, { useState } from 'react';
import Header from 'layouts/Header';
import { Filter } from 'components/shared/Filter';
import { ProductList } from 'components/shared/Products';
import { useProduct, useFilter } from 'store';
import { Opinion } from 'components/domain/Home';
import { Row, Col } from 'react-bootstrap';

const Jorge: React.FC = () => {
  const { filter } = useFilter();
  const { products } = useProduct();
  const [tab, setTab] = useState('product');
  const handleTab = (string) => {
    setTab(string);
  };

  return (
    <>
      <Header logoColor="white" textColor="white" />
      <div className="banner">
        <div>
          <div className="logo">
            logo<br /> tienda
          </div>
          <p className="title">Pescadería Jorge</p>
          <p className="description">
            Calle Góngora 19, 29002<br />
            Málaga
          </p>
        </div>
      </div>
      <div className="jorge-container">
        <div className="tab">
          <span className={`item ${tab === `product` ? `active` : ``}`} onClick={() => handleTab('product')}>Productos</span>
          <span className={`item ${tab === `about` ? `active` : ``}`} onClick={() => handleTab('about')}>Sobre nosotros</span>
        </div>

        {
          tab === 'product'
            ? (
              <>
                <div className="filter-container">
                  <Filter text="¿Qué te apetece hoy?" color="#FFEEEE" />
                </div>
                <ProductList filter={filter} ProductList={products} />
              </>
            )
            : (
              <>
                <div className="about">
                  <div className="description">
                    Somos pescaderos de Málaga desde 1963. Nuestra pasión es la vida marítima y complacer a nuestros clientes con un trato cercano. Siempre vamos a estar ahí para lo que necesites.
                  </div>

                  <Row>
                    <Col sm="6">
                      <div className="item">
                        <div>
                          <p className="title">Puntuación media</p>
                          < img src="/jorge/1.png" />
                        </div>
                      </div>
                    </Col>
                    <Col sm="6">
                      <div className="item">
                        <div>
                          <p className="title">Frescura garantizada</p>
                          < img src="/jorge/2.png" />
                        </div>
                      </div>
                    </Col>
                    <Col sm="6">
                      <div className="item">
                        <div>
                          <p className="title">Política de devolución</p>
                          < img src="/jorge/3.png" />
                        </div>
                      </div>
                    </Col>
                    <Col sm="6">
                      <div className="item">
                        <div>
                          <p className="title">Embalaje seguro</p>
                          < img src="/jorge/4.png" />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </>
            )
        }
        <Opinion />
      </div>

      <style jsx>
        {`
          .jorge-container {
            padding: 24px;
          }

          .banner {
            width: 100%;
            height: 716px;
            margin-top: -92px;
            background: url("/jorge/bg.png");
            background-size: cover;
            display: flex;
            align-items: center;
            justify-content: center;
            background-size: center;
          }

          .banner>div {
            display: flex;
            align-items: center;
            flex-direction: column;
          }

          .banner .logo {
            width: 160px;
            height: 160px;
            border-radius: 80px;
            font-weight: 500;
            font-size: 24px;
            line-height: 29px;
            text-align: center;
            color: #000000;
            background: #FFF;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
          }

          .banner .title {
            font-weight: 800;
            font-size: 48px;
            line-height: 59px;
            text-align: center;
            color: #FFFFFF;
            margin-bottom: 32px;
          }

          .banner .description {
            font-style: italic;
            font-weight: 500;
            font-size: 24px;
            line-height: 29px;
            text-align: center;
            color: #FFFFFF;
          }

          .tab .item {
            font-weight: 500;
            font-size: 24px;
            line-height: 29px;
            padding: 5px 0;
            cursor: pointer;
            color: #949494;
            margin-left: 44px;
          }

          .tab .item.active {
            font-weight: bold;
            font-size: 24px;
            line-height: 29px;
            color: #000000;
            border-bottom: 1px solid #000;
          }

          .filter-container {
            padding: 105px;
            border-bottom: 1px solid #000;
          }

          .about .description {
            margin-top: 105px;
            padding: 54px 20px;
            border-top: 1px solid #000;
            border-bottom: 1px solid #000;
            font-size: 24px;
            line-height: 29px;
            color: #000000;
          }

          .about .item {
            padding-top: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .about .item>div {
            width: 315px;
            height: 184px;
            margin-bottom: 21px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: #FFFFFF;
            box-shadow: 1px 0px 3px rgba(165, 158, 158, 0.52);
            border-radius: 3px;
          }

          .about .item>div .title {
            font-weight: 500;
            font-size: 22px;
            line-height: 27px;
            color: #000000;
            margin-bottom: 8px;
          }
        `}
      </style>
    </>
  );
};

export default Jorge;