import React from "react";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  const submit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="form-auth" onSubmit={submit}>
      <h2 className="title-form">Login ChatApp</h2>
      <input
        className="input-email"
        type="email"
        placeholder="Correo electrónico"
      />
      <input
        className="input-password"
        type="password"
        placeholder="Contraseña"
      />
      <div className="actions">
        <div className="checkbox-container">
          <input type="checkbox" id="remember" />
          <label className="remember" for="remember">
            Recordarme
          </label>
        </div>
        <Link to="/auth/register">¿Nueva cuenta?</Link>
      </div>
      <button className="button-auth">
        <Link to="/">Ingresar</Link>
      </button>
    </form>
  );
};
