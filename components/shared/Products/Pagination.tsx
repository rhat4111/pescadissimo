import React from 'react';

interface Props {
  handlePagination: any,
  currentPage: number,
  totalPageCount: number,
}

export const Pagination: React.FC<Props> = ({
  handlePagination,
  currentPage,
  totalPageCount,
}) => {
  let array = [];

  for (var i = 1; i <= totalPageCount; i++) {
    array.push(i);
  }

  return (
    <>
      <ul className="pagination">
        <li onClick={() => handlePagination(1)}>
          <img src="/products/icons/bar-disable.svg" alt="" />
          <img src="/products/icons/arrow-left-disable.svg" alt="" />
        </li>
        <li onClick={() => handlePagination(currentPage === 1 ? 1 : (currentPage - 1))}><img src="/products/icons/arrow-left-disable.svg" alt="" /></li>

        {
          array.map(item => {
            return (
              <li
                className={currentPage === item && 'active'}
                onClick={() => handlePagination(item)}
                key={item}
              >
                {item}
              </li>
            )
          })
        }

        <li onClick={() => handlePagination(currentPage === totalPageCount ? totalPageCount : currentPage + 1)}><img src="/products/icons/arrow-right-hover.svg" alt="" /></li>
        <li onClick={() => handlePagination(totalPageCount)}>
          <img src="/products/icons/arrow-right-normal.svg" alt="" />
          <img src="/products/icons/bar-normal.svg" alt="" />
        </li>
      </ul>

      <style jsx>
        {`
          .pagination {
            width: 100%;
            height: 112px;
            display: flex;
            align-items: center;
            justify-content: center;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 0;
            padding-left: 0;
          }

          .pagination li {
            margin: 0 10px;
            cursor: pointer;
            display: flex;
            align-items: center;   
            width: 50px;
            height: 40px;
            font-family: Montserrat;
            font-style: normal;
            font-weight: normal;
            font-size: 24px;
            line-height: 29px;
            justify-content: center;
            color: #000; 
          }

          .pagination li.active {
            background: url('/products/icons/pagination-bg.svg');
            background-size: 100% 100%;
            color: #FFF;
          }

          .pagination li:hover {
            background: url('/products/icons/pagination-bg.svg');
            background-size: 100% 100%;
            color: #FFF;
          }

          @media(max-width: 600px) {
            .pagination li {
              width: 40px;
              margin: 0;
            }
          }
        `}
      </style>
    </>
  );
};