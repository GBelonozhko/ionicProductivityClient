import { IonHeader, IonToolbar, IonTitle, IonMenuButton, IonButton, IonButtons } from "@ionic/react";
import React from "react";

const AppBar:React.FC = () => {

    return(
        <React.Fragment>
            <IonHeader>
                    <IonToolbar color="success">
                        <IonTitle>
                            Do Or Do Not There Is No Try
                        </IonTitle>   
                        <IonButtons slot='end'>
                        <IonMenuButton/>
                     </IonButtons>                   
                    </IonToolbar>
                </IonHeader>
        </React.Fragment>
    );

};

export default AppBar;