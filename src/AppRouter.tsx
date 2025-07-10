import { IonRouterOutlet } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import RestaurantMenuScreen from './screens/RestaurantsMenuScreen'
import CartScreen from './screens/CartScreen'

import OrderScreen from './screens/OrderScreen';
import OrderDetail from './screens/OrderDetail'
// ...


const AppRouter = () => {
  return (
    <>
      <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <HomeScreen />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route  exact path="/restaurant-menu/:restaurantId">
        <RestaurantMenuScreen/>
        </Route>
         <Route  exact path="/cart-screen">
        <CartScreen/>
        </Route>
        <Route  exact path="/order-screen">
        <OrderScreen/>
        </Route>
        <Route  exact path="/order-detail">
        <OrderDetail/>
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
    </>
  )
}

export default AppRouter
