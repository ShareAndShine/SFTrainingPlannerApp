import { LightningElement } from 'lwc';

export default class HospitalEmergencyBeacon extends LightningElement {

    _natureOfEmergency;
    handleEmergencyCodeClick(event)
    {
        this._natureOfEmergency =  event.target.label;
        console.log("You have triggered: " + this._natureOfEmergency );

        //initalize event msg to parent 
        const hospitalemergencycodeevent = new CustomEvent("emergencytrigger", {detail: this._natureOfEmergency} );

        //Dispatch to Parent
        this.dispatchEvent(hospitalemergencycodeevent);

        console.log("Event dispatched !!!");

    }
}