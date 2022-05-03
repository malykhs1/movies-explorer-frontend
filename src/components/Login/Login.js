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
      <h2 className="login__title">We are glad to see you!</h2>
      <form className="login__form" onSubmit={handleSubmit}>
        <label className="login__label" htmlFor="email">Email</label>
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
          className="login__input"
          name="email"
          type="email"
          required={true}
        />
        <div className="login__errors">
        {errors?.email && <p className="login__error">{errors?.email?.message || "Error"}</p>}
        </div>
        <label className="login__label" htmlFor="password">Password</label>
        <input
           {...register("password", {
            onChange: (e) => setPassword(e.target.value),
            required: "The field is required!",
            minLength: {
              value: 8,
              message: "Minimum 8 characters",
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
          Log in
        </button>
      </form>
      <div className="login__signin">
        <p className="login__register-link">Not registered yet?</p>
        <Link to="/sign-up" className="login__register-link">
          Register
        </Link>
      </div>
    </section>
  );
};