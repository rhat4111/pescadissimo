import { useState } from 'react';
import Collapse from 'react-collapse';

interface Props {
  opened: boolean;
  color: string;
  title: string;
  content: string;
}

export const Accordion: React.FC<Props> = ({
  opened = false,
  color = "black",
  title,
  content
}) => {
  const [isOpened, setIsOpened] = useState(opened);
  const handleCollapse = () => {
    setIsOpened(!isOpened);
  }
  return (
    <>
      <div className="accordion-container">
        <div className="header" onClick={handleCollapse}>
          <span style={{ color: color }}>{title}</span>
          <div className="arrow">
            {
              isOpened
                ? (
                  color === "black"
                    ? <img src="/icons/arrow-down.svg" />
                    : <img src="/icons/arrow-down-white.svg" />
                )
                : (
                  color === "black"
                    ? <img src="/icons/arrow-up.svg" />
                    : <img src="/icons/arrow-up-white.svg" />
                )
            }
          </div>
        </div>
        <div className="body" style={{ color: color }}>
          <Collapse isOpened={isOpened}>
            {content}
          </Collapse>
        </div>
      </div>

      <style jsx>
        {`
          .accordion-container {
            width: 100%;
          }

          .accordion-container .header {
            display: flex;
            cursor: pointer;
            justify-content: space-between;
            align-items: center;
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 24px;
            line-height: 29px;
            padding: 29px 0;
            color: #000000;
          }

          .accordion-container .body {
            font-family: Montserrat;
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 24px;
            color: #818181;
          }

          .accordion-container .header .arrow {
            margin-left: 20px;
          }

          @media(max-width: 1024px) {
            .accordion-container .header {
              font-size: 24px;
              line-height: 29px;
              padding: 22px 0;
            }

            .accordion-container .header .arrow img {
              width: 21px;
              height: 10.5px ;
            }

            .accordion-container .body {
              font-size: 14px;
              line-height: 17px;
            }
          }

          @media(max-width: 768px ) {
            .accordion-container .header {
              font-size: 11px;
              line-height: 13px;
              padding: 22px 0;
            }

            .accordion-container .header .arrow img {
              width: 7px;
              height: 3.5px ;
            }

            .accordion-container .body {
              font-size: 10px;
              line-height: 12px;
            }
          }
        `}
      </style>
    </>
  );
}