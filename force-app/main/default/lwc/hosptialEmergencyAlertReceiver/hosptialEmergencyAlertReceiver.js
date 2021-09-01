import { LightningElement } from 'lwc';

export default class HosptialEmergencyAlertReceiver extends LightningElement {

    _emergencybroadcastMessage ="AWaitign for emergency beacon trigger .....";
    handleEmergencyCodeAlert(event)
    {
        const emergencycode = event.detail;
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