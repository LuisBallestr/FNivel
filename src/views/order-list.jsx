import { CreateOrderModal } from "../components/create-order-modal";
import { OrderDetailsModal } from "../components/order-details-modal";
import { useGetOrders } from "../services/order";

const OrderList = () => {
  const { data, isLoading } = useGetOrders();

  if (isLoading) {
    return <div className="w-full h-full animate-pulse">Loading...</div>;
  }

  return (
    <div className="border-2 w-screen max-w-2xl bg-blue-400 p-4 rounded-md">
      <p>Gestión de paquetes - Listado de órdenes</p>
      <div className="mb-4 cursor-pointer w-full flex justify-end">
        <CreateOrderModal />
      </div>
      <div className="w-full flex justify-center items-center">
        <table>
          <thead>
            <tr>
              <th className="p-4"># Servicio</th>
              <th className="p-4">Fecha</th>
              <th className="p-4">Ciudad Entrega</th>
              <th className="p-4">Dirección Entrega</th>
              <th className="p-4">Estado</th>
            </tr>
          </thead>
          <tbody>
            {!isLoading && data?.length ? (
              data.map((value, index) => (
                <tr key={value._id}>
                  <td className="text-center p-4">
                    <OrderDetailsModal number={+index + 1} order={value} />
                  </td>
                  <td className="text-center p-4">{value.day}</td>
                  <td className="text-center p-4">{value.deliveryCity}</td>
                  <td className="text-center p-4">{value.deliveryAddress}</td>
                  <td className="text-center p-4">{value.status}</td>
                </tr>
              ))
            ) : (
              <td colSpan={5} className="text-center p-4">
                No hay datos
              </td>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
