import React from 'react';
import { useLocation } from 'react-router-dom';
import './OrderScreen.scss';

interface OrderItem {
  name: string;
  price: number;
  quantity: number;
}

interface OrderDetails {
  restaurantName: string;
  items: OrderItem[];
  total: number;
}

const OrderScreen = () => {
  const location = useLocation();
  const orderDetails = location.state as OrderDetails;

  return (
    <div className="order_screen">
      <h2>Order Confirmed 🎉</h2>
      <p>Thank you for ordering from {orderDetails.restaurantName}!</p>
      <h3>Items:</h3>
      <ul>
        {orderDetails.items.map((item, index) => (
          <li key={index}>
            {item.name} x {item.quantity} = ₹{item.price * item.quantity}
          </li>
        ))}
      </ul>
      <h4>Total: ₹{orderDetails.total}</h4>
    </div>
  );
};

export default OrderScreen;
