import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonProgressBar,
  IonReorder,
  IonRow,
  IonToolbar,
} from "@ionic/react";
import { chevronForwardCircleOutline, colorPalette } from "ionicons/icons";
import React, { useEffect } from "react";
import AppBar from "../components/AppBar";
import { useSelector, useDispatch } from "react-redux";
import { AuthState } from "../interface";
import { TodoListState } from "../interface";
import { initTodoLists } from "../store/actions/TodoList.Action";

const TodoListSelection: React.FC = () => {
  const dispatch = useDispatch();

  const selectUserId = (state:AuthState) => state.userId;
  const userId = useSelector(selectUserId);
  console.log(userId)

  const selecttodoListTitles = (state:TodoListState) => state.todoLists;
  const todoListTitles = useSelector(selecttodoListTitles)



  useEffect(() => {
      
 
   
  }, []);

  return (
    <React.Fragment>
      <IonPage>
        <AppBar />
        <IonContent>
          <IonCard>
            <IonCardHeader>
              <IonToolbar>
                <IonCardTitle>Create A New Goal List</IonCardTitle>
                <IonButtons slot='end'>
                  <IonButton fill='clear'>
                    <IonIcon slot='icon-only' icon={colorPalette} />
                  </IonButton>
                </IonButtons>
              </IonToolbar>
            </IonCardHeader>
            <IonCardContent>
              <IonItem>
                <IonLabel position='floating'>Enter List Title :</IonLabel>
                <IonInput type='text' />
              </IonItem>
            </IonCardContent>
          </IonCard>

          <IonCard color='primary'>
            <IonCardHeader className='ion-text-center'>
              <IonReorder slot='end' />
              <IonCardTitle>List Title</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonLabel>Completes:25</IonLabel>
                  </IonCol>
                  <IonCol>
                    <IonLabel>InCompletes:25</IonLabel>
                  </IonCol>
                  <IonCol>
                    <IonFab horizontal='end' vertical='bottom'>
                      <IonFabButton routerLink='/todolist/1' color='success'>
                        <IonIcon icon={chevronForwardCircleOutline} />
                      </IonFabButton>
                    </IonFab>
                  </IonCol>
                </IonRow>
              </IonGrid>
              <IonProgressBar color='success' value={0.5}></IonProgressBar>
            </IonCardContent>
          </IonCard>

          <IonCard color='secondary'>
            <IonCardHeader className='ion-text-center'>
              <IonReorder slot='end' />
              <IonCardTitle>List Title</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonLabel>Completes:25</IonLabel>
                  </IonCol>
                  <IonCol>
                    <IonLabel>InCompletes:25</IonLabel>
                  </IonCol>
                </IonRow>
              </IonGrid>
              <IonProgressBar color='success' value={0.5}></IonProgressBar>
            </IonCardContent>
          </IonCard>
          {todoListTitles &&
            todoListTitles.map((title: string, i: number) => <h1>{title}</h1>)}
        </IonContent>
      </IonPage>
    </React.Fragment>
  );
};

export default TodoListSelection;
