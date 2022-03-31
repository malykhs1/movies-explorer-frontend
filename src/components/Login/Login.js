import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

export const Login = ({ onLogin }) => {

  const {
    register,
    formState: { errors, isValid },
  } = useForm({
    mode: "all"
  });
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    onLogin({ email, password })
      .then(resetForm)
  };


 

  return (
    <section className="login__container">
      <Link to="/"><img src={logo} alt="Место" className="login__logo" /></Link>
      <h2 className="login__title">Рады вас видеть!</h2>
      <form className="login__form" onSubmit={handleSubmit}>
        <label className="login__label" htmlFor="email">Email</label>
        <input
          {...register("email", {
            required: "Поле обязательно к заполнению! ",
            onChange: (e) => setEmail(e.target.value),
            pattern: { 
              value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Введите реальный адрес электронной почты!"
            },
          })}
          value={email}
          className="login__input"
          name="email"
          type="email"
          required={true}
        />
        <div className="login__errors">
        {errors?.email && <p className="login__error">{errors?.email?.message || "Error"}</p>}
        </div>
        <label className="login__label" htmlFor="password">Пароль</label>
        <input
           {...register("password", {
            onChange: (e) => setPassword(e.target.value),
            required: "Поле обязательно к заполнению!",
            minLength: {
              value: 8,
              message: "Минимум 8 символов",
            },
          })}
          value={password}
          className="login__input"
          name="password"
          type="password"
          required={true}
        />
        <div className="login__errors">
          <div className="login__error">
          {errors?.password && <p>{errors?.password?.message || "Error"}</p>}
          </div>
        </div>
        <button disabled={!isValid} type="submit" className="login__button">
          Войти
        </button>
      </form>
      <div className="login__signin">
        <p className="login__register-link"> Еще не зарегистрированы?</p>
        <Link to="wwww.google.com" className="login__register-link">
          Регистрация
        </Link>
      </div>
    </section>
  );
};

// useEffect(() => {
//   if (emailError || passwordError) {
//     setFormValid(false);
//   } else {
//     setFormValid(true);
//   }
// }, [emailError, passwordError])

// const resetForm = () => {
//   setEmail("");
//   setPassword("");
// };

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   if (!email || !password) {
//     return;
//   }
//   onLogin({ email, password })
//     .then(resetForm)
// };

// const handleEmailChange = (e) => {
// setEmail(e.target.value);
// const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// if (!re.test(String(e.target.value).toLowerCase())) {
//   setEmailError("Укажите корректный адрес электронной почты!")
// } else {
//   setEmailError("")
// }
// }

// const handlePasswordChange = (e) => {
// setPassword(e.target.value);
// if (password.length < 8 ) {
//   setPasswordError("Поле слишком короткое")
// } else {
//   setPasswordError("")
// }
// }

// const blurHandler = (e) => {
//   switch (e.target.name) {
//     case 'email':
//       setEmailDirty(true)
//       break
//     case 'password':
//       setPasswordDirty(true)
//       break
//   }
// }

// const [emailDirty, setEmailDirty] = useState(false);
// const [passwordDirty, setPasswordDirty] = useState(false);
// const [emailError, setEmailError] = useState('Email не может быть пустым');
// const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');
// const [formValid, setFormValid] = useState(false);
