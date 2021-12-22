import { useState } from "react";
import { LoginForm } from "../components/login-form";
import { RegisterForm } from "../components/register-form";

const Login = () => {
  const [form, setForm] = useState(true);

  const handleForm = () => setForm(!form);

  return (
    <div className="border-2 w-screen max-w-2xl bg-blue-400 p-4 rounded-md">
      <p>Gestión de paquetes - Login</p>
      <div
        onClick={handleForm}
        className="mb-4 cursor-pointer w-full flex justify-end"
      >
        <button>{form ? "registrarse" : "login"}</button>
      </div>
      {form ? <LoginForm /> : <RegisterForm />}
    </div>
  );
};

export { Login };
