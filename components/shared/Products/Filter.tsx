import React, { useState } from 'react';
import { SelectBox } from 'components/shared/SelectBox';
import { Slider } from 'components/shared/Slider';
import { MultiSelectBox } from 'components/shared/MultiSelectBox';

interface Props {
  data: {
    categories: object;
    formOfBreeding: object;
    preparation: object;
    priceList: Array<number>;
  };
}

export const Filter: React.FC<Props> = ({ data }) => {
  const { categories, formOfBreeding, preparation, priceList } = data;
  const [price, setPrice] = useState(0);
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  return (
    <>
      <div className="filter">
        <div className="div1">
          <p className="title">CATEGORÍAS</p>
          <div className="content">
            <MultiSelectBox
              label="Todas las categorías"
              items={categories}
            />
          </div>
        </div>
        <div className="div2">
          <p className="title">RANGO DE PRECIOS</p>
          <div className="content">
            <Slider
              label="Cercanía"
              value={price}
              min={priceList.length > 0 ? Math.min(...priceList) : 0}
              step={1}
              unit="€"
              name="price"
              max={priceList.length > 0 ? Math.max(...priceList) : 0}
              onChange={handlePrice}
            />
            <div className="checkbox-item">
              <input type="checkbox" />
              <span>Precio ascendente</span>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" />
              <span>Precio descendente</span>
            </div>
          </div>
        </div>
        <div className="div3">
          <p className="title">PREPARACIÓN</p>
          <div className="content">
            <MultiSelectBox
              label="Todas las categorías"
              items={preparation}
            />
          </div>
        </div>
        <div className="div4">
          <p className="title">FORMA DE CRIANZA </p>
          <div className="content">
            <MultiSelectBox
              label="Todas las categorías"
              items={formOfBreeding}
            />
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .filter {
            display: flex;
            justify-content: space-between;
            padding: 32px 0;
            border-bottom: 1px solid #000;     
          }

          .filter .title { 
            font-family: Montserrat;
            font-style: normal;
            font-weight: 300;
            font-size: 14px;
            line-height: 17px;
            color: #000000;
            margin-bottom: 17px;
          }

          .filter .slider {
            margin-bottom: 22px;
          }

          .filter .slider .title {
            font-family: Montserrat;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
            color: #000000;
            margin-bottom: 4px;
          }

          .filter .slider .rangeLabel {
            display: flex;
            justify-content: space-between;
          }

          .filter .slider .rangeLabel span {
            font-family: Montserrat;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 17px;
            color: #000000;
          }

          .filter .checkbox-item {
            display: flex;
            align-items: center;
            margin-bottom: 21px;
          }

          .filter .checkbox-item input {
            width: 16px;
            height: 16px;
            margin-bottom: 0;
          }

          .filter .checkbox-item span {
            margin-left: 8px;
            font-family: Montserrat;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            color: #000000;
          }

          @media(max-width: 912px) {
            .filter {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}