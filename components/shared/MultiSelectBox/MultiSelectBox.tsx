import React, { useState } from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';

interface Props {
  label: string;
  items: object;
}

export const MultiSelectBox: React.FC<Props> = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOnclickOutside(() => {
    setIsOpen(false)
  });

  return (
    <>
      <div className="selectbox-container" ref={ref}>
        <div className={`input-box ${isOpen && `active`}`} onClick={() => setIsOpen(!isOpen)}>
          <span>{label}</span>
          <img src="/shared/multi-select-box/arrow.svg" alt="" />
        </div>
        {
          <ul className={`menu-list ${!isOpen && `d-none`}`}>
            {
              Object.keys(items).map(index => {
                const item = items[index];
                return (
                  <li value={item.id} key={index}>
                    <label>
                      <span>{`${item.name[0].toUpperCase()}${item.name.slice(1)}`}</span>
                      <input value={item.key} type="checkbox" />
                    </label>
                  </li>
                )
              })
            }
          </ul>
        }
      </div>

      <style jsx>
        {`
          .selectbox-container {
            position: relative;
            width: 212px;
          }

          .input-box {
            cursor: pointer;
            width: 100%;
            height: 60px;
            border: 0.5px solid #000000;
            box-sizing: border-box;
            border-radius: 2px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 12px;
          }

          .input-box.active img {
            transform: rotate(180deg);
          }

          .menu-list {
            position: absolute;
            width: 100%;
            background: #FFFFFF;
            z-index: 1000;
            border: 0.5px solid #000000;
            box-sizing: border-box;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 2px;
            padding-left: 0;
          }

          .menu-list li {
            list-style-type: none;
            padding: 6px 12px;
            cursor: pointer;
          }

          .menu-list li label {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0;
            cursor: pointer;
          }
          
          .menu-list li input {
            width: 16px;
            cursor: pointer;
            height: 16px;
            background: grey;
          }

        `}
      </style>
    </>
  );
};