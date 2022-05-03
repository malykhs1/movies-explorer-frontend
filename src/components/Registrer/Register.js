import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

export const Register = ({ onRegister }) => {

  const {
    register,
    formState: { errors, isValid },
  } = useForm({
    mode: "all"
  });


  const [name, setName] = useState("");
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
    onRegister({ name, email, password })
      .then(resetForm)
  };


  return (
    <section className="register__container">
      <Link to="/"><img src={logo} alt="Место" className="header__logo" /></Link>
      <h2 className="register__title">Welcome</h2>
      <form className="register__form" onSubmit={handleSubmit}>
        <label className="register__label" htmlFor="name">Name</label>
        <input
          {...register("name", {
            required: "The field is required!",
            onChange: (e) => setName(e.target.value),
            minLength: {
              value: 3,
              message: "Minimum 3 characters",
            },
          })}
          value={name}
          className="register__input"
          name="name"
          type="text"
        />
        <div className="register__errors">
            {errors?.name && <p className="register__error">{errors?.name?.message || "Error"}</p>}
        </div>
        <label className="register__label" htmlFor="email">Email</label>
        <input
          {...register("email", {
            required: "The field is required!",
            onChange: (e) => setEmail(e.target.value),
            pattern: { 
              value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Please enter a valid email address!"
            },
          })}
          value={email}
          className="register__input"
          name="email"
          type="email"
        />
        <div className="register__errors">
            {errors?.email && <p className="register__error">{errors?.email?.message || "Error"}</p>}
        </div>
        <label className="register__label" htmlFor="password">Password</label>
        <input
          {...register("password", {
            required: "The field is required!",
            onChange: (e) => setPassword(e.target.value),
            minLength: {
              value: 8,
              message: "Minimum 8 characters",
            },
          })}
          value={password}
          className="register__input"
          name="password"
          type="password"
        />
        <div className="register__errors">
            {errors?.password && <p className="register__error">{errors?.password?.message || "Error"}</p>}
          </div>
        <button type="submit" disabled={!isValid} className="register__button">
          Register
        </button>
      </form>
      <div className="register__signin">
        <p className="register__login-link"> Already registered?</p>
        <Link to="/sign-in" className="register__login-link">
          Log in 
        </Link>
      </div>
    </section>
  );
};
