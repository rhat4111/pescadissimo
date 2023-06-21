import React from 'react';
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton'
import { Star } from './Star';

interface Props {
  id: number;
  image: string;
  available: boolean;
  company: string;
  name: string;
  location: string;
  rate: number;
  followingCount: number;
  uriName: string;
}

export const ProductCard: React.FC<Props> = ({
  id,
  image,
  available,
  company,
  name,
  location,
  rate,
  followingCount,
  uriName
}) => {
  return (
    <>
      <div className="card-container">
        <Link href={`/product/${uriName}`}>
          <div className="card" id={`product-${id}`}>
            <div className="body">
              {!image ? <Skeleton height={220} /> : <img src={image} className="bg" />}
              {
                available
                  ? <img src="/shared/product-card/icons/like.svg" className="is-like" />
                  : <img src="/shared/product-card/icons/like-o.svg" className="is-like" />
              }
              <div className="info">
                <div className="logo">logo</div>
                <span>{company}</span>
              </div>
            </div>
            <div className="footer">
              <p className="name">{!name ? <Skeleton count={2} /> : name}</p>
              <div className="detail-info">
                {
                  !name
                    ? <Skeleton />
                    : (
                      <>
                        <span className="location">
                          <img src="/shared/product-card/icons/marker.svg" />
                          <span>{location}</span>
                        </span>
                        <div className="following">
                          <Star rate={rate} max={5} />
                          <span>({followingCount})</span>
                        </div>
                      </>
                    )
                }
              </div>
              <button type="button">Comprar</button>
            </div>
          </div>
        </Link>
      </div>

      <style jsx>
        {`
          .card-container {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .card {
            box-shadow: 0px 2px 11px rgba(0, 0, 0, 0.1);
            max-width: 485px;
            width: 100%;
            background: #FFF;
            border-radius: 24px;
            margin-bottom: 36px;
          }

          .card .body {
            position: relative;
          }

          .card .bg {
            border-radius: 24px 24px 0 0;
            max-height: 220px;
            width: 100%;
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
            font-size: 11px;
            line-height: 13px;
            text-align: center;
            color: #000000;
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
            color: #FFFFFF;
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
            color: #000000;
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
            color: #949494;
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
            color: #000000;
            margin-left: 16px;
          }

          .card .footer button {
            width: 100%;
            height: 42px;
            border-radius: 13px;
            background: #D61016;
            font-family: Montserrat;
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
            text-align: center;
            color: #FFFFFF;
            border: none;
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

            .card .footer button {
              height: 44px;
              border-radius: 6px;
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

            .card .footer button {
              height: 36px;
              border-radius: 10px;
              font-size: 14px;
              line-height: 17px;
            }
          }
        `}
      </style>
    </>
  );
};