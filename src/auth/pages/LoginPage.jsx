import { useState } from "react";
import { useAuthStore } from "../../hooks";
import "./LoginPage.css";

export const LoginPage = () => {
  const { startLogin, startRegister } = useAuthStore();

  const [loginForm, setLoginForm] = useState({
    loginEmail: "",
    loginPassword: "",
  });

  const [registerForm, setRegisterForm] = useState({
    registerName: "",
    registerEmail: "",
    registerPassword: "",
    registerPassword2: "",
  });

  const onLoginInputChanged = ({ target }) => {
    setLoginForm({
      ...loginForm,
      [target.name]: target.value,
    });
  };

  const onRegisterInputChanged = ({ target }) => {
    setRegisterForm({
      ...registerForm,
      [target.name]: target.value,
    });
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    startLogin({
      email: loginForm.loginEmail,
      password: loginForm.loginPassword,
    });
  };

  const registerSubmit = (e) => {
    e.preventDefault();
    if (registerForm.registerPassword !== registerForm.registerPassword2) {
      alert("Las contraseñas no coinciden");
      return;
    }
    startRegister({
      name: registerForm.registerName,
      email: registerForm.registerEmail,
      password: registerForm.registerPassword,
    });
  };

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>Ingreso</h3>
          <form onSubmit={loginSubmit}>
            <div className="form-group mb-2">
              <input
                type="email"
                className="form-control"
                placeholder="Correo"
                name="loginEmail"
                value={loginForm.loginEmail}
                onChange={onLoginInputChanged}
                required
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="loginPassword"
                value={loginForm.loginPassword}
                onChange={onLoginInputChanged}
                required
              />
            </div>
            <div className="form-group mb-2 d-grid">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
          </form>
        </div>

        <div className="col-md-6 login-form-2">
          <h3>Registro</h3>
          <form onSubmit={registerSubmit}>
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                name="registerName"
                value={registerForm.registerName}
                onChange={onRegisterInputChanged}
                required
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="email"
                className="form-control"
                placeholder="Correo"
                name="registerEmail"
                value={registerForm.registerEmail}
                onChange={onRegisterInputChanged}
                required
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="registerPassword"
                value={registerForm.registerPassword}
                onChange={onRegisterInputChanged}
                required
              />
            </div>

            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Repita la contraseña"
                name="registerPassword2"
                value={registerForm.registerPassword2}
                onChange={onRegisterInputChanged}
                required
              />
            </div>

            <div className="form-group mb-2 d-grid">
              <input type="submit" className="btnSubmit" value="Crear cuenta" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
