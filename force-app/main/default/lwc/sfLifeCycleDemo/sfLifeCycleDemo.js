import { LightningElement } from 'lwc';

export default class SfLifeCycleDemo extends LightningElement {

    constructor()
    {
        super();
        console.log("Life cycle demo: Inside Constructor!!!")
    }

    connectedCallback()
    {
        console.log("Life cycle demo: Inside connected call back!!!")
    }

    renderedCallback()
    {
        
        console.log("Life cycle demo: Inside rendered call back!!!")
    }

    disconnectedCallback()
    {
     console.log("Life cycle demo: Inside disconnected call back!!!")
    }
}