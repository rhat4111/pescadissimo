import React from 'react';

export const Filter: React.FC = () => {
  return (
    <>
      <div className="filter">
        <input
          type="text"
          className="filter-input"
          placeholder="¡Visita virtualmente nuestros vendedores únicos!"
        />
        <button type="button" className="icon">
          <img src="/icons/filter.svg" />
        </button>
      </div>

      <style jsx>
        {`
          .filter {
            position: relative;
          }
          .filter-input {
            padding-right: 40px;
            width: 100%;
            height: 93px;
            background: none;
            border: none;
            border-bottom: 1px solid #FFF;
            font-family: Montserrat;
            font-style: normal;
            font-weight: normal;
            font-size: 24px;
            line-height: 29px;
            color: #FFFFFF;
          }
          .filter-input:focus {
            outline: none;
          }

          .filter-input::placeholder {
            color: #FFFFFF;
          }
          .icon {
            background: none;
            border: none;
            padding: 0; 
            position: absolute;
            top: 32px;
            right: 0;
          }
          .icon:focus {
            outline: none;
          }
          @media(max-width: 1024px) {
            .filter-input {
              height: 86px;
              font-size: 18px;
              line-height: 22px;
            }
          }
          @media(max-width: 500px) {
            .filter-input {
              height: 86px;
              font-size: 18px;
              line-height: 22px;
            }
          }
        `}
      </style>
    </>
  )
}