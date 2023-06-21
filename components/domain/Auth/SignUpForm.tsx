import { useState } from "react";

export const SignUpForm = () => {
  const [signupInfo, setSignupInfo] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setSignupInfo({ ...signupInfo, [e.target.name]: e.target.value });
  };

  return (
    <>
      <>
        <label>Regístrate </label>
        <input
          type="email"
          placeholder="Dirección de email"
          name="email"
          value={signupInfo.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Contraseña"
          name="password"
          value={signupInfo.password}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Confirmar Contraseña"
          name="confirmPassword"
          value={signupInfo.confirmPassword}
          onChange={handleChange}
        />
        <div className="rememberMe">
          <input type="checkbox" />
          <span>Acepto los Términos, <span className="red">Aviso Legal </span> y<span className="red">Política de Privacidad</span></span>
        </div>
        <button type="button" className="loginButton">Registrarme</button>
      </>

      <style jsx>
        {`
          label {
            font-weight: Montserrat;
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
              font-family: Montserrat;
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

          .passwordContainer {
            position: relative;
          }

          .passwordContainer input {
            padding-right: 180px;
          }

          .passwordContainer .forgotPassword {
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

          .rememberMe {
            display: flex;
            align-items: center;
            margin-top: 6px;
          }

          .rememberMe span {
            margin-left: 8px;
            font-family: Montserrat;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            color: #7A7A7A;
          }

          .rememberMe input {
            width: 20px;
            height: 20px;
            background: #FFEEEE;
            border-radius: 4px;
            padding: 0;
            margin: 0;
          }

          .loginButton {
            width: 100%;
            height: 48px;
            margin-top: 32px;
            background: #D61016;
            border-radius: 4px;
            font-family: Montserrat;
            font-style: normal;
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

            .rememberMe input {
              width: 16px;
              height: 16px;
            }

            .passwordContainer .forgotPassword {
              top: 26px;
              right: 8px;
            }

            .registerButton {
              height: 38.5px;
              font-size: 16px;
              line-height: 20px;
              margin-bottom: 46px;
            }
          }
        `}
      </style>
    </>
  );
};