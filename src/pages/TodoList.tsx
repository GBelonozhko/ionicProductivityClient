import { IonPage, IonContent, IonCard, IonCardHeader, IonToolbar, IonButtons, IonButton, IonIcon, IonTitle, IonItem, IonLabel, IonInput, IonList, IonGrid, IonRow, IonCol, IonCheckbox } from "@ionic/react";
import { trashOutline, archiveOutline } from "ionicons/icons";
import React from "react";
import AppBar from "../components/AppBar";

const TodoList:React.FC = () => {

    return(
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

export default TodoList;