import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useCreateOrder } from "../services/order";

const CreateOrderForm = ({ closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutateAsync, isSuccess } = useCreateOrder();

  const onSubmit = (data) => {
    const createOrderPromise = mutateAsync({
      ...data,
      status: "Creado",
      fragile: !!data.fragile,
    });

    toast.promise(createOrderPromise, {
      success: "Orden creada!",
      loading: "Creadon orden...",
      error: "No se pudo crear la orden.",
    });
  };

  useEffect(() => {
    if (isSuccess) {
      closeModal();
    }
  }, [isSuccess, closeModal]);

  return (
    <>
      <p>Gestión paquetes - Registro Órdenes (recogida)</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 mt-4 border-2 border-gray-700 rounded-md"
      >
        <div className="flex justify-between mb-4">
          <div>
            <label className="mr-4" htmlFor="day">
              Fecha
            </label>
            <input
              {...register("day", { required: true })}
              className="border border-gray-700 rounded-md"
              type="date"
              id="day"
            />
            {errors.day && (
              <span className="text-red-800 text-right">
                This field is required
              </span>
            )}
          </div>
          <div>
            <label className="mr-4" htmlFor="time">
              Hora
            </label>
            <input
              {...register("time", { required: true })}
              className="border border-gray-700 rounded-md"
              type="time"
              id="time"
            />
            {errors.time && (
              <span className="text-red-800 text-right">
                This field is required
              </span>
            )}
          </div>
        </div>
        <div className="flex justify-around mb-4">
          <div>
            <label className="mr-2" htmlFor="long">
              Largo
            </label>
            <input
              {...register("long", { required: true })}
              className="w-10 border border-gray-700 rounded-md"
              type="text"
              id="long"
            />
            {errors.long && (
              <span className="text-red-800 text-right">
                This field is required
              </span>
            )}
          </div>
          <div>
            <label className="mr-2" htmlFor="width">
              Ancho
            </label>
            <input
              {...register("width", { required: true })}
              className="w-10 border border-gray-700 rounded-md"
              type="text"
              id="width"
            />
            {errors.width && (
              <span className="text-red-800 text-right">
                This field is required
              </span>
            )}
          </div>
          <div>
            <label className="mr-2" htmlFor="height">
              Alto
            </label>
            <input
              {...register("height", { required: true })}
              className="w-10 border border-gray-700 rounded-md"
              type="text"
              id="height"
            />
            {errors.height && (
              <span className="text-red-800 text-right">
                This field is required
              </span>
            )}
          </div>
          <div>
            <label className="mr-2" htmlFor="weight">
              Peso
            </label>
            <input
              {...register("weight", { required: true })}
              className="w-10 border border-gray-700 rounded-md"
              type="text"
              id="weight"
            />
            {errors.weight && (
              <span className="text-red-800 text-right">
                This field is required
              </span>
            )}
          </div>
        </div>
        <div className="flex justify-between mb-2">
          <label className="mr-2" htmlFor="pickAddress">
            Dirección recogida
          </label>
          <input
            {...register("pickAddress", { required: true })}
            className="border border-gray-700 rounded-md"
            type="text"
            id="pickAddress"
          />
          {errors.pickAddress && (
            <span className="text-red-800 text-right">
              This field is required
            </span>
          )}
        </div>
        <div className="flex justify-between mb-2">
          <label className="mr-2" htmlFor="pickCity">
            Ciudad recogida
          </label>
          <input
            {...register("pickCity", { required: true })}
            className="border border-gray-700 rounded-md"
            type="text"
            id="pickCity"
          />
          {errors.pickCity && (
            <span className="text-red-800 text-right">
              This field is required
            </span>
          )}
        </div>
        <div className="flex justify-between mb-2">
          <label className="mr-2" htmlFor="receiverName">
            Nombre destinatario
          </label>
          <input
            {...register("receiverName", { required: true })}
            className="border border-gray-700 rounded-md"
            type="text"
            id="receiverName"
          />
          {errors.receiverName && (
            <span className="text-red-800 text-right">
              This field is required
            </span>
          )}
        </div>
        <div className="flex justify-between mb-2">
          <label className="mr-2" htmlFor="receiverId">
            Cédula/Nit destinatario
          </label>
          <input
            {...register("receiverId", { required: true })}
            className="border border-gray-700 rounded-md"
            type="text"
            id="receiverId"
          />
          {errors.receiverId && (
            <span className="text-red-800 text-right">
              This field is required
            </span>
          )}
        </div>
        <div className="flex justify-between mb-2">
          <label className="mr-2" htmlFor="deliveryAddress">
            Dirección entrega
          </label>
          <input
            {...register("deliveryAddress", { required: true })}
            className="border border-gray-700 rounded-md"
            type="text"
            id="deliveryAddress"
          />
          {errors.deliveryAddress && (
            <span className="text-red-800 text-right">
              This field is required
            </span>
          )}
        </div>
        <div className="flex justify-between mb-2">
          <label className="mr-2" htmlFor="deliveryCity">
            Ciudad entrega
          </label>
          <input
            {...register("deliveryCity", { required: true })}
            className="border border-gray-700 rounded-md"
            type="text"
            id="deliveryCity"
          />
          {errors.deliveryCity && (
            <span className="text-red-800 text-right">
              This field is required
            </span>
          )}
        </div>
        <div className="flex justify-between mb-2">
          <label className="mr-2" htmlFor="senderName">
            Nombre usuario
          </label>
          <input
            {...register("senderName", { required: true })}
            className="border border-gray-700 rounded-md"
            type="text"
            id="senderName"
          />
          {errors.senderName && (
            <span className="text-red-800 text-right">
              This field is required
            </span>
          )}
        </div>
        <div className="flex justify-between mb-2">
          <label className="mr-2" htmlFor="senderId">
            Cédula/Nit usuario
          </label>
          <input
            {...register("senderId", { required: true })}
            className="border border-gray-700 rounded-md"
            type="text"
            id="senderId"
          />
          {errors.senderId && (
            <span className="text-red-800 text-right">
              This field is required
            </span>
          )}
        </div>
        <div className="flex justify-between mb-2">
          <p>Carga frágil</p>
          <div>
            <label className="mr-2" htmlFor="fragile1">
              Sí
            </label>
            <input
              {...register("fragile", { required: true })}
              className="w-10 border border-gray-700 rounded-md"
              type="radio"
              name="fragile"
              id="fragile1"
            />
            {errors.fragile && (
              <span className="text-red-800 text-right">
                This field is required
              </span>
            )}
          </div>
          <div>
            <label className="mr-2" htmlFor="fragile2">
              No
            </label>
            <input
              {...register("fragile", { required: true })}
              className="w-10 border border-gray-700 rounded-md"
              type="radio"
              name="fragile"
              id="fragile2"
            />
            {errors.fragile && (
              <span className="text-red-800 text-right">
                This field is required
              </span>
            )}
          </div>
        </div>
        <div className="w-full flex justify-center items-center mt-5">
          <button className="px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-md hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Crear orden
          </button>
        </div>
      </form>
    </>
  );
};

export { CreateOrderForm };
