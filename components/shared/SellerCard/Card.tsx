import React from 'react';
import { Star } from './Star';
import ReactHtmlParser from "react-html-parser";

interface Props {
  _id: number;
  avatar: string;
  isLike: boolean;
  name: string;
  location: string;
  rate: number;
  followingCount: number;
  description: string;
}

export const SellerCard: React.FC<Props> = ({
  _id,
  avatar,
  isLike,
  name,
  location,
  rate,
  followingCount,
  description
}) => {
  return (
    <>
      <div className="card-container">
        <div className="card" id={`product-${_id}`}>
          <div className="body">
            <img src={avatar} className="bg" />
            {
              isLike
                ? <img src="/shared/product-card/icons/like.svg" className="is-like" />
                : <img src="/shared/product-card/icons/like-o.svg" className="is-like" />
            }
            <div className="info">
              <div className="logo">logo</div>
              <span>{name}</span>
            </div>
          </div>
          <div className="footer">
            <div className="detail-info">
              <span className="location">
                <img src="/shared/product-card/icons/marker.svg" />
                <span>{location}</span>
              </span>
              <div className="following">
                <Star rate={rate} max={5} />
                <span>({followingCount})</span>
              </div>
            </div>
            <div className="description">{ReactHtmlParser(description)}</div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .card-container {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .card {
            max-width: 485px;
            width: 100%;
            background: #2E2E2E;
            border-radius: 24px;
            margin-bottom: 36px;
            color: #FFF;
          }

          .card .body {
            position: relative;
            height: 250px;
          }

          .card .bg {
            border-radius: 24px 24px 0 0;
            width: 100%;
            height: 100%;
          }

          .card .is-like {
            position: absolute;
            top: 20px;
            right: 46px;
          }

          .card .info {
            position: absolute;
            left: 46px;
            bottom: 8px;
            display: flex;
            align-items: center;
          }

          .card .info .logo {
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: Montserrat;
            font-style: normal;
            font-weight: 500;
            color: #000;
            font-size: 11px;
            line-height: 13px;
            text-align: center;
            background: #FFF;
            border-radius: 18px;
          }

          .card .info span {
            margin-left: 8px;
            font-family: Montserrat;
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 20px;
            text-shadow: 0px 1px 3px #858585;
          }

          .card .footer {
            padding: 18px 45px 23px;
          }

          .card .footer .name {
            font-family: Montserrat;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            margin-bottom: 16px;
          }

          .card .footer .detail-info {
            display: flex;
            justify-content: space-between;
          }

          .card .footer .detail-info .location span {
            margin-left: 9px;
            font-family: Montserrat;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
          }

          .card .footer .detail-info .following {
            display: flex;
            align-items: center;
          }

          .card .footer .detail-info .following span {
            margin-left: 4.5px;
            font-family: Montserrat;
            font-style: normal;
            font-weight: 500;
            font-size: 13px;
            line-height: 16px;
            text-align: right;
            margin-left: 16px;
          }
          @media(max-width: 1024px) {
            .card .isLike {
              top: 20px;
              right: 30px;
            }

            .card .info {
              left: 30px;
            }

            .card .info span {
              font-size: 14px;
              line-height: 17px;
            }

            .card .footer {
              padding: 18px 27px 20px;
            }
          }

          @media(max-width: 958px) {
            .card .isLike {
              top: 28px;
              right: 28px;
            }

            .card .info {
              left: 26px;
              bottom: 12px;
            }

            .card .info span {
              font-size: 12px;
              line-height: 15px;
            }

            .card .footer {
              padding: 8px 25px 15px;
            }

            .card .footer .detail-info .location span {
              margin-left: 6px;
              font-size: 10px;
              line-height: 12px;
            }

            .card .footer .detail-info .following span {
              margin-left: 6px;
              font-size: 10px;
              line-height: 12px;
            }
          }
        `}
      </style>
    </>
  );
};