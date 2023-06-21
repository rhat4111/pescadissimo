import React, { useState } from 'react';

export const LoginForm: React.FC = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  }

  return (
    <>
      <>
        <label>Inicia sesión</label>
        <input
          type="email"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
          placeholder="Dirección de email"
        />
        <div className="password-container">
          <input
            type="password"
            value={userInfo.password}
            name="password"
            onChange={handleChange}
            placeholder="Contraseña"
          />
          <a className="forgot-password">¿Olvidó su contraseña?</a>
        </div>
        <div className="remember-me">
          <input type="checkbox" />
          <span>Recordarme</span>
        </div>
        <button type="button" className="login-button">Iniciar sesión</button>
      </>
      <style jsx>
        {`
          label {
            margin-bottom: 0;
            font-size: 20px;
            font-weight: 600;
            line-height: 24.5px;
          }

          input {
            margin: 18px 0 6px;
            width: 100%;
            height: 48px;
            background: #FDF3F3;
            border-radius: 4px;
            color: #CD8F8F;
            font-size: 14px;
            padding: 12px;
            border: none;
          }

          input:focus {
            outline: none;
          }

          input::placeholder {
            color: #CD8F8F;
          }

          .password-container {
            position: relative;
          }

          .password-container input {
            padding-right: 180px;
          }

          .password-container .forgot-password {
            position: absolute;
            top: 33px;
            right: 10px;
            font-family: Montserrat;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            color: #D61016;
            cursor: pointer;
          }

          .remember-me {
            display: flex;
            align-items: center;
            margin-top: 6px;
          }

          .remember-me span {
            margin-left: 8px;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            color: #7A7A7A;
          }

          .remember-me input {
            width: 20px;
            height: 20px;
            background: #FFEEEE;
            border-radius: 4px;
            padding: 0;
            margin: 0;
          }

          .login-button {
            width: 100%;
            height: 48px;
            margin-top: 32px;
            background: #D61016;
            border-radius: 4px;
            font-weight: 600;
            font-size: 16px;
            line-height: 20px;
            text-align: center;
            color: #FFFFFF;
            border: none;
          }

          @media(max-width: 1024px) {
            input {
              margin: 15px 0 4px;
              height: 38.5px;
              color: #CD8F8F;
              padding: 9.5px;
            }

            .remember-me input {
              width: 16px;
              height: 16px;
            }

            .password-container .forgot-password {
              top: 26px;
              right: 8px;
            }

            .login-button {
              height: 38.5px;
              font-size: 16px;
              line-height: 20px;
            }
          }
        `}
      </style>
    </>
  );
};