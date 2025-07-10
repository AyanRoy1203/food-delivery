// src/screens/OrderDetailsScreen.tsx

import React from "react";
import "./OrderDetail.scss";
import { IonPage, IonContent } from "@ionic/react";
import { useHistory } from "react-router";

const OrderDetailsScreen: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonContent className="order_details_page">
        <div className="header">
          <span className="back" onClick={() => history.goBack()}>
            ← Back
          </span>
          <h2>Order Details</h2>
        </div>

        <div className="order_summary_card">
          <h3>Burger Stack House</h3>
          <p>Order #14532</p>
          <img
            src="https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg"
            
          />
          
        </div>

        <div className="order_details_box">
          <div>
            <strong>Delivery Address</strong>
            <p>123, Street Name, City, 560001</p>
          </div>
          <div>
            <strong>Estimated Delivery</strong>
            <p>11:10 - 11:30 AM</p>
          </div>
          <div>
            <strong>Payment Method</strong>
            <p>UPI - Paid</p>
          </div>
          <div>
            <strong>Order Status</strong>
            <p className="status preparing">Being prepared 🍳</p>
          </div>
        </div>

        <button className="home_button" onClick={() => history.push("/home")}>
          Back to Home
        </button>
      </IonContent>
    </IonPage>
  );
};

export default OrderDetailsScreen;
