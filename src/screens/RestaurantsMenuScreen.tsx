import { IonContent, IonPage } from "@ionic/react";
import React, { useEffect, useState } from "react";
import "./RestaurantsMenuScreen.scss";
import MenuCard from "../components/menuComponents/MenuCard";
import { useParams } from "react-router";
import { getItemsByRestaurantId } from "../services/api";
import { IMenuItems } from "../interfaces/restaurant";
const RestaurantsMenuScreen: React.FC = () => {
  const [allRestaurantMenuItems, setAllRestaurantMenuItems] = useState<
    IMenuItems[]
  >([]);
  const { restaurantId } = useParams<{ restaurantId: string }>();

  useEffect(() => {
    getItemsByRestaurantId(restaurantId)
      .then((response) => {
        setAllRestaurantMenuItems(response);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <IonPage>
      <IonContent fullscreen>
        <div>
          <div className="restaurant_menu_screen">
            <div className="menu_header">
              <div className="title">Lorem, ipsum dolor</div>
            </div>
            <div className="menu_body">
              <div className="menu_card_section">
                {allRestaurantMenuItems &&
                  allRestaurantMenuItems.map((menuItems, menuItemsIndex) => {
                    return (
                      <div className = "menu_list" key={menuItemsIndex}>
                        <MenuCard itemData={menuItems} />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default RestaurantsMenuScreen;
