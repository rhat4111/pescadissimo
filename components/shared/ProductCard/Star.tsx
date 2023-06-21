import React from 'react';

interface Props {
  max: number;
  rate: number;
};

export const Star: React.FC<Props> = ({ max = 5, rate }) => {
  return (
    <>
      <div className="star-container d-flex">
        {
          Array.from(Array(rate), (e, i) => {
            return <img key={i} src="/shared/product-card/icons/star.svg" />
          })
        }
        {
          Array.from(Array(max - rate), (e, i) => {
            return <img key={i} src="/shared/product-card/icons/star-o.svg" />
          })
        }
      </div>
    </>
  )
}