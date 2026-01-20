import { useEffect, useState } from "react";
import { getMyOrders } from "../api/orderApi";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getMyOrders().then((res) => setOrders(res.data));
  }, []);

  return (
    <div className="container">
      <h2>📦 Mes commandes</h2>

      {orders.map((order) => (
        <div key={order.orderId} className="order-card">
          <p>Status : {order.status}</p>
          <p>Total : {order.totalAmount} €</p>

          <ul>
            {order.items.map((item) => (
              <li key={item.bookId}>
                {item.title} x {item.quantity}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
  
}
