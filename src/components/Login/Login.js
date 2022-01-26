import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import { UseInput } from "../../utils/Validations";


export const Login = () => {
  const email = UseInput('', { isEmpty: true, minLength: 3, isEmail: true });
  const password = UseInput('', { isEmpty: true, minLength: 5 });


  return (
    <section className="login">
    <div className="login__container">
      <Link to="/"><img src={logo} alt="Место" className="login__logo" /></Link> 
      <h2 className="login__title">Рады вас видеть!</h2>
      <form className="login__form">
        <label className="login__label" htmlFor="email">Email</label>
        <input
          onChange={e => email.onChange(e)}
          onBlur={e => email.onBlur(e)}
          value={email.value}
          id="email"
          className="login__input"
          name="email"
          type="email"
        />
        <div className="login__errors">
          {(email.isDirty && email.isEmpty && email.minLengthError && email.emailError) && <div className="login__error">Что-то пошло не так!</div>}
          {(email.isDirty && email.minLengthError) && <div className="login__error">Некорректная длина поля!</div>}
          {(email.isDirty && email.emailError) && <div className="login__error">Email указан некорректно!</div>}
        </div>
        <label className="login__label" htmlFor="password">Пароль</label>
        <input
          onChange={e => password.onChange(e)}
          onBlur={e => password.onBlur(e)}
          value={password.value}
          id="password"
          className="login__input"
          name="password"
          type="password"
        />
        <div className="login__errors">
          {(password.isDirty && password.isEmpty) && <div className="login__error">Поле не может быть пустым!</div>}
          {(password.isDirty && password.minLengthError) && <div className="login__error">Некорректная длина поля!</div>}
        </div>
        <button type="submit" className="login__button">
          Войти
        </button>
      </form>
      <div className="login__signin">
        <p className="login__register-link"> Еще не зарегистрированы?</p>
        <Link to="/sign-up" className="login__register-link">
          Регистрация
        </Link>
      </div>
      </div>
    </section>
  );
};

