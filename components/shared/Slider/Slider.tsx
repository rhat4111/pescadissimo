import React from 'react';

interface Props {
  label?: string;
  name: string;
  value: number;
  min: number;
  max: number;
  step: number;
  unit: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

export const Slider: React.FC<Props> = ({
  label,
  name,
  value,
  min,
  max,
  step,
  unit,
  onChange
}) => {
  return (
    <>
      <div className="group">
        {label && <label htmlFor={name}>{label}</label>}
        <div className="range">
          <span>{`${min} ${unit}`}</span>
          <span>{`${max} ${unit}`}</span>
        </div>
        <input
          type="range"
          name={name}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChange}
        />
      </div>

      <style jsx>
        {`
          .group {
            width: 100%;
            margin-bottom: 16px;
          }

          .group label {
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
            color: #000000;
            margin-bottom: 4px;
          }

          .group .range {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2px;
          }

          .group .range span {
            font-weight: normal;
            font-size: 14px;
            line-height: 17px;
            color: #000000;
          }

          .group input[type=range] {
            -webkit-appearance: none;
            width: 100%;
            height: 4px;
            border-radius: 8px;
            background: #EFEFEF;
            outline: none;
            opacity: 0.7;
            -webkit-transition: .2s;
            transition: opacity .2s;
          }

          .group input[type=range]:hover {
            opacity: 1;
          }

          .group input[type=range]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 20px;
            height: 20px;
            background: #D7D7D7;
            border-radius: 10px;
            cursor: pointer;
          }

          .group input[type=range]::-moz-range-thumb {
            width: 20px;
            height: 20px;
            background: #D7D7D7;
            border-radius: 10px;
            cursor: pointer;
          }

          @media(max-width: 1024px) {
            .group input[type=range]::-webkit-slider-thumb {
              width: 16px;
              height: 16px;
            }

            .group input[type=range]::-moz-range-thumb {
              width: 16px;
              height: 16px;
            }
          }

          @media(max-width: 768 px) {
            .group {
              margin-bottom: 11px;
            }

            .group label {
              font-size: 13px;
              line-height: 16px;
            }

            .group .range span {
              font-size: 10px;
              line-height: 12px;
            }

            .group input[type=range] {
              height: 2px;
            }

            .group input[type=range]::-webkit-slider-thumb {
              width: 20px;
              height: 20px;
            }

            .group input[type=range]::-moz-range-thumb {
              width: 20px;
              height: 20px;
            }
          }
        `}
      </style>
    </>
  );
};