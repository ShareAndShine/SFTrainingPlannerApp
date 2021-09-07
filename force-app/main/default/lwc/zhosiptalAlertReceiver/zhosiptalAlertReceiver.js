import { LightningElement, wire } from 'lwc';
import {registerListener, unregisterAllListeners} from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class ZhosiptalAlertReceiver extends LightningElement {

    @wire(CurrentPageReference) pageRef;

    _emergencybroadcastMessage ="AWaiting for emergency beacon trigger .....";


    connectedCallback(){
        registerListener('pubsubemergencytrigger', this.onTriggerAlertHandler, this);
    }

    disconnectedCallback(){
        unregisterAllListeners(this);
    }


    onTriggerAlertHandler(payload){

        //this.selectedMeetingRoom = payload;
        console.log("Payload::" + payload);
        const emergencycode = payload;
        console.log("emergencycode received::" + emergencycode);
        
        if(emergencycode === 'Code Blue')
        {
            this._emergencybroadcastMessage = "Dispatch emergency SWAT team.... Sending comms to ICU...Sendign comms to OT..."
        }
        else if(emergencycode === 'Code Red')
        {
            this._emergencybroadcastMessage = "Dispatch emergency alert to admin team.... Intitate evacuation protocol...."
        }
        else if(emergencycode === 'Code Black')
        {
            this._emergencybroadcastMessage = "Sending comms to cops.... Sending comms to HQ...Intitate evacuation protocol..."
        }
    }

}