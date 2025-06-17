import { IonContent,IonPage } from '@ionic/react';

import './HomeScreen.scss';
import FilterComponents from '../components/HomeComponents/FilterComponents';


const HomeScreen: React.FC = () => {
  return (
    <IonPage>
      
      <IonContent fullscreen>
        <div className='home_screen'>
          <div className='header_section'>
            <FilterComponents/>
          </div>
          <div className='body_section'>
           
          </div>
        </div>
        
      </IonContent>
    </IonPage>
  );
};

export default HomeScreen;
