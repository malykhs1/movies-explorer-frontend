  /* eslint-disable default-case */
  import React, { useEffect, useState } from "react";
  import { Link } from "react-router-dom";
  import { UseInput } from "../../utils/Validations";
  import logo from "../../images/logo.svg";

  export const Register = () => {
    const name = UseInput('', { isEmpty: true, minLength: 3 });
    const email = UseInput('', { isEmpty: true, minLength: 3, isEmail: true });
    const password = UseInput('', { isEmpty: true, minLength: 5 });

    return (
      <section className="register">
      <div className="register__container">
        <Link to="/"><img src={logo} alt="Место" className="register__logo" /></Link>
        <h2 className="register__title">Добро пожаловать!</h2>
        <form className="register__form">
          <label className="register__label" htmlFor="name">Имя</label>
          <input
            onChange={e => name.onChange(e)}
            onBlur={e => name.onBlur(e)}
            value={name.value}
            id="name"
            className="register__input"
            name="name"
            type="text"
          />
          <div className="register__errors">
            {(name.isDirty && name.isEmpty) && <div className="register__error">Поле не может быть пустым!</div>}
            {(name.isDirty && name.minLengthError) && <div className="register__error">Некорректная длина поля!</div>}
          </div>
          <label className="register__label" htmlFor="email">Email</label>
          <input
            onChange={e => email.onChange(e)}
            onBlur={e => email.onBlur(e)}
            value={email.value}
            id="email"
            className="register__input"
            name="email"
            type="email"
          />
          <div className="register__errors">
            {(email.isDirty && email.isEmpty && email.minLengthError && email.emailError) && <div className="register__error">Что-то пошло не так!</div>}
            {(email.isDirty && email.minLengthError) && <div className="register__error">Некорректная длина поля!</div>}
            {(email.isDirty && email.emailError) && <div className="register__error">Email указан некорректно!</div>}
          </div>
          <label className="register__label" htmlFor="password">Пароль</label>
          <input
            onChange={e => password.onChange(e)}
            onBlur={e => password.onBlur(e)}
            value={password.value}
            id="password"
            className="register__input"
            name="password"
            type="password"
          />
          <div className="register__errors">
            {(password.isDirty && password.isEmpty) && <div className="register__error">Поле не может быть пустым!</div>}
            {(password.isDirty && password.minLengthError) && <div className="register__error">Некорректная длина поля!</div>}
          </div>
          <button type="submit" className="register__button">
            Зарегистрироваться
          </button>
        </form>
        <div className="register__signin">
          <p className="register__login-link"> Уже зарегистрированы?</p>
          <Link to="/sign-in" className="register__login-link">
            Войти
          </Link>
        </div>
        </div>
      </section>
    );
  };

