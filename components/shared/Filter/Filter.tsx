import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import useOnclickOutside from 'react-cool-onclickoutside';

import { Slider } from '../Slider';

interface Props {
  text?: string;
  color?: string;
}

export const Filter: React.FC<Props> = ({
  text,
  color = 'white'
}) => {
  const [opened, setOpened] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [filterInfo, setFilterInfo] = useState({
    distance: 0,
    price: 0,
    priceUp: false,
    priceDown: false
  });

  const ref = useOnclickOutside(() => {
    setOpened(false);
  });

  const icons = ['Pescados', 'Mariscos', 'Frescos', 'Congelados'];

  const handleKeyword = (event) => {
    setKeyword(event.target.value);
  }

  const handleChange = (e) => {
    setFilterInfo({ ...filterInfo, [e.target.name]: e.target.value });
  }

  const handleSearch = (bool) => {
    setOpened(bool);
  }

  const keyEnderSearch = (e) => {
    e.charCode == 13 && keyword != '' && setOpened(true);
  }

  return (
    <>
      <div className={`filter-container ${opened ? `opend` : ``}`} ref={ref}>
        <div className="filter">
          <input
            type="text"
            className="filter-input"
            placeholder={text}
            onKeyPress={keyEnderSearch}
            onChange={handleKeyword}
            style={{ background: color }}
            value={keyword}
          />
          <div className="search-result">
            <Row>
              {
                icons.map((item, index) => {
                  return (
                    <Col key={index} xs="6">
                      <div className="item-type">
                        <img src={`/shared/filter/${index + 1}.png`} />
                        <span>{item}</span>
                      </div>
                    </Col>
                  )
                })
              }
              <Col sm="12">
                <Slider
                  label="Cercanía"
                  name="distance"
                  min={0}
                  max={1500}
                  value={filterInfo.distance}
                  step={1}
                  unit="km"
                  onChange={handleChange}
                />
              </Col>
              <Col sm="12">
                <Slider
                  label="Precio"
                  name="price"
                  min={0}
                  max={80}
                  step={1}
                  unit="€"
                  value={filterInfo.price}
                  onChange={handleChange}
                />
              </Col>
              <Col xs="6">
                <div className="checkbox-item">
                  <input type="checkbox" />
                  <span>Precio ascendente</span>
                </div>
              </Col>
              <Col xs="6">
                <div className="checkbox-item">
                  <input type="checkbox" />
                  <span>Precio ascendente</span>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <button type="button" className="search-button" onClick={() => handleSearch(true)}>
          <img src="/shared/filter/icons/filter-bg.svg" className="bg" />
          <img src="/shared/filter/icons/search-white.svg" className="icon" />
        </button>
      </div>

      <style jsx>
        {`
          .filter-container {
            display: flex;
            justify-content: center;
          }

          .filter {
            position: relative;
            width: 471px;
            height: 64px;
          }

          .filter .filter-input {
            padding: 16px;
            width: 100%;
            height: 100%;
            background: #FFFFFF;
            border-radius: 16px;
            font-weight: 500;
            font-size: 20px;
            line-height: 24px;
            border: none;
            text-align: center;
            color: #000000;
          }

          .search-button {
            margin-left: 12px;
            width: 64px;
            height: 64px;
            display: flex;
            position: relative;
            background: none;
            border: none;
          }
            
          .search-button .bg {
            position: absolute;
            top: 50%;
            transition: 0.3s;
            left: 50%;
            z-index: 1;
            transform: translate(-50%, -50%) rotate(-90deg);
          }

          .search-button:hover {
            opacity: 0.9;
          }

          .filter-container.opend .search-result {
            display: block;
          }

          .search-result {
            padding: 15px 45px;
            margin-top: 12px;
            display: none;
            position: relative;
            z-index: 1000;
            width: 100%;
            min-height: 324px;
            border-radius: 16px;
            box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.12);
            background: #FFF;
          }

          .search-result .item-type {
            margin-bottom: 6px;
            cursor: pointer;
          }

          .search-result .item-type img {
            margin-right: 12px;
          }

          .search-result .item-type span {
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
            color: #949494;
          }

          .search-button .icon {
            position: absolute;
            top: 50%;
            left: 50%;
            transition: 0.3s;
            z-index: 2;
            transform: translate(-50%, -50%);
          }

          .search-button:focus, .filter-input:focus {
            outline: none;
          }

          .filter-container.opend .bg {
              transform: translate(-50%, -50%);
          }

          .filter-container.opend .icon {
            transform: translate(-50%, -50%) rotate(-45deg);
          }

          .checkbox-item {
            display: flex;
            align-items: center;
            margin-top: 6px;
          }

          .checkbox-item input {
            width: 16px;
            height: 16px;
            margin-bottom: 0;
          }

          .checkbox-item span {
            margin-left: 8px;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            color: #000000;
          }

          @media(max-width: 1024px) {
            .filter {
              width: 412px;
              height: 54px;
            }

            .search-button {
              margin-left: 20px;
              width: 54px;
              height: 54px;
            }
              
            .search-button .bg {
              position: absolute;
              width: 54px;
              height: 42px;
            }

            .search-result {
              width: calc(100% + 74px);
            }
          }

          @media(max-width: 560px) {
            .filter {
              width: 239px;
              height: 44px;
            }

            .filter .filter-input {
              font-size: 14px;
              line-height: 17px;
            }

            .search-button {
              margin-left: 10px;
              width: 44px;
              height: 44px;
            }
              
            .search-button .bg {
              position: absolute;
              width: 44px;
              height: 43px;
            }

            .search-result {
              width: calc(100% + 54px);
            }
          }
        `}
      </style>
    </>
  );
};