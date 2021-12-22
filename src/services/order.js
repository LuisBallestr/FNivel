import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";

const ORDER_KEY = "orders";
const GET_ORDERS_ENDPOINT = "http://localhost:4000/order/";
const CREATE_ORDER_ENDPOINT = "http://localhost:4000/order/create-order";
const UPDATE_ORDER_ENDPOINT = "http://localhost:4000/order/update-order";

const token = localStorage.getItem("token") || "";

const useGetOrders = () => {
  const queryResult = useQuery(ORDER_KEY, async () => {
    const response = await axios.get(GET_ORDERS_ENDPOINT, {
      headers: {
        ...Headers,
        authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  });

  return queryResult;
};

const useCreateOrder = () => {
  const queryClient = useQueryClient();

  const mutationResult = useMutation(
    async (data) => {
      const response = await axios.post(
        CREATE_ORDER_ENDPOINT,
        { ...data },
        {
          headers: {
            ...Headers,
            authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    },
    {
      onSuccess: () => queryClient.invalidateQueries(ORDER_KEY),
    }
  );

  return mutationResult;
};

const useUpdateOrder = () => {
  const queryClient = useQueryClient();

  const mutationResult = useMutation(
    async (data) => {
      const response = await axios.patch(
        UPDATE_ORDER_ENDPOINT,
        { data },
        {
          headers: {
            ...Headers,
            authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    },
    {
      onSuccess: () => queryClient.invalidateQueries(ORDER_KEY),
    }
  );

  return mutationResult;
};

export { useGetOrders, useCreateOrder, useUpdateOrder };
