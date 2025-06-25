import { IonContent,IonPage } from '@ionic/react';

import './HomeScreen.scss';
import FilterComponents from '../components/HomeComponents/FilterComponents';
import HomeBanner from '../components/HomeComponents/HomeBanner';
import RestaurantCard from '../components/HomeComponents/RestaurantCard';
import { useEffect, useState } from 'react';
import { getAllRestaurants } from '../services/api';
import { IRestaurant } from '../interfaces/restaurant';


const HomeScreen: React.FC = () => {
  const[allRestaurants,setAllRestaurants]=useState<IRestaurant[]>()
  useEffect(() => {void getAllRestaurants().then((response)=>{setAllRestaurants(response)})},[]);
  return (
    <IonPage>
      
      <IonContent fullscreen>
        <div className='home_screen'>
          <div className='header_section'>
            <FilterComponents/>
          </div>
          <div className='body_section'>
           <div className='banner_section'>
            <HomeBanner/>
            </div>
            <div className="restaurant_section">
            {allRestaurants && allRestaurants.map((restaurant, restaurantIndex) => {return(<div key ={restaurantIndex}>
            <RestaurantCard restaurantData={restaurant}/></div>)})}</div>
          </div>
        </div>
        
      </IonContent>
    </IonPage>
  );
};

export default HomeScreen;
