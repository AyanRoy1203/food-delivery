import React, { useEffect, useState } from "react";
import "./RestaurantMenuScreen.scss";
import { IonContent, IonPage } from "@ionic/react";
import MenuCard from "../components/menuComponents/MenuCard";
import { useHistory, useParams } from "react-router";
import { getItemsByRestaurantId, getRestaurantById } from "../services/api";
import { ICart, IMenuItems, IRestaurant } from "../interfaces/restaurant";

const RestaurantMenuScreen: React.FC = () => {
  const [restaurantCart, setRestaurantCart] = useState<ICart>();
  const [allRestaurantMenuItems, setAllRestaurantMenuItems] = useState<IMenuItems[]>([]);
  const [restaurantData, setRestaurantData] = useState<IRestaurant>();
  const { restaurantId } = useParams<{ restaurantId: string }>();
  const history = useHistory();

  useEffect(() => {
    if (!restaurantId) return;

    getRestaurantById(restaurantId)
      .then((response: IRestaurant) => {
        setRestaurantData(response);
      })
      .catch((error: unknown) => {
        console.log("Error fetching restaurant data:", error);
      });

    getItemsByRestaurantId(restaurantId)
      .then((response: IMenuItems[]) => {
        setAllRestaurantMenuItems(response);
      })
      .catch((error: unknown) => {
        console.log("Error fetching menu items:", error);
      });
  }, [restaurantId]);

  useEffect(() => {
    console.log("restaurantCart", restaurantCart);
  }, [restaurantCart]);

  const handleAddItemsInCart = (menuItem: IMenuItems) => {
    let newCart: ICart;

    if (restaurantCart) {
      newCart = {
        ...restaurantCart,
        items: [...restaurantCart.items],
        totalPrice: restaurantCart.totalPrice,
      };
    } else {
      newCart = {
        restaurantId: restaurantId,
        items: [],
        totalPrice: 0,
      };
    }

    const isItemIncluded = newCart.items.find((item) => item.itemId === menuItem._id);
    if (isItemIncluded) return;

    const newCartItem = {
      itemId: menuItem._id,
      price: menuItem.price,
      name: menuItem.name,
      quantity: 1,
      totalItemPrice: menuItem.price,
    };

    newCart.items.push(newCartItem);
    newCart.totalPrice += menuItem.price;

    setRestaurantCart(newCart);
  };

  const handleRemoveItemsFromCart = (menuItemId: string) => {
    if (!restaurantCart) return;

    const newCartItems = restaurantCart.items.filter((cartItem) => cartItem.itemId !== menuItemId);
    const newTotal = newCartItems.reduce((sum, item) => sum + item.totalItemPrice, 0);

    setRestaurantCart({
      ...restaurantCart,
      items: newCartItems,
      totalPrice: newTotal,
    });
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="restaurant_menu_screen">
          <div className="menu_header">
            <div className="back_button" onClick={() => history.goBack()}>
              back
            </div>
            <div className="title">{restaurantData ? restaurantData.name : "Loading..."}</div>
          </div>
          <div className="menu_body">
            <div className="menu_card_section">
              {allRestaurantMenuItems.map((menuItem, index) => {
                const isIncluded = restaurantCart?.items.some(
                  (cartItem) => cartItem.itemId === menuItem._id
                );

                return (
                  <div className="menu_list" key={index}>
                    <MenuCard
                      addItem={handleAddItemsInCart}
                      itemData={menuItem}
                      isIncluded={!!isIncluded}
                      removeItem={handleRemoveItemsFromCart}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default RestaurantMenuScreen;
