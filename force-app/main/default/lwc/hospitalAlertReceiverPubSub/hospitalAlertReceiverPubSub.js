import { LightningElement, wire } from 'lwc';
import { CurrentPageReference} from 'lightning/navigation';
import { registerListener, unregisterAllListeners } from 'c/pubsub';


export default class HospitalAlertReceiverPubSub extends LightningElement {

    _emergencybroadcastMessage ="Awaiting for emergency beacon trigger .....";

   //Find the current page using @wire LDS 
   @wire(CurrentPageReference) pageRef;

   connectedCallback()
   {
    console.log("Inside connected call back")

    registerListener('pubsubemergencytrigger', this.onpubsubemergencytrigger, this);
   }

   disconnectedCallback()
   {
    unregisterAllListeners(this);
    
   }

   onpubsubemergencytrigger(payload)
   {
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