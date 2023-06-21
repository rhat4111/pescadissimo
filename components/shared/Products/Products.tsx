import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { ProductCard } from 'components/shared/ProductCard'

interface Props {
  data: Array<object>;
}

export const Products: React.FC<Props> = ({ data }) => {
  const realData = !data.length ? [
    { images: [], productBase: {}, store: {} },
    { images: [], productBase: {}, store: {} },
    { images: [], productBase: {}, store: {} },
    { images: [], productBase: {}, store: {} },
    { images: [], productBase: {}, store: {} },
    { images: [], productBase: {}, store: {} },
    { images: [], productBase: {}, store: {} },
    { images: [], productBase: {}, store: {} },
    { images: [], productBase: {}, store: {} },
    { images: [], productBase: {}, store: {} },
    { images: [], productBase: {}, store: {} },
    { images: [], productBase: {}, store: {} },
  ] : data

  return (
    <>
      <div className="products">
        <Row>
          {
            Object.keys(realData).map(index => {
              const item = realData[index];
              return (
                <Col xl="4" md="6" sm="12" key={index}>
                  <ProductCard
                    id={item.id}
                    image={item.images[0]}
                    available={item.productBase['available']}
                    company={item.store['name']}
                    name={item.productBase['name']}
                    location={item.productBase['name']}
                    rate={5}
                    uriName={item.uriName}
                    followingCount={240}
                  />
                </Col>
              )
            })
          }
        </Row>
      </div>

      <style jsx>
        {`
          .products {
            padding: 48px 0;
            border-bottom: 1px solid #000;
          }
        `}
      </style>
    </>
  );
};