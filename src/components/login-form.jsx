import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSignIn } from "../services/user";

const LoginForm = () => {
  const { mutateAsync } = useSignIn();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const signInPromise = mutateAsync(data);

    signInPromise
      .then((data) => localStorage.setItem("token", data.token))
      .catch(() => navigate("/"));

    toast.promise(signInPromise, {
      success: "Bienvenido!",
      loading: "Un momento...",
      error: "No se pudo completar, intente nuevamente.",
    });
    navigate("/order-list");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex justify-center items-center h-96"
    >
      <div className="bg-indigo-50 w-96 p-2">
        <div className="flex flex-col mb-10">
          <label htmlFor="user">Correo</label>
          <input
            {...register("email", { required: true })}
            id="user"
            type="email"
          />
          {errors.email && (
            <span className="text-red-800 text-right">
              This field is required
            </span>
          )}
        </div>
        <div className="flex flex-col mb-10">
          <label htmlFor="password">Contraseña</label>
          <input
            {...register("password", { required: true })}
            id="password"
            type="password"
          />
          {errors.password && (
            <span className="text-red-800 text-right">
              This field is required
            </span>
          )}
        </div>
        <div className="w-full flex justify-center items-center mb-4">
          <button className="bg-teal-500 rounded-md w-24 h-10">Login</button>
        </div>
      </div>
    </form>
  );
};

export { LoginForm };
