import { LightningElement } from 'lwc';

//constante para tabs
const NUM_OF_TABS = 3;
//



export default class Plantillamia extends LightningElement {


    // radio button
    value = ['option1'];

    get options() {
        return [
            { label: 'Ross', value: 'option1' },
            { label: 'Rachel', value: 'option2' },
        ];
    }

    get selectedValues() {
        return this.value.join(',');
    }

    handleChange(e) {
        this.value = e.detail.value;
    }


    //tabs 

    activeValueMessage = '';

    get tabs() {
        const tabs = [];
        for (let i = 0; i < NUM_OF_TABS; i++) {
            tabs.push({
                value: `${i}`,
                label: `Item ${i}`,
                content: `Tab Content ${i}`,
            });
        }
        return tabs;
    }

    handleActive(event) {
        this.activeValueMessage = `Tab with value ${event.target.value} is now active`;
    }



    // BOTONES

    clickedButtonLabel;

    handleClick(event) {
        this.clickedButtonLabel = event.target.label;
    }


    //listado de opciones

    
    valueL = 'inProgress';
    get optionsL() {
        return [
            { label: 'New', valueL: 'new' },
            { label: 'In Progress', valueL: 'inProgress' },
            { label: 'Finished', valueL: 'finished' },
        ];
    }

    handleChangeL(event) {
        this.valueL = event.detail.valueL;
    }


    datos123(event){

            this.clickedButtonLabel = event.target.label;
            let chartAmtData = [100,200,300];
            let chartLabel = ["algo","algo2","algo3"];
         
 
            this.chartConfiguration = {
                type: 'polarArea',
                data: {
                    datasets: [{
                            label: 'Amount',
                            backgroundColor: [
                                'rgba(255, 199, 132, 0.2)',
                                'rgba(155, 159, 64, 0.2)',
                                'rgba(055, 159, 64, 0.2)',
                   
                              ],
                              borderColor: [
                                'rgb(255, 199, 132)',
                                'rgb(255, 159, 64)',
                                'rgba(255, 159, 64, 0.2)',
                      
                              ],
                              borderWidth: 1,
                            data: chartAmtData,
                        },
                   
                    ],
                    labels: chartLabel,
                },
                options: {},
                
            };
         
        }
    

    

    



    




}


