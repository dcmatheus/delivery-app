import axiosAPI from './request';

export const createOrder = async ({ token, body }) => {
  try {
    const order = await axiosAPI.post(
      '/orders',
      body,
      {
        headers: {
          authorization: token,
        },
      },
    );

    return order.data;
  } catch (error) {
    return { error };
  }
};
export async function getOrderById(id, token) {
  try {
    const orderById = await axiosAPI.get(`/orders/${id}`,
      {
        headers: {
          authorization: token,
        },
      });
    console.log(orderById.data);
    return orderById.data;
  } catch (error) {
    return { error };
  }
}
// PARAMS = QUERY
// Corrigir bug?????
// Feito para ser genérico funciona com { seller_id: } ou { user_id: }
export const getOrders = async ({ token, body }) => {
  try {
    const order = await axiosAPI.get(
      '/orders',
      {
        params: body,
        headers: {
          authorization: token,
        },
      },
    );
    return order.data;
  } catch (error) {
    return { error };
  }
};
