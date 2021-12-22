import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useUpdateOrder } from "../services/order";

const OrderDetailsForm = ({ closeModal, order }) => {
  const { register, handleSubmit } = useForm();

  const { mutateAsync, isSuccess } = useUpdateOrder();

  const onSubmit = (data) => {
    const updateOrderPromise = mutateAsync({ ...data, id: order._id });

    toast.promise(updateOrderPromise, {
      success: "Orden actualizada!",
      loading: "Actualizando orden...",
      error: "No se pudo actualizar la orden.",
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
              defaultValue={order.day}
              className="border border-gray-700 rounded-md"
              type="date"
              id="day"
            />
          </div>
          <div>
            <label className="mr-4" htmlFor="time">
              Hora
            </label>
            <input
              defaultValue={order.time}
              className="border border-gray-700 rounded-md"
              type="time"
              id="time"
            />
          </div>
        </div>
        <div className="mb-5">
          <label className="mr-4" htmlFor="status">
            Estado
          </label>
          <select
            className="rounded-md"
            id="status"
            {...register("status", { required: true })}
          >
            <option value="Guardado">Guardado</option>
            <option value="Entregado">Entregado</option>
            <option value="Cancelado">Cancelado</option>
          </select>
        </div>
        <div className="flex justify-around mb-4">
          <div>
            <label className="mr-2" htmlFor="long">
              Largo
            </label>
            <input
              defaultValue={order.long}
              className="w-10 border border-gray-700 rounded-md"
              type="text"
              id="long"
            />
          </div>
          <div>
            <label className="mr-2" htmlFor="width">
              Ancho
            </label>
            <input
              defaultValue={order.width}
              className="w-10 border border-gray-700 rounded-md"
              type="text"
              id="width"
            />
          </div>
          <div>
            <label className="mr-2" htmlFor="height">
              Alto
            </label>
            <input
              defaultValue={order.height}
              className="w-10 border border-gray-700 rounded-md"
              type="text"
              id="height"
            />
          </div>
          <div>
            <label className="mr-2" htmlFor="weight">
              Peso
            </label>
            <input
              defaultValue={order.weight}
              className="w-10 border border-gray-700 rounded-md"
              type="text"
              id="weight"
            />
          </div>
        </div>
        <div className="flex justify-between mb-2">
          <label className="mr-2" htmlFor="pickAddress">
            Dirección recogida
          </label>
          <input
            defaultValue={order.pickAddress}
            className="border border-gray-700 rounded-md"
            type="text"
            id="pickAddress"
          />
        </div>
        <div className="flex justify-between mb-2">
          <label className="mr-2" htmlFor="pickCity">
            Ciudad recogida
          </label>
          <input
            defaultValue={order.pickCity}
            className="border border-gray-700 rounded-md"
            type="text"
            id="pickCity"
          />
        </div>
        <div className="flex justify-between mb-2">
          <label className="mr-2" htmlFor="receiverName">
            Nombre destinatario
          </label>
          <input
            defaultValue={order.receiverName}
            className="border border-gray-700 rounded-md"
            type="text"
            id="receiverName"
          />
        </div>
        <div className="flex justify-between mb-2">
          <label className="mr-2" htmlFor="receiverId">
            Cédula/Nit destinatario
          </label>
          <input
            defaultValue={order.receiverId}
            className="border border-gray-700 rounded-md"
            type="text"
            id="receiverId"
          />
        </div>
        <div className="flex justify-between mb-2">
          <label className="mr-2" htmlFor="deliveryAddress">
            Dirección entrega
          </label>
          <input
            defaultValue={order.deliveryAddress}
            className="border border-gray-700 rounded-md"
            type="text"
            id="deliveryAddress"
          />
        </div>
        <div className="flex justify-between mb-2">
          <label className="mr-2" htmlFor="deliveryCity">
            Ciudad entrega
          </label>
          <input
            defaultValue={order.deliveryCity}
            className="border border-gray-700 rounded-md"
            type="text"
            id="deliveryCity"
          />
        </div>
        <div className="flex justify-between mb-2">
          <label className="mr-2" htmlFor="senderName">
            Nombre usuario
          </label>
          <input
            defaultValue={order.senderName}
            className="border border-gray-700 rounded-md"
            type="text"
            id="senderName"
          />
        </div>
        <div className="flex justify-between mb-2">
          <label className="mr-2" htmlFor="senderId">
            Cédula/Nit usuario
          </label>
          <input
            defaultValue={order.senderId}
            className="border border-gray-700 rounded-md"
            type="text"
            id="senderId"
          />
        </div>
        <div className="flex justify-between mb-2">
          <p>Carga frágil</p>
          <div>
            <input
              defaultValue={order.fragile ? "Sí" : "No"}
              className="w-10 border border-gray-700 rounded-md"
              type="text"
              name="fragile"
              id="fragile1"
            />
          </div>
        </div>
        <div className="w-full flex justify-center items-center mt-5">
          <button className="px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-md hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Actualizar orden
          </button>
        </div>
      </form>
    </>
  );
};

export { OrderDetailsForm };
