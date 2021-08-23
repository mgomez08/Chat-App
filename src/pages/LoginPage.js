import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import Swal from "sweetalert2";
import { useForm } from "../hooks/useForm";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [form, setForm, handleChange] = useForm({
    email: "test@test.com",
    password: "1231234",
    rememberme: false,
  });
  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      setForm((form) => ({
        ...form,
        email,
        rememberme: true,
      }));
    }
    // eslint-disable-next-line
  }, []);
  const toggleCheck = () => {
    setForm({
      ...form,
      rememberme: !form.rememberme,
    });
  };
  const allFull = () => {
    return form.email.length > 0 && form.password.length > 0 ? true : false;
  };
  const submit = async (e) => {
    e.preventDefault();
    form.rememberme
      ? localStorage.setItem("email", form.email)
      : localStorage.removeItem("email", form.email);
    const { email, password } = form;
    const response = await login(email, password);
    if (!response.ok) {
      Swal.fire("Error", response.msg, "error");
    }
  };
  return (
    <form className="form-auth" onSubmit={submit}>
      <h2 className="title-form">Login ChatApp</h2>
      <input
        className="input-email"
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={form.email}
        onChange={handleChange}
      />
      <input
        className="input-password"
        type="password"
        name="password"
        placeholder="Contraseña"
        value={form.password}
        onChange={handleChange}
      />
      <div className="actions">
        <div className="checkbox-container" onClick={() => toggleCheck()}>
          <input
            name="rememberme"
            type="checkbox"
            id="rememberme"
            checked={form.rememberme}
            onChange={handleChange}
          />
          <label className="remember" htmlFor="remember">
            Recordarme
          </label>
        </div>
        <Link to="/auth/register">¿Nueva cuenta?</Link>
      </div>
      <button disabled={!allFull()} type="submit" className="button-auth">
        Ingresar
      </button>
    </form>
  );
};
