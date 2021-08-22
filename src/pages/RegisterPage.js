import React from "react";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <form className="form-auth">
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
      <button className="button-auth">Registrarse</button>
    </form>
  );
};
