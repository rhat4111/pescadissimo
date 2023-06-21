import React from 'react';
import ReactHtmlParser from "react-html-parser";
import { useAbout } from 'store';
import Header from 'layouts/Header';

const About: React.FC = () => {
  const { abouts } = useAbout();

  return (
    <>
      <Header textColor="white" logoColor="white" />
      <div className="main">
        <div className="banner">
          <div className="bg"></div>
        </div>
        <div className="articles">
          <div className="title">
            {!!abouts && !!abouts.body && (
              <div>{ReactHtmlParser(abouts.title.es)}</div>
            )}
          </div>
          {!!abouts && !!abouts.body && (
            <div className="content">{ReactHtmlParser(abouts.body.es)}</div>
          )}
        </div>
      </div>

      <style jsx>
        {`
          .main {
            background: #212121;
            padding-left: 64px;
            padding-right: 56px;
            margin-top: -92px;
            padding-top: 92px;
          }

          .banner {
            padding: 30px 0 54px;
            width: 100%;
          }

          .banner .bg {
            width: 100%;
            height: 552px;
            background: url('/about/bg.png');
            background-size: cover;
            background-position: right;
          }

          .articles {
            padding-bottom: 90px;
            color: white;
          }

          .articles .title {
            font-family: Montserrat;
            font-style: normal;
            font-weight: 800;
            font-size: 64px;
            line-height: 78px;
            text-align: center;
            color: #FFFFFF;
            padding-bottom: 30px;
            border-bottom: 1px solid #FFF;
          }

          @media(max-width: 1024px) {
            .main {
              padding: 0;
            }

            .banner {
              margin-top: -122px;
              padding: 30px 0 54px;
              width: 100%;
            }

            .banner .bg {
              height: 440px;
            }

            .articles { 
              padding-bottom: 60px;
            }

            .articles .title {
              font-size: 48px;
              line-height: 59px;
              padding-bottom: 49px;
              margin-bottom: 42px;
            }

            .articles .content {
              padding: 0 34px;
            }
          }

          @media(max-width: 500px) {
            .main {
              padding: 0 21px;
              padding-top: 72px;
            }
            
            .banner {
              margin-top: 18px;
              padding: 30px 0 54px;
            }

            .banner .bg {
              height: 324px;
            }

            .articles { 
              padding-bottom: 25px;
            }
            
            .articles .title {
              font-size: 32px;
              line-height: 39px;
              padding-bottom: 28px;
            }

            .articles .content {
              padding: 0 0px;
            }
          }
        `}
      </style>
    </>
  );
};

export default About;