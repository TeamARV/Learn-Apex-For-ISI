import { LightningElement , api  } from 'lwc';

import { NavigationMixin } from 'lightning/navigation';



export default class TarjetaGame extends NavigationMixin(LightningElement) {

    @api gamequemado;  /* una porpiedad publica que su valor se setea */



    get isPlatformSteam(){
        return this.gamequemado.Plataforma__c.includes("STEAM")
    }


    navigateToObjectHome() {
        // Navigate to the Case object home page.
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Game__c',
                actionName: 'home'
            }
        });
    }

    navigateToWebPage() {

       

        
        // Navigate to a URL
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'https://brave-goat-e0fwkv-dev-ed.lightning.force.com/lightning/setup/DataManagementDataImporter/home'
            }
        },
        true // Replaces the current page in your browser history with the URL
      );
    }

    

   

}

