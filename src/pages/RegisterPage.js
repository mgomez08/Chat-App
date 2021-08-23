import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../auth/AuthContext";
import { useForm } from "../hooks/useForm";

export const RegisterPage = () => {
  const { register } = useContext(AuthContext);
  const [form, , handleChange] = useForm({
    name: "",
    email: "",
    password: "",
  });
  const allFull = () => {
    return form.name.length > 0 &&
      form.email.length > 0 &&
      form.password.length > 0
      ? true
      : false;
  };
  const submit = async (e) => {
    e.preventDefault();
    const { name, email, password } = form;
    const response = await register(name, email, password);
    if (!response.ok) {
      Swal.fire("Error", response.msg, "error");
    }
  };
  return (
    <form className="form-auth" onSubmit={submit}>
      <h2 className="title-form">Register ChatApp</h2>
      <input
        className="input-name"
        type="text"
        placeholder="Nombre"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        className="input-email"
        type="email"
        placeholder="Correo electrónico"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        className="input-password"
        type="password"
        placeholder="Contraseña"
        name="password"
        value={form.password}
        onChange={handleChange}
      />
      <div className="actions flex-end">
        <Link to="/auth/login">¿Ya tienes una cuenta?</Link>
      </div>
      <button disabled={!allFull()} type="submit" className="button-auth">
        Registrarse
      </button>
    </form>
  );
};
