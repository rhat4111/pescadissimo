import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface Props {
  children: React.ReactNode,
  page?: String
}

export const AuthContainer: React.FC<Props> = ({
  children,
  page = 'login'
}) => {
  console.log(page);
  return (
    <>
      <div className="container">
        <div className="form">

          <Header page={`${page}`} />

          <div className="body">
            {children}
          </div>

          <Footer page={`${page}`} />

        </div>
      </div>

      <style jsx>
        {`
          .container {
            padding: 90px 16px 132px;
            display: flex;
            justify-content: center;
          }

          .container .form {
            max-width: 543px;
            width: 100%;
          }

          .container .form .body {
            padding: 88px 0 58px;
          }

          @media(max-width: 1024px) {
            .container {
              padding: 20px 16px 46px;
            } 

            .container .form {
              max-width: 434px;
              width: 100%;
            }
            
            .container .form .body {
              padding: 67px 0 46px;
            }
          }

          @media(max-width: 768px) {
            .container {
              padding: 20px 16px 85px;
            } 

            .container .form .body {
              padding: 51px 0 28px;
            }
          }
        `}
      </style>
    </>
  )
}