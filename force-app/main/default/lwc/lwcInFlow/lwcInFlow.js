import { LightningElement, wire, api } from 'lwc';
import getContractStatus from '@salesforce/apex/AccountLibController.getContractStatus'

export default class LwcInFlow extends LightningElement {

    // property to hold account Id which Flow will pass it in 
    @api strRecordId; 

       // property to hold op from APEX method
    allContractWithStatus;

     
    // Make a call to APEX method by passing the same account ID came in from Flow
    @wire(getContractStatus, {strAccountId : '$strRecordId'})    
    loadContractStatus(data, error)
    {
        console.log("data::" + JSON.stringify(data));
        this.allContractWithStatus = data;
    }
    

}