import React from 'react';

type SelectBox = {
  _id: number;
  value: string;
  text: string;
}

interface Props {
  items: SelectBox[];
}

export const SelectBox: React.FC<Props> = ({ items }) => {
  return (
    <>
      <select className="item">
        {
          items.map(item => {
            return <option key={item._id} value={item.value ? item.value : item._id}>{item.text}</option>
          })
        }
      </select>

      <style jsx>
        {`
        .item {
          height: 60px;
          background: #FFF;
          border-radius: 2px;
          border: 0.5 px solid #000;
          padding: 20px 11px 22px;
          font-family: Montserrat;
          font-style: normal;
          font-weight: 300;
          font-size: 14px;
          line-height: 17px;
          color: #000000;
          cursor: pointer;
        }

        .item:focus {
          outline: 0;
        }
      `}
      </style>
    </>
  );
};