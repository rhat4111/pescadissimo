import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { SellerCard } from 'components/shared/SellerCard'

interface Props {
  data: object;
}

export const Sellers: React.FC<Props> = ({ data }) => {
  return (
    <>
      <div className="cards">
        <Row className="mx-0">
          {
            Object.keys(data).map(index => {
              const item = data[index];
              return (
                <Col lg="4" md="6" sm="12" key={index}>
                  <SellerCard
                    _id={item.id}
                    avatar={(item.images && item.images[1].path !== '') ? item.images[1].path : 'https://store.pescadissimo.com/static/images/img_default/tienda_default-ilustracion.png'}
                    isLike={false}
                    name={item.name}
                    location={(item.logisticStore && item.logisticStore.address.street) ? item.logisticStore.address.street : 'Unknown'}
                    rate={5}
                    followingCount={240}
                    description={item.description}
                  />
                </Col>
              );
            })
          }
        </Row>
      </div>

      <style jsx>
        {`
          .cards {
              padding: 64px 0 32px;
          }

          @media(max-width: 1024px) {
            .cards {
                margin-left: -59px;
                margin-right: -59px;
                padding: 64px 0 12px;
            }
          }

          @media(max-width: 500px) {
            .cards {
              margin-left: 0;
              margin-right: 0;
            }
          }
        `}
      </style>
    </>
  );
};