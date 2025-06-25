import { IonContent, IonPage } from '@ionic/react'
import React from 'react'
import './RestaurantsMenuScreen.scss'
import MenuCard from '../components/menuComponents/MenuCard'
const RestaurantsMenuScreen:React.FC= () => {
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
             <MenuCard/>
            </div>
        </div>
        </div>
        
    </div>
    </IonContent>
    </IonPage>
  )
}

export default RestaurantsMenuScreen