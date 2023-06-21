import React, { useState } from 'react';
import Link from 'next/link';
import useOnclickOutside from 'react-cool-onclickoutside';

interface Props {
  logoColor?: String,
  textColor?: String
}

const Header: React.FC<Props> = ({
  logoColor = "dark",
  textColor = "dark"
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const handleOpen = () => {
    setIsOpened(!isOpened);
  }

  const ref = useOnclickOutside(() => {
    setIsOpened(false);
  })

  return (
    <>
      <div className="header">
        <div className="logo">
          <Link href="./">
            {
              logoColor === 'white'
                ? <img src="/layouts/header/logo/white.png" />
                : <img src="/layouts/header/logo/dark.png" />
            }
          </Link>
        </div>
        <div className={`menus ${textColor === 'white' ? 'white' : 'dark'}`}>
          <ul>
            <li onClick={handleOpen} ref={ref}>
              <a>Productos</a>
              {
                isOpened &&
                <ul className="sub-menu">
                  <li><Link href="/buy/fish">Pescados</Link></li>
                  <li><Link href="/buy/seafood">Mariscos</Link></li>
                </ul>
              }
            </li>
            <li><Link href="./sellers">Nuestros vendedores</Link></li>
            <li><Link href="./become">Conviértete en vendedor</Link></li>
            <li><Link href="./about">Quienes somos</Link></li>
          </ul>
        </div>
        <div className={`actions ${textColor === 'white' ? 'white' : 'dark'}`}>
          <button type="button">
            <img src="/layouts/header/icons/heart-white.svg" className="white-icon" />
            <img src="/layouts/header/icons/heart-dark.svg" className="dark-icon" />
          </button>
          <button type="button">
            <img src="/layouts/header/icons/search-white.svg" className="white-icon" />
            <img src="/layouts/header/icons/search-dark.svg" className="dark-icon" />
          </button>
          <button type="button">
            <img src="/layouts/header/icons/bag-white.svg" className="white-icon" />
            <img src="/layouts/header/icons/bag-dark.svg" className="dark-icon" />
          </button>
          <button type="button">
            <Link href="./auth?type=login">
              <div>
                <img src="/layouts/header/icons/user-white.svg" className="white-icon" />
                <img src="/layouts/header/icons/user-dark.svg" className="dark-icon" />
              </div>
            </Link>
          </button>
        </div>
      </div>

      <div className="mobileHeader">
        <ul>
          <li>
            <img src="/layouts/header/icons/menu.svg" />
            Menú
          </li>
          <li>
            <img src="/layouts/header/icons/search.svg" />
            Buscar
          </li>
          <li>
            <img src="/layouts/header/icons/bag.svg" />
            Cesta
          </li>
          <li>
            <img src="/layouts/header/icons/user.svg" />
            Perfil
          </li>
        </ul>
      </div>
      <style jsx>
        {`
          .sub-menu {
            position: absolute;
            top: 40px;
            background: #FFF;
            transform: translate(-35px, 0);
            display: flex;
            width: 150px;
            height: 90px;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            border-radius: 5px;
            padding-left: 0;
            box-shadow: 0 0 10px #00000020;
          }

          .sub-menu:after {
            content:'';
            position: absolute;
            top: -10px;
            left: 0;
            right: 0;
            margin: 0 auto;
            width: 0;
            height: 0;
            border-bottom: 10px solid #FFF;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
          }
          
          .sub-menu li {
            width: 100%;
            text-align: center;
            padding: 10px;
            color: #000!important; 
            margin-left: 0!important;
          }

          .mobileHeader {
            display: none;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 80px;
            position: fixed;
            z-index: 1000;
            background: #FFF;
            bottom: 0;
          }
            
          .mobileHeader ul {
            width: 616px;
            height: 100%;
            padding: 0 33px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0;
          }

          .mobileHeader ul li {
            position: relative;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            list-style-type: none;
            font-size: 11px;
            line-height: 13px;
            text-align: center;
            color: #000000;
          }

          .mobileHeader ul li img {
            margin-bottom: 8px;
          }

          .header {
            width: 100%;
            height: 92px;
            padding: 0 57px;
            position: relative;
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .header .logo {
            cursor: pointer;
          }

          .header .menus ul {
            display: flex;
            margin: 0;
          }
          
          .header .menus ul li {
            position: relative;
            list-style-type: none;
            margin-left: 32px;
            font-family: Montserrat;
            font-size: 16px;
            line-height: 19.5px;
            font-weight: 500;
            cursor: pointer;
          }

          .header .menus.white ul li {
            color: #FFF;
          }

          .header .menus.dark ul li {
            color: #000;
          }


          .header .actions.white .white-icon {
            display: inline;
          }

          .header .actions.white .dark-icon {
            display: none;
          }

          .header .actions.dark .white-icon {
            display: none;
          }

          .header .actions.dark .dark-icon {
            display: inline;
          }
          .header .action.dark ul li {
            color: #000;
          }

          .header .actions button {
            padding: 0;
            background: none;
            border: none;
            margin-left: 22px;
            transition: 0.2s;
            cursor: pointer;
          }
          .header button:hover {
            opacity: 0.5;
          }

          .header button:focus {
            outline: none;
          }

          @media(max-width: 1200px) {
            .header .menus ul {
              padding-left: 0!important;
            }

            .header .menus li {
              margin-left: 15px!important;
            }

            .header .actions button {
              margin-left: 8px;
            }
          }

          @media(max-width: 1024px) {
            .mobileHeader {
              display: flex;
            }
            .header {
              padding: 0 54px;
            }
            .header .menus, .header .actions {
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}

export default Header;