import React from "react";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  const submit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="form-auth" onSubmit={submit}>
      <h2 className="title-form">Register ChatApp</h2>
      <input className="input-name" type="text" placeholder="Nombre" />
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
      <div className="actions flex-end">
        <Link to="/auth/login">¿Ya tienes una cuenta?</Link>
      </div>
      <button className="button-auth">
        <Link to="/auth/login">Registrarse</Link>
      </button>
    </form>
  );
};
