import { LightningElement, wire } from 'lwc';
import pedir from "@salesforce/apex/pedir.getdataA"

export default class Peticiones extends LightningElement {

    @wire(pedir)
    misdatos
}



/* 
import { LightningElement , wire} from 'lwc';

import GamesService from "@salesforce/apex/GamesService.GamesService"

export default class GetGames extends LightningElement {

 
    
    @wire(GamesService)
    misgames


    /* misgames.data ---> datos devueltos por Apex
    misgames.error  ---> si hay un error */

