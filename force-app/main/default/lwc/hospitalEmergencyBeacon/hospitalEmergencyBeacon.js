import { LightningElement, wire } from 'lwc';

import { fireEvent } from 'c/pubsub';
import { CurrentPageReference} from 'lightning/navigation';

export default class HospitalEmergencyBeacon extends LightningElement {

    _natureOfEmergency;

   //Find the current page using @wire LDS 
   @wire(CurrentPageReference) pageReference;

    handleEmergencyCodeClick(event)
    {
        this._natureOfEmergency =  event.target.label;
    

        //initalize event msg to parent 
        const hospitalemergencycodeevent = new CustomEvent("emergencytrigger", {detail: this._natureOfEmergency} );

        //Dispatch to Parent
        this.dispatchEvent(hospitalemergencycodeevent);

        //console.log("Event dispatched !!!");

        // fireEvent() to send emergency code to an unrelated component or component in a different hierarchy
        console.log('this.pageReference::' + JSON.stringify(this.pageReference));
        console.log("You have triggered: " + this._natureOfEmergency );
        
        fireEvent(this.pageReference, 'pubsubemergencytrigger', this._natureOfEmergency);

    }
}