// src/screens/OrderScreen.tsx

import React from "react";
import "./OrderScreen.scss";
import { IonContent, IonPage } from "@ionic/react";
import { useHistory } from "react-router";

const OrderScreen: React.FC = () => {
  const history = useHistory();

  const handleViewOrder = () => {
  history.push("/order-detail"); 
};


  return (
    <IonPage>
      <IonContent className="order_page">
        <header className="order_page__header">
          <div className="order_page__logo">
            <h3>Urban Thai Delight</h3>
          </div>
        </header>

        <main className="order_card">
          <h2>Your orders</h2>
          <div className="order_card__box">
            <img
              src="https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg"
              className="order_card__img"
            />
            <div className="order_card__info">
              <h3>Pad Thai Noodles</h3>
              <p className="delivery_time">
                Estimated delivery time: <span>11:10 - 11:30</span>
              </p>
              <p className="order_details">1 item · ₹180</p>
            </div>
          </div>

          <button className="view_order_btn" onClick={handleViewOrder}>
            View order
          </button>
        </main>

        
      </IonContent>
    </IonPage>
  );
};

export default OrderScreen;
