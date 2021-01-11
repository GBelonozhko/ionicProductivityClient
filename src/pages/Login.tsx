import React, { useState, useRef } from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import AppBar from "../components/AppBar";
import { useDispatch, useSelector } from "react-redux";
import * as action from '../store/actions/Auth.Action';
import { Redirect } from "react-router";
import { AuthState } from "../interface";


const Login: React.FC<{}> = () => {

  const dispatch = useDispatch();

  const token = (state:AuthState) =>state.token;
  const loginToken =useSelector(token);

  const signin = (event: React.MouseEvent<HTMLIonButtonElement, MouseEvent>) => {
    event.preventDefault();
    dispatch(action.auth( "odessagreg@gmail.com", "rock92", true ))
    
  };

  const redirectUser =()=>{
    if (loginToken!==null){
      return <Redirect to="/"/>
    }
  }

  return (
    <React.Fragment>
      <IonPage>
        <AppBar />
        <IonContent>
          <IonCard>
            <IonCardHeader color="primary" className='ion-text-center'>
                
              <IonTitle>Login</IonTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonItem > 
                  <IonLabel position="floating">Enter Email :</IonLabel>
                <IonInput type='email' />
              </IonItem>
              <IonItem className="ion-margin-bottom">
              <IonLabel position="floating">Enter Password :</IonLabel>
                <IonInput type='password' />
              </IonItem>

                <IonButton routerLink="/SignUp">Create a new Account</IonButton>
                <IonButton className="ion-float-end" onClick={(event)=>signin(event)}>Submit</IonButton>
             
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
    
    </React.Fragment>
  );
};

export default Login;
