import React from 'react';
import Link from 'next/link';

interface Props {
  page?: String
}

const Header: React.FC<Props> = ({
  page = 'login'
}) => {
  const links = { login: 'Login', register: 'Registro' };
  console.log(page);

  return (
    <>
      <div className="header">
        <ul>
          {
            Object.keys(links).map(key => {
              return (
                <li key={key} className={key === page && 'active'}>
                  <Link href={`/auth?type=${key}`}>
                    <a>{links[key]}</a>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>

      <style jsx>
        {`
          .header ul {
            display: flex;
            justify-content: center;
            margin: 0;
            padding: 0 30px 0 0;
          }

          .header ul li.active {
            border-bottom: 2px solid #000;
            color: #000;
          }

          .header ul li { 
            display: flex;
            justify-content: center;
            border-bottom: 2px solid #FFF;
            width: 67px;
            margin: 0 50px;
            color: #C4C4C4;
            padding: 15px 0;
            cursor: pointer;
            list-style-type: none;
            font-weight: 600;
            font-size: 36px;
            line-height: 44px;
          }

          .header ul li:hover { 
            border-bottom: 2px solid #000;
          }

          .header ul li:hover a { 
            color: #000!important;
          }

          @media(max-width: 1024px) {
            .header ul li {
              width: 35px; 
              margin: 0 50px;
              font-size: 24px;
              line-height: 29px
            }
          }

          @media(max-width: 768px) {
            .header ul li {
              width: 41px; 
              margin: 0 20px;
              font-size: 18px;
              line-height: 22px
            }
          }
        `}
      </style>
    </>
  )
}

export default Header;