import {
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonToggle,
  IonRadio,
  IonCheckbox,
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
  IonContent,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonButtons,
  IonMenuButton,
} from "@ionic/react";
import React from "react";

import "./Home.css";
import { trashOutline, archiveOutline, star } from "ionicons/icons";
import AppBar from "../components/AppBar";

const Home: React.FC = () => {
  return (
    <IonPage>
      <AppBar/>
      <IonContent>
        <IonCard>
          <IonCardHeader className='ion-text-center'>
            <IonToolbar>
              <IonButtons slot='start'>
                <IonButton onClick={() => {}}>
                  <IonIcon slot='icon-only' icon={trashOutline} />
                </IonButton>
              </IonButtons>
              <IonTitle>Todo List Title</IonTitle>
              <IonButtons slot='end'>
                <IonButton onClick={() => {}}>
                  <IonIcon slot='icon-only' icon={archiveOutline} />
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonCardHeader>

          <IonItem>
            <IonLabel position='floating'>newTodo</IonLabel>
            <IonInput type='text' />
          </IonItem>

          <IonList>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonItem className='ion-text-center ion-no-padding ion-no-margin'>
                    <IonButton fill='clear'>
                      <IonIcon icon={trashOutline} />
                    </IonButton>
                    <IonLabel>Checkbox</IonLabel>
                    <IonCheckbox slot='end' />
                  </IonItem>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonList>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
