import React, { useEffect, useState } from "react";
import "./RestaurantMenuScreen.scss";
import { IonContent, IonPage } from "@ionic/react";
import MenuCard from "../components/menuComponents/MenuCard";
import { useHistory, useParams } from "react-router";
import { getItemsByRestaurantId, getRestaurantById } from "../services/api";
import { ICart, IMenuItems, IRestaurant } from "../interfaces/restaurant";
const RestaurantMenuScreen: React.FC = () => {
  const [restaurantCart, setRestaurantCart] = useState<ICart>();
  const [allRestaurantMenuItems, setAllRestaurantMenuItems] = useState<
    IMenuItems[]
  >([]);
  const [restaurantData,setRestaurantData] = useState<IRestaurant>();
  const { restaurantId } = useParams<{ restaurantId: string }>();
  const history = useHistory();
  useEffect(() => {
    getRestaurantById(restaurantId).then((response)=>{
      setRestaurantData(response);
    }).catch((error) =>{
      console.log(error);
    })

  
    getItemsByRestaurantId(restaurantId)
      .then((response) => {
        setAllRestaurantMenuItems(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    console.log("restuarantCart", restaurantCart);
  }, [restaurantCart]);
   

  const handleAddItemsInCart = (menuItem: IMenuItems) => {
    // console.log(menuItem);
    let newCart: ICart;
    if (restaurantCart ) {
      newCart = {...restaurantCart,items:[...restaurantCart.items]};
    } else {
      newCart = {
        restaurantId: restaurantId,
        items: [],
        totalPrice: 0,
      };
    }
    const isItemInclude = newCart.items.find((item) => {
      return item.itemId === menuItem._id;
    });
    if (isItemInclude) {
      return;
    } else {
      const newCartItem = {
        itemId: menuItem._id,
        price: menuItem.price,
        name: menuItem.name,
        quantity: 1,
        totalItemPrice: menuItem.price,
      };
      newCart.items.push(newCartItem);
      console.log('nnn', newCart);
      
      setRestaurantCart(newCart);
    }
  };
  const handleRemoveItemsFromCart=(menuItemId : string)=>{
    if(restaurantCart){
   const  newCartItems = restaurantCart?.items.filter((cartItem)=>{
       return cartItem.itemId!== menuItemId;
    })
  
  setRestaurantCart((prev) => {
        if (!prev) {
          return prev;
        }
        return {
          ...prev,
          items: newCartItems,
        };
      });}
    }
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="restaurant_menu_screen">
          <div className="menu_header">
            <div
              className="back_button"
              onClick={() => {
                history.goBack();
              }}
            >
              back
            </div>
            <div className="title">{restaurantData?.name}</div>
          </div>
          <div className="menu_body">
            <div className="menu_card_section">
              {allRestaurantMenuItems &&
                allRestaurantMenuItems.map((menuItems, menuItemsIndex) => {

                  const filteredCartItem = restaurantCart?.items.find((cartItem)=>{
                    return cartItem.itemId===menuItems._id
                  })
                  return (
                    <div className="menu_list" key={menuItemsIndex}>
                      <MenuCard
                        addItem={handleAddItemsInCart}
                        itemData={menuItems}
                        isIncluded = {filteredCartItem?true:false}
                        removeItem = {handleRemoveItemsFromCart}
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