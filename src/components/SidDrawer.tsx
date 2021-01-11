import React from 'react';
import {IonMenu, IonIcon, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem,  IonMenuToggle  } from '@ionic/react'
import {options, list, home, logIn, personAdd} from 'ionicons/icons'

const SideDrawer:React.FC = () => {

    return(
<IonMenu contentId='main'>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonMenuToggle>
              <IonItem button routerLink='/home' >
                <IonIcon slot='start' icon={home}></IonIcon>
                <IonLabel>Home</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem button routerLink='/Login' >
                <IonIcon slot='start' icon={logIn}></IonIcon>
                <IonLabel>Login</IonLabel>
              </IonItem>
              <IonItem button routerLink='/SignUp' >
                <IonIcon slot='start' icon={personAdd}></IonIcon>
                <IonLabel>Sign Up</IonLabel>
              </IonItem>
              <IonItem button routerLink='/TodoListSelection' >
                <IonIcon slot='start' icon={list}></IonIcon>
                <IonLabel>TodoList Selection</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
    )
};

export default SideDrawer;