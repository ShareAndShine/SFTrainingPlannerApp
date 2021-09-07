import { LightningElement, wire } from 'lwc';
import {fireEvent} from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class HospitalEmergencyBeacon extends LightningElement {

    _natureOfEmergency;

    @wire(CurrentPageReference) pageReference; 

    handleEmergencyCodeClick(event)
    {
        this._natureOfEmergency =  event.target.label;
        console.log("You have triggered: " + this._natureOfEmergency );

        //initalize event msg to parent 
        const hospitalemergencycodeevent = new CustomEvent("emergencytrigger", {detail: this._natureOfEmergency} );

        //Dispatch to Parent
        this.dispatchEvent(hospitalemergencycodeevent);

        console.log("Event dispatched !!!");

        //Unrelated comms
        fireEvent(this.pageReference, 'pubsubemergencytrigger', this._natureOfEmergency);

    }
}